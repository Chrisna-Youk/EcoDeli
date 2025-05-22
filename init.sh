#!/bin/bash

if { [ "$1" = "prod" ] || [ "$1" = "dev" ]; } && { [ "$2" = "down" ] || [ "$2" = "up" ] || [ "$2" = "stop" ]; }; then
    fileEnv="docker-compose.${1}.yml"
    action=$2
    echo "Running: sudo docker compose -f $fileEnv $action"

    if [ "$action" = "up" ]; then
      sudo docker volume create ecodeli-frontend-dev-v
      sudo docker volume create ecodeli-backend-dev-v
      sudo docker volume create ecodeli-database-dev-v

      sudo docker compose -f "$fileEnv" up
    else
        sudo docker compose -f "$fileEnv" "$action"
    fi
else
    echo "Usage: ${0} dev|prod up|down|stop"
fi

#################
##### USAGE #####
#################

# ./init.sh prod up
# ./init.sh dev up
# ./init.sh prod down
# ./init.sh dev down
