#!/bin/sh

# sync frontend with indoqa-react-redux
rsync -a -v --delete \
  --include "public/***" \
  --include "src/***" \
  --exclude "*" \
  ../indoqa-react/packages/react-starter/ "./indoqa-quickstart-boot/quickstart-boot-frontend"

rsync -a -v --delete \
  --include "tsconfig.base.json" \
  --include "tslint.json" \
  --exclude "*" \
  ../indoqa-react "./indoqa-quickstart-boot"

# create the archetype project from the project
cd ./indoqa-quickstart-boot
mvn clean archetype:create-from-project \
  -Darchetype.filteredExtentions=json,java \
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
#  --exclude "README.md" \
#  --exclude ".gitignore" \
#  --exclude "LICENSE" \
#  --exclude "target" \
#  --exclude ".git" \
#  ./indoqa-quickstart-boot/target/generated-sources/archetype/ ../indoqa-quickstart-boot_release
