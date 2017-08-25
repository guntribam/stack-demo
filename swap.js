#!/usr/bin/env node
const { exec } = require('child_process')
const projectPath = 'D:/code/stack/stack-demo'

swap('app')
swap('api')

function swap (dir) {
  const path = `${projectPath}/${dir}`
  const target = process.argv[2]
  exec(`"sp-swap" ${path} ${target}`, (error, stdout, stderr) => {
    console.log(`${stdout}`)
  })
}
