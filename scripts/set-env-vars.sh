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
  "TEACHER_1_EMAIL"
  "TEACHER_1_PASSWORD"
  "TEACHER_2_EMAIL"
  "TEACHER_2_PASSWORD"
  "STUDENT_1_EMAIL"
  "STUDENT_1_PASSWORD"
  "STUDENT_2_EMAIL"
  "STUDENT_2_PASSWORD"
  "ADMIN_1_EMAIL"
  "ADMIN_1_PASSWORD"
  "EXPERT_1_EMAIL"
  "EXPERT_1_PASSWORD"
  "STUDENT_EXTERN"
  "STUDENT_EXTERN_PASSWORD"
  "STUDENT_PASSWORD_CHANGE_EMAIL"
  "STUDENT_PASSWORD_CHANGE_OLD_PWD"
  "STUDENT_PASSWORD_CHANGE_NEW_PWD"
  "TEACHER_1_FIRST_NAME"
  "TEACHER_1_LAST_NAME"
  "TEACHER_2_FIRST_NAME"
  "TEACHER_2_LAST_NAME"
)

# Loop through and set environment variables
for var in "${env_vars[@]}"; do
  echo "Setting ${var}=${ENV_PREFIX}:${var}"
  echo "${var}=op://cy-${ENV_PREFIX}-brb/cypress/${var}" >> $GITHUB_ENV
done
