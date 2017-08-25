#!/usr/bin/env node
const { exec } = require('child_process')
const projectPath = 'D:/code/stack/stack-demo'
const target = process.argv[2]

swap('app')
swap('api')

function swap (dir) {
  path = `${projectPath}/${dir}`
  const ls = exec(`"sp-swap" ${path} ${target}`, (error, stdout, stderr) => {
    console.log(`${stdout}`)
  })
}
