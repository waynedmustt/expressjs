#!/bin/bash

mysql -u glints -p -e "CREATE DATABASE glints_expressjs;";
mysql -u glints -p -D glints_expressjs < database.sql;
mysql -u glints -p -D glints_expressjs < seeder.sql;