#!/bin/bash

mysql -u sammy -p -e "CREATE DATABASE glints_expressjs;";
mysql -u sammy -p -D glints_expressjs < database.sql;
mysql -u sammy -p -D glints_expressjs < seeder.sql;