# Introduction

# Technologies

- React.Js
- Typescript
- Styled Components
- Jest Testing library
- Apollo Client
- GraphQl
- Postgres db

# Getting Started

## Install Docker and Docker compose

https://docs.docker.com/engine/install/ubuntu/ 

## Backend server and database

1. First we need to be at out backend directory path

`cd coolmovies-backend`

2. Then, we should run our docker compose file

`docker-compose up`

## Build UI structure

:mega: Warning: You might need "sudo" to run docker commands.

1. First we need to be at our frontend directory path

`cd coolmovies-frontend/ui`

2. Then we'll need to create our app's image. You can do this by the script `docker:up` set by our package.json script or by the original command:

`docker build -t react-coolmovies:app .`

3. So we can run our app. You can do this by the script `docker:run` set by our package.json file or by the original command:

`docker run -p 3000:3000 react-coolmovies:app`

4. That's it! Access [port 3000](http://localhost:3000)

:mega: If you want to use docker container with hotreload for local development, then use the shortcut `docker:watch` instead of step three command! This shortcut has also been set in our package.json file.

## Stop running current container

1. Check current running containers by following command:

`docker ps`

2. Your terminal should show something like this:

| CONTAINER ID |  IMAGE          |
|--------------|-----------------|
| 00NUMBERID00 | react:app       |

3. Get the number of which container you want to stop and execute:

`docker stop 00NUMBERID00`

4. That's it! Then you can run another one at the same port. To check built images, run command `docker images`