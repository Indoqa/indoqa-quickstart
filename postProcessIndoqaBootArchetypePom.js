#! /usr/bin/env node

const fs = require('fs')

const modifyPom = () => {
  const pomPath = './indoqa-quickstart-boot/target/generated-sources/archetype/pom.xml'
  const replacement = `<parent>
      <groupId>com.indoqa</groupId>
      <artifactId>indoqa-oss-parent</artifactId>
      <version>4</version>
    </parent>

    <name>quickstart-boot-archetype</name>

    <scm>
      <connection>scm:git:git@github.com:Indoqa/indoqa-quickstart.git</connection>
      <developerConnection>scm:git:git@github.com:Indoqa/indoqa-quickstart.git</developerConnection>
      <url>https://github.com/Indoqa/indoqa-quickstart</url>
      <tag>HEAD</tag>
    </scm>
  `

  const data = fs.readFileSync(pomPath, 'utf8')
  const result = data.replace(/\<name\>quickstart-boot-archetype\<\/name\>/g, replacement)
  fs.writeFileSync(pomPath, result, 'utf8', (err) => {
     if (err) return console.log(err)
  })
}

modifyPom()
