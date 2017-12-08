# Ramverk2

# Me-page for Ramverk2

[![Build Status](https://travis-ci.org/kundkingan/ramverk2.svg?branch=master)](https://travis-ci.org/kundkingan/ramverk2)
[![codecov](https://codecov.io/gh/kundkingan/ramverk2/branch/master/graph/badge.svg)](https://codecov.io/gh/kundkingan/ramverk2)
[![Maintainability](https://api.codeclimate.com/v1/badges/b9a5a198a01f2c474cb3/maintainability)](https://codeclimate.com/github/kundkingan/ramverk2/maintainability)

## Technologies used

* Express
* Pug
* Websocket
* Mongodb

## Installation
To install all of the dependencies then simply execute:

```bash
npm install
```

## Environment

Change port with: DBWEBB_PORT
Change DSN with: DBWEBB_DSN

## Local development
To run a local development then execute following and go to localhost:3000

```bash
npm start
```

To run a docker container then execute 

```bash
npm run docker
```

## Mongodb

DSN for mongo is mongodb://192.168.99.100:27017/mumin

## Testing

```bash
npm test
```

## Docker testing

```bash
# Build images
npm run docker-build

# Node v6
npm run docker-6

# Node v8
npm run docker-8

# Node latest
npm run docker_latest
```




