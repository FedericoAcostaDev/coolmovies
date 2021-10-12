# Introduction

// node:14;17.3-buster  

# Getting Started

## Install Docker and Docker compose

https://docs.docker.com/engine/install/ubuntu/ 

## Start backend server

## Build UI structure

:mega: Warning: You might need "sudo" to run docker commands.

1. First we need to be at our frontend directory path

`cd coolmovies-frontend/ui`

2. Then we'll need to create our app's image. You can do this by the script `docker:up` set by our package.json script or by the original command:

`docker build -t react:app .`

3. So we can run our app. You can do this by the script `docker:run` set by our package.json script or by the original command:

`docker run -p 3000:3000 react:app`

4. That's it! Access [port 3000](http://localhost:3000)

## Stop running current container

1. Check current running containers by following command:

`docker ps`

2. Your terminal should show something like this:

| CONTAINER ID |  IMAGE          |
|--------------|-----------------|
| 00NUMBERID00 | react:app       |

3. Get the number of which container you want to stop and execute:

`docker stop 00NUMBERID00`

4. That's it! Then you can start another 