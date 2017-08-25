#!/usr/bin/env node
const { exec } = require('child_process')
console.log()

swap('app')
swap('api')

function swap (dir) {
  const path = `${__dirname}/${dir}`
  const target = process.argv[2]
  exec(`"sp-swap" ${path} ${target}`, (error, stdout, stderr) => {
    console.log(`${stdout}`)
    if (stderr) console.log(`${stdout}`)
  })
}
