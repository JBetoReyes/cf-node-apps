#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE TABLE "Products" (
    model character varying NOT NULL,
    maker character varying NOT NULL,
    type character varying NOT NULL,
    PRIMARY KEY (model)
  );
  
  INSERT INTO "Products" (maker, model, type) values ('A', '1232', 'PC');
  INSERT INTO "Products" (maker, model, type) values ('A', '1233', 'PC');
  INSERT INTO "Products" (maker, model, type) VALUES ('A', '1276', 'Printer');
  INSERT INTO "Products" (maker, model, type) VALUES ('A', '1298', 'Laptop');
  INSERT INTO "Products" (maker, model, type) VALUES ('A', '1401', 'Printer');
  INSERT INTO "Products" (maker, model, type) VALUES ('A', '1408', 'Printer');
  INSERT INTO "Products" (maker, model, type) VALUES ('A', '1752', 'Laptop');
  INSERT INTO "Products" (maker, model, type) VALUES ('B', '1121', 'PC');
  INSERT INTO "Products" (maker, model, type) VALUES ('B', '1750', 'Laptop');
  INSERT INTO "Products" (maker, model, type) VALUES ('C', '1321', 'Laptop');
  INSERT INTO "Products" (maker, model, type) VALUES ('D', '1288', 'Printer');
  INSERT INTO "Products" (maker, model, type) VALUES ('D', '1433', 'Printer');
  INSERT INTO "Products" (maker, model, type) VALUES ('E', '1260', 'PC');
  INSERT INTO "Products" (maker, model, type) VALUES ('E', '1434', 'Printer');
  INSERT INTO "Products" (maker, model, type) VALUES ('E', '2112', 'PC');
  INSERT INTO "Products" (maker, model, type) VALUES ('E', '2113', 'PC');

EOSQL
