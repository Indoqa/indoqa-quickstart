# Indoqa Quickstart

## Create and use the Indoqa-Boot archetype
```bash
./createIndoqaBootArchetype.sh
cd /tmp
mvn archetype:generate -DarchetypeCatalog=local
```

## Release
```bash
./createIndoqaBootArchetype.sh
mkdir ./releases/indoqa-quickstart-boot-{version}
cp -R indoqa-quickstart-boot/target/generated-sources/archetype to ./releases/indoqa-quickstart-boot-{version}
mvn release:prepare
mvn release:perform '-Darguments=-Drat.skip=true'
```
