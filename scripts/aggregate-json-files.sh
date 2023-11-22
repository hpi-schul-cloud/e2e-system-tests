#!/bin/bash

instances=(brb dbc nbc)
environments=(dev ref)

workflow_name=$1
brb_instance=$2
dbc_instance=$3
nbc_instance=$4
workspace_path=$5

check_environment() {
  local url="$1"

  if [[ $url == *"staging"* || $url == *"schulportal"* ]]; then
    echo "ref"
  else
    echo "dev"
  fi
}

if [[ $workflow_name == *"manual"* ]]; then
  echo "This is a manual workflow"
  echo "TAG=tag:stable:ci" >>$GITHUB_OUTPUT
  echo "$TAG"
elif [[ $workflow_name == *"automatic"* || $workflow_name == *"scheduled"* ]]; then
  echo "This is an automatic or scheduled workflow"
  echo "TAG=tag:stable:ci" >>$GITHUB_OUTPUT
  echo "$TAG"
else
  echo "This is a remote workflow"
  echo "TAG=tag:stable:pr:ci" >>$GITHUB_OUTPUT
  echo "$TAG"
fi

brb_env=$(check_environment "$brb_instance")
dbc_env=$(check_environment "$dbc_instance")
nbc_env=$(check_environment "$nbc_instance")

if [[ $brb_env == "ref" || $dbc_env == "ref" || $nbc_env == "ref" ]]; then
  environment="ref"
else
  environment="dev"
fi

file_paths=()
declare -A key_value_pairs

for instance in "${instances[@]}"; do
  if [[ $workflow_name == *"manual"* || $workflow_name == *"remote"* ]]; then
    file_path="$workspace_path/e2e-system-tests/env_variables/file-${environment}-${instance}.json"
  else
    file_path="$workspace_path/e2e-system-tests/env_variables/file-dev-${instance}.json"
  fi

  file_paths+=("$file_path")

  while IFS="=" read -r key value; do
    key_value_pairs["$key"]=$value
  done < <(jq -r 'to_entries | .[] | "\(.key)=\(.value)"' "$file_path")
done

json_output=$(jq -s 'reduce .[] as $item ({}; . + ($item | with_entries(.value |= tostring)))' "${file_paths[@]}")

aggregated_json_file="$workspace_path/e2e-system-tests/env_variables/combined_credentials.json"

echo "$json_output" >"$aggregated_json_file"

if [[ !($workflow_name == *"automatic"* || $workflow_name == *"scheduled"*) ]]; then
  updated_json=$(jq --arg brb "$brb_instance" \
    --arg dbc "$dbc_instance" \
    --arg nbc "$nbc_instance" \
    '.BRB = $brb | .DEFAULT = $dbc | .NBC = $nbc' "$aggregated_json_file")
  echo "$updated_json" >"$aggregated_json_file"
fi
