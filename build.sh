#!/bin/bash

if [[ $1 == "prod" ]]; then
  ENV_FILE=".env.production"
else
  ENV_FILE=".env.development"
fi

docker-compose --env-file $ENV_FILE up
