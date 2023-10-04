#!/bin/bash

if [[ $CYPRESS_BRB =~ \b(?:staging|schulportal)\b && $CYPRESS_NBC =~ \b(?:staging|schulportal)\b && $CYPRESS_DEFAULT =~ \b(?:staging|schulportal)\b ]]; then
  echo "Loading staging environment variables"
  ENV_PREFIX="ref"
else
  echo "Loading dev environment variables"
  ENV_PREFIX="dev"
fi

# Define your environment json file with variables
#  "CYPRESS_BRB_ALL" -> json file with all secrets for BRB
#  "CYPRESS_NBC_ALL" -> json file with all secrets for NBC
#  "CYPRESS_DBC_ALL" -> json file with all secrets for DBC
declare -a env_vars=(
  "BRB"
  "NBC"
  "DBC"
)

# Loop through environment json files and set environment variables
for var in "${env_vars[@]}"; do
    ENV="${var}"
    echo "Setting CYPRESS_${var}_ALL=${ENV_PREFIX}:CYPRESS_${var}_ALL"
    echo "CYPRESS_${var}_ALL=op://cy-${ENV_PREFIX}-${ENV}/cypress/CYPRESS_${var}_ALL" >> $GITHUB_ENV

done
