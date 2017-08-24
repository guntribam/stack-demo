var packageJson = require(`./${process.argv[2]}/package.json`)
var {swap} = packageJson
var fs = require('fs')
var target = {}

switch (swap.dependencyTarget) {
  case 'local':
    target = swap.publishedDependencies
    swap.dependencyTarget = 'published'
    break
  case 'published':
    target = swap.localDependencies
    swap.dependencyTarget = 'local'
    break
  default:
    throw new Error('incorrect dependencyTarget')
}

console.log(`-------------- ${swap.dependencyTarget} ----------------`)
for (let name in target) {
  let value = target[name]
  console.log(`${name}:${value}`)
  packageJson.dependencies[name] = value
}

fs.writeFile('./package.json', JSON.stringify(packageJson, null, '  '))
