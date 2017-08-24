var manifest = require('./package.json')
var symMap = require('./sym-map.json')
var fs = require('fs')

for (let name in symMap) {
  let manifestValue = manifest.dependencies[name]
  manifest.dependencies[name] = symMap[name]
  symMap[name] = manifestValue
}

fs.writeFile('./package.json', JSON.stringify(manifest, null, '  '))
fs.writeFile('./sym-map.json', JSON.stringify(symMap, null, '  '))
