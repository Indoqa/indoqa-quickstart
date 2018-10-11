# Indoqa Quickstart

## Create and use the Indoqa-Boot archetype
```bash
./createIndoqaBootArchetype.sh
cd /tmp
mvn archetype:generate -DarchetypeCatalog=local
```

## Release
* make sure that indoqa-react-redux-ts contains all the expected resources
  * upgrading all dependencies
  * tag the release manually: `git tag [tagname]` and push it to the remote repository
* release indoqa-boot-bom
* release indoqa-boot (set the version of indoqa-boot-bom to the released version because using ${project.version} does not resolve correctly)
* set the indoqa-boot version of this archetype project to the expected version
* uncomment the sync to indoqa-quickstart-boot_release in createIndoqaBootArchetype.sh
* trigger the release (see below)
* set the indoqa-boot version of this archetype project to the current SNAPSHOT version

```bash
./createIndoqaBootArchetype.sh
cd ../indoqa-quickstart-boot_release
git add -A 
git commit -m "prepare release"
mvn release:prepare
mvn release:perform '-Darguments=-Drat.skip=true'
```
