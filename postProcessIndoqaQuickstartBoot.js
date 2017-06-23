#! /usr/bin/env node

const fs = require('fs')

const modifyPom = () => {
  const pomPath = './indoqa-quickstart-boot/target/generated-sources/archetype/pom.xml'
  const replacement = `<parent>
    <groupId>com.indoqa</groupId>
    <artifactId>indoqa-oss-parent</artifactId>
    <version>5</version>
  </parent>

  <name>quickstart-boot-archetype</name>

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

const removeUnnecessaryFiles = () => {
  const projectFile = './indoqa-quickstart-boot/target/generated-sources/archetype/src/main/resources/archetype-resources/.project'
  if (fs.existsSync(projectFile)) {
    fs.unlinkSync(projectFile)
  }

  console.log(`Removed ${projectFile}`)
}

const modifyPackageJson = () => {
  const packageJsonPath = './indoqa-quickstart-boot/target/generated-sources/archetype/src/main/resources/archetype-resources/__rootArtifactId__-frontend/package.json'
  const versionReplacement = `"version": "0.0.0",
  "private": "true",`

  const data = fs.readFileSync(packageJsonPath, 'utf8')
  const result = data
    .replace(/Apache-2\.0/g, 'UNLICENSED')
    .replace(/"version":.".\..\..",/g, versionReplacement)
    .replace(/indoqa-react-redux-archetype/g, 'quickstart-indoqa-boot-frontend')
    .replace(/Indoqa React\/Redux Archetype/g, 'Quickstart Indoqa Boot: Frontend')
    .replace(/git@github\.com:Indoqa\/indoqa-react-redux.git/g, 'git@github.com:Organization/project-name')
    .replace(/    "docs": "indoqa-webpack \.\/indoqa-webpack-docs\.js",\n/g,'')


  fs.writeFileSync(packageJsonPath, result, 'utf8', (err) => {
     if (err) return console.log(err)
  })

  console.log(`Modified ${packageJsonPath}`)
}

modifyPom()
modifyPackageJson()
removeUnnecessaryFiles()
