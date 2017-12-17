#!/bin/sh

# sync frontend with indoqa-react-redux
rsync -a -v --delete \
  --exclude "node_modules" \
  --exclude ".gitignore" \
  --exclude "pom.xml" \
  --exclude "dist-zip.xml" \
  --exclude "src/doc" \
  --exclude "docs" \
  --exclude "target" \
  --exclude "indoqa-webpack-docs.js" \
  --exclude "README.md" \
  --exclude "indoqa-react-redux.iml" \
  --exclude "yarn.lock" \
  --exclude ".git" \
  --exclude ".idea" \
  ../indoqa-react-redux/ "./indoqa-quickstart-boot/quickstart-boot-frontend"

# create the archetype project from the project
cd ./indoqa-quickstart-boot
mvn clean archetype:create-from-project \
  -Darchetype.filteredExtensions=json \
  -Drat.skip=true \
  -P !frontend

# post process the created archetype (adapt some names, etc.)
cd ..
node postProcessIndoqaQuickstartBoot.js

# locally install the archetype
cd ./indoqa-quickstart-boot/target/generated-sources/archetype/
mvn install -Drat.skip=true

cd ../../../../

# sync the archetype output with the release project
#rsync -a -v --delete \
#  --exclude "target" \
#  --exclude "LICENSE" \
#  --exclude ".project" \
#  --exclude ".classpath" \
#  --exclude ".settings" \
#  --exclude "README.md" \
#  --exclude ".gitignore" \
#  --exclude ".git" \
#  ./indoqa-quickstart-boot/target/generated-sources/archetype/ ../indoqa-quickstart-boot_release
