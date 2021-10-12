# Introduction

# Getting Started

## Install Docker and Docker compose

https://docs.docker.com/engine/install/ubuntu/ 

## Start backend server

## Build UI structure

`cd coolmovies-frontend/ui`

`docker build -t react:app .`

`docker run -p 3000:3000 react:app`

## Stop running container

`docker ps`

| CONTAINER ID |  IMAGE          |
|--------------|-----------------|
| 00NUMBERID00 | react:app       |

`docker stop 00NUMBERID00`  