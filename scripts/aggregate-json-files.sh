#!/bin/bash

instances=(brb dbc nbc)
environments=(dev ref)

cypress_brb=""
cypress_default=""
cypress_nbc=""
workflow_name="${{ github.workflow }}"

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
  cypress_brb="${{ github.event.inputs.instance1 }}"
  cypress_nbc="${{ github.event.inputs.instance2 }}"
  cypress_default="${{ github.event.inputs.instance3 }}"
  brb_env=$(check_environment "$cypress_brb")
  default_env=$(check_environment "$cypress_default")
  nbc_env=$(check_environment "$cypress_nbc")
  echo "TAG=tag:stable:ci" >> $GITHUB_OUTPUT
  echo "$TAG"
elif [[ $workflow_name == *"automatic"* || $workflow_name == *"scheduled"* ]]; then
  echo "This is an automatic or scheduled workflow"
  brb_env=""
  default_env=""
  nbc_env=""
  echo "TAG=tag:stable:ci" >> $GITHUB_OUTPUT
  echo "$TAG"
else
  echo "This is a remote workflow"
  cypress_brb="${{ inputs.cypress_brb }}"
  cypress_default="${{ inputs.cypress_default }}"
  cypress_nbc="${{ inputs.cypress_nbc }}"
  brb_env=$(check_environment "$cypress_brb")
  default_env=$(check_environment "$cypress_default")
  nbc_env=$(check_environment "$cypress_nbc")
  echo "TAG=tag:stable:pr:ci" >> $GITHUB_OUTPUT
  echo "$TAG"
fi

if [[ $brb_env == "ref" || $default_env == "ref" || $nbc_env == "ref" ]]; then
  environment="ref"
else
  environment="dev"
fi

file_paths=()
declare -A key_value_pairs

for instance in "${instances[@]}"; do
  if [[ $workflow_name == *"manual"* || $workflow_name == *"remote"* ]]; then
    file_path="${{ github.workspace }}/e2e-system-tests/env_variables/file-${environment}-${instance}.json"
  else
    file_path="${{ github.workspace }}/e2e-system-tests/env_variables/file-dev-${instance}.json"
  fi

  file_paths+=("$file_path")

  while IFS="=" read -r key value; do
    key_value_pairs["$key"]=$value
  done < <(jq -r 'to_entries | .[] | "\(.key)=\(.value)"' "$file_path")
done

json_output=$(jq -s 'reduce .[] as $item ({}; . + ($item | with_entries(.value |= tostring)))' "${file_paths[@]}")

aggregated_json_file="${{ github.workspace }}/e2e-system-tests/env_variables/combined_credentials.json"

echo "$json_output" > "$aggregated_json_file"


if [[ !($workflow_name == *"automatic"* || $workflow_name == *"scheduled"*) ]]; then
  updated_json=$(jq --arg brb "$cypress_brb" \
  --arg default "$cypress_default" \
  --arg nbc "$cypress_nbc" \
  '.BRB = $brb | .DEFAULT = $default | .NBC = $nbc' "$aggregated_json_file")
  echo "$updated_json" > "$aggregated_json_file"
fi
