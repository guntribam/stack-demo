#!/usr/bin/env node
const { spawn } = require('child_process')
console.log()

swap('app')
swap('api')

function swap (dir) {
  const env = {
    path: `${__dirname}/${dir}`,
    targetName: process.argv[2]
  }
  spawn(`sp-swap`, {stdio: 'inherit', shell: true, env})
}
