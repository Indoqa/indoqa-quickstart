#!/bin/sh

# sync frontend with indoqa-react-redux
rsync -a -v --delete \
  --exclude "node_modules" \
  --exclude ".gitignore" \
  --exclude "pom.xml" \
  --exclude "dist-zip.xml" \
  ../indoqa-react-redux/ "./indoqa-quickstart-boot/quickstart-boot-frontend"

# create the archetype project from the project
cd ./indoqa-quickstart-boot
mvn clean archetype:create-from-project -Darchetype.filteredExtensions=java -Drat.skip=true

# post process the created archetype (adapt some names, etc.)
cd ..
node postProcessIndoqaQuickstartBoot.js

# locally install the archetype
cd ./indoqa-quickstart-boot/target/generated-sources/archetype/
mvn install -Drat.skip=true
cd ../../../../../
