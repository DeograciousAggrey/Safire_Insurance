#!/bin/bash
source .env
export RPC_URL=$CITREA_RPC_URL
export CITREA_SCAN_URL=$CITREA_SCAN_URL
export EXPLORER_API_KEY=$CITREA_SCAN_API_KEY
export EXPLORER_URL="https://api.basescan.org/api?module=contract&action=verifysourcecode&apikey=$EXPLORER_API_KEY"

# Adjust the contract path in the script call
forge script ../script/deploy/DeployFactory.s.sol:DeployFactory --rpc-url $RPC_URL  --etherscan-api-key $EXPLORER_API_KEY --broadcast 

