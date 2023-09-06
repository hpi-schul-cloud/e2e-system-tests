#!/bin/bash

if [[ $CYPRESS_BRB =~ \b(?:staging|schulportal)\b && $CYPRESS_NBC =~ \b(?:staging|schulportal)\b && $CYPRESS_DEFAULT =~ \b(?:staging|schulportal)\b ]]; then
  echo "Loading staging environment variables"
  ENV_PREFIX="ref"
else
  echo "Loading dev environment variables"
  ENV_PREFIX="dev"
fi

# Define your environment variables
declare -a env_vars=(
  "CYPRESS_TEACHER_1_EMAIL"
  "CYPRESS_TEACHER_1_PASSWORD"
  "CYPRESS_TEACHER_2_EMAIL"
  "CYPRESS_TEACHER_2_PASSWORD"
  "CYPRESS_STUDENT_1_EMAIL"
  "CYPRESS_STUDENT_1_PASSWORD"
  "CYPRESS_STUDENT_2_EMAIL"
  "CYPRESS_STUDENT_2_PASSWORD"
  "CYPRESS_ADMIN_1_EMAIL"
  "CYPRESS_ADMIN_1_PASSWORD"
  "CYPRESS_EXPERT_1_EMAIL"
  "CYPRESS_EXPERT_1_PASSWORD"
  "CYPRESS_STUDENT_EXTERN"
  "CYPRESS_STUDENT_EXTERN_PASSWORD"
  "CYPRESS_STUDENT_PASSWORD_CHANGE_EMAIL"
  "CYPRESS_STUDENT_PASSWORD_CHANGE_OLD_PWD"
  "CYPRESS_STUDENT_PASSWORD_CHANGE_NEW_PWD"
  "CYPRESS_TEACHER_1_FIRST_NAME"
  "CYPRESS_TEACHER_1_LAST_NAME"
  "CYPRESS_TEACHER_2_FIRST_NAME"
  "CYPRESS_TEACHER_2_LAST_NAME"
)

# Loop through and set environment variables
for var in "${env_vars[@]}"; do
  echo "Setting ${var}=${ENV_PREFIX}:${var}"
  echo "${var}=op://cy-${ENV_PREFIX}-brb/cypress/${var}" >> $GITHUB_ENV
done
