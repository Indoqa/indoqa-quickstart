
mvn clean archetype:create-from-project -Darchetype.filteredExtensions=java
cd target/generated-sources/archetype/
mvn install

cd /tmp
mvn archetype:generate -DarchetypeCatalog=local
