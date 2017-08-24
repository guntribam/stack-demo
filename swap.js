#!/usr/bin/env node
const { exec } = require('child_process')
const projectPath = 'D:/code/stack/stack-demo'

swap('app')
swap('api')

function swap (dir) {
  path = `${projectPath}/${dir}`
  const ls = exec(`"sp-swap" ${path}`, (error, stdout, stderr) => {
    if (error) return console.error(`exec error: ${error}`)
    console.log(`${stdout}`)
    console.log(`${stderr}`)
  })
}
