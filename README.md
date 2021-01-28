# Description

REST API using ExpressJS and MySQL Example.

# Running the Application

## Installation

```bash
$ npm install
```

## Database

Please `take note` you need to install MySQL first to run the server.
Also make sure you already create the database user who is responsible to access the database.
In this example, we assume we already created the database user 'glints'. 

```bash
# env
$ cp .env.example .env

# change init-db.sh to be executable script
$ chmod +x init-db.sh

# run script
$ ./init-db.sh
```

## Running App
```bash
$ npm run start
```
