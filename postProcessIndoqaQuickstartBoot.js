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
  packageJson.devDependencies["react-scripts"] = "3.3.0"
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

const modifyPom = () => {
  const pomPath = './indoqa-quickstart-boot/target/generated-sources/archetype/pom.xml'
  const replacement = `<parent>
    <groupId>com.indoqa</groupId>
    <artifactId>indoqa-oss-parent</artifactId>
    <version>6</version>
  </parent>
  <name>quickstart-boot-archetype</name>
  <description>A quickstart for Java/React projects based on Indoqa Boot</description>
  <scm>
    <connection>scm:git:git@github.com:Indoqa/indoqa-quickstart-boot_release.git</connection>
    <developerConnection>scm:git:git@github.com:Indoqa/indoqa-quickstart-boot_release.git</developerConnection>
    <url>https://github.com/Indoqa/indoqa-quickstart-boot_release</url>
    <tag>HEAD</tag>
  </scm>
  `

  const data = fs.readFileSync(pomPath, 'utf8')
  const result = data.replace(/\<name\>quickstart-boot-archetype\<\/name\>/g, replacement)
  fs.writeFileSync(pomPath, result, 'utf8', (err) => {
     if (err) return console.log(err)
  })

  console.log(`Modified ${pomPath}`)
}

const modifySvg = () => {
  const overviewTsxPath = './indoqa-quickstart-boot/target/generated-sources/archetype/src/main/resources/archetype-resources/__rootArtifactId__-frontend/src/overview/pages/OverviewPage.tsx'
  const replacement = 'import {ReactComponent as SourceCodeImage}'
  const data = fs.readFileSync(overviewTsxPath, 'utf8')
  const result = data.replace(/import SourceCodeImage/g, replacement)
  fs.writeFileSync(overviewTsxPath, result, 'utf8', (err) => {
     if (err) return console.log(err)
  })

  console.log(`Modified ${overviewTsxPath}`)
}

modifyRootPackageJson()
modifyFrontendPackageJson()
modifyPom()
modifySvg()
