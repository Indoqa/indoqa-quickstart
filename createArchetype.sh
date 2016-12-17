#!/bin/sh
cd ./indoqa-quickstart-boot
mvn clean archetype:create-from-project -Darchetype.filteredExtensions=java
cd ./target/generated-sources/archetype/
mvn install
cd ../../../../

