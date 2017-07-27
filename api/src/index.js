import 'babel-polyfill'
import { sharedServices } from '@gp-technical/stack-redux-api'
// import { sharedServices } from '@gp-technical/stack-redux-api'
import { gpapi } from '@gp-technical/stack-pack-gpapi'
import rest from '@gp-technical/stack-pack-rest'
import sso from '@gp-technical/stack-pack-sso'
import socket from '@gp-technical/stack-pack-socket'
import { x509 } from "@gp-technical/stack-pack-util"
import { request } from "@gp-technical/stack-pack-request"
import file from "@gp-technical/stack-pack-file"
import api from "@gp-technical/stack-pack-api"
import message from "@gp-technical/stack-pack-message"
import action from "@gp-technical/stack-pack-action"
import awsS3 from "@gp-technical/stack-pack-awsS3"
import mongo from "@gp-technical/stack-pack-mongo"

import localServices from './service'
import express from './express'
import winston from 'winston'
import Logger from 'le_node' // eslint-disable-line no-unused-vars
import util from 'util'

const services = {...localServices, ...sharedServices}

winston.add(winston.transports.Logentries, { token: process.env.API_LOGENTRIES_TOKEN })
winston.info('---------------------------')

;(async () => {
  try {
    // Starts an HTTPS express server
    const {tls, app} = await express.start(services)

    // Performs the security handshake with the GP-API
    // Sets up a single proxy endpoint to allow secure access to all GP-API endpoints
    // To use self-signed TLS certs ensure the GP-API console is running with the debugger attached.
    await gpapi.handshake({
      app,
      apiUrl: process.env.GP_API_URL,
      keyPublic: process.env.GP_API_PUBLIC,
      keyPrivate: process.env.GP_API_SECRET,
      keyAdmin: process.env.GP_API_ADMIN
    })

    // Discovers and mounts any endpoints found in service/router.js files
    // Note the baseUrl prefix. This is an optional namespace for all the
    // rest endpoints provided by the individual services.
    rest.setRoutes({
      app,
    services})

    // Mounts the SSO routes to allow for SSO handshakes
    sso.setRoutes({
      app,
      cookieSecret: process.env.SSO_COOKIE_SECRET,
      idpUrl: process.env.SSO_IDP_URL,
      keyDecrypt: x509.formatPrivateKey(process.env.SSO_SP_PRIVATE_KEY),
      spEntityId: process.env.SSO_SP_ENTITYID
    })

    // Connects the socket to receive and broadcast REDUX actions to and from the app
    socket.connect({
      services,
    tls})
  } catch (inner) {
    const err = new Error(`An error occurred whilst starting the ${process.env.API_NAME} API`)
    err.inner = inner
    winston.error(util.inspect(err))
  }
})()
