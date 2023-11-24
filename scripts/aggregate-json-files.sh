#!/bin/bash

instances=(brb dbc nbc)

workflow_name=$1
brb_instance=$2
dbc_instance=$3
nbc_instance=$4
workspace_path=$5
environment=$6

file_paths=()
declare -A key_value_pairs

for instance in "${instances[@]}"; do

  file_path="$workspace_path/e2e-system-tests/env_variables/file-${environment}-${instance}.json"

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
