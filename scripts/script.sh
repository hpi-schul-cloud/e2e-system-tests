#!/bin/bash

# Get the first argument passed to the script
command="$1"
env="$2"

# Define an array of commands that require environment as the second argument
commands_with_environment=("tag:stable" "tag:stable:pr" "tag:stable:release" "tag:only")

# Check if the command requires an environment as the second argument
requires_environment=false

for cmd in "${commands_with_environment[@]}"; do
  if [ "$command" == "$cmd" ]; then
    requires_environment=true
    break
  fi
done

# If the command requires an environment, check the argument count
if [ "$requires_environment" == true ] && [ $# -lt 2 ]; then
  echo "Usage: $0 <command> <environment>"
  exit 1
fi

# Check which command is being executed
case "$command" in
  "pretest")
    directory="reports"
    if [ -d "$directory" ]; then
      rm -rf "$directory"
    fi
    ;;
  "generate:report")
    node reporter.js
    ;;
  "posttest")
    npm run tag:stable:$env $env || npm run generate:report
    ;;
  "cy:open")
    cypress open --browser chrome -e tags='@stable_test',environmentName=$env
    ;;
  "tag:stable")
    cypress run --headed --browser chrome -e tags='@stable_test',environmentName=$env
    ;;
  "tag:stable:pr")
    cypress run --browser chrome -e tags='@pr and @stable_test',environmentName=$env
    ;;
  "tag:stable:release")
    cypress run --browser chrome -e tags='@release and @stable_test',environmentName=$env
    ;;
  "tag:only")
    cypress run --browser chrome -e tags='@only',environmentName=$env
    ;;

  *)
    echo "Invalid command: $command"
    exit 1
    ;;
esac
