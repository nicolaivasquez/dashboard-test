# Dashboard Tech Test Demo

## Description
This app is a quick and dirty dashboard mockup. There will be CRUD operations 
for 'processes'.

* User can view list of active processes 
* User can add a named process which will be appended to the list
* User can remove an active process and will be removed from the list
* User can edit the name of the process
* User can expand active process and view a mock visualisation
* User can perform a reset action which will clear visualisation and restart the process

## Build Local Environment
This app uses docker to prepare local environment.

Simply run 
```
docker-compose up -d
```
The webapp should be visible on http://(localhost/dockerhost):3000

## Unit tests
To run unit tests, assuming docker-compose is up, run:
```
docker-compose exec -e CI=true ui yarn test 
```
