#!/usr/bin/env node
const { exec } = require('child_process')

swap('app')
swap('api')

function swap (dir) {
  const projectPath = `D:/code/stack/stack-demo/${dir}`
  const ls = exec(`"sp-swap" ${projectPath}`, (error, stdout, stderr) => {
    if (error) return console.error(`exec error: ${error}`)
    console.log(`${stdout}`)
    console.log(`${stderr}`)
  })
}
