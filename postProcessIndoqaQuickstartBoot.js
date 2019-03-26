#! /usr/bin/env node
const fs = require('fs')

const allowedDevDependencies = [
  "react-scripts", 
  "redux-devtools-extension", 
  "rimraf", 
  "source-map-explorer", 
  "tslint", 
  "typescript"
]

const modifyRootPackageJson = () => {
  const baseFilePath = './indoqa-quickstart-boot/target/generated-sources/archetype/src/main/resources/archetype-resources/package.json'
  const baseFileData = fs.readFileSync(baseFilePath, 'utf8')

  const includeFilePath = '../indoqa-react/package.json'
  const packageJson = JSON.parse(fs.readFileSync(includeFilePath, 'utf8'));
  packageJson.devDependencies["react-scripts"] = "^2.1.8"
  const resultDevDependencies = {}
  Object.keys(packageJson.devDependencies).sort().forEach(key => {
    if (key.startsWith('@types') || allowedDevDependencies.includes(key)) {
      resultDevDependencies[key] = packageJson.devDependencies[key]
    }
  })
  let devDependencies = `"devDependencies": ${JSON.stringify(resultDevDependencies, null, 4)}`
  devDependencies = devDependencies.replace(/}/g, '  }')
  const result = baseFileData.replace(/"devDependencies":(.|\n)*?}/g, devDependencies)
  fs.writeFileSync(baseFilePath, result, 'utf8', (err) => {
    if (err) return console.log(err)
 })
 
 console.log(`Modified ${baseFilePath}`)
}

const modifyFrontendPackageJson = () => {
  const baseFilePath = './indoqa-quickstart-boot/target/generated-sources/archetype/src/main/resources/archetype-resources/__rootArtifactId__-frontend/package.json'
  const baseFileData = fs.readFileSync(baseFilePath, 'utf8')

  const includeFilePath = '../indoqa-react/packages/react-starter/package.json'
  const packageJson = JSON.parse(fs.readFileSync(includeFilePath, 'utf8'));
  let dependencies = `"dependencies": ${JSON.stringify(packageJson.dependencies, null, 4)}`
  dependencies = dependencies.replace(/}/g, '  }')
  const result = baseFileData.replace(/"dependencies":(.|\n)*?}/g, dependencies)
  fs.writeFileSync(baseFilePath, result, 'utf8', (err) => {
    if (err) return console.log(err)
  })
  
  console.log(`Modified ${baseFilePath}`)
}

modifyRootPackageJson()
modifyFrontendPackageJson()
