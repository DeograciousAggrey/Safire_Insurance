source .env
# TODO : Change to Chain your want to deploy
export RPC_URL=$AMOY_RPC_URL
export SCAN_URL=$AMOY_POLYGONSCAN_URL
export SCAN_API_KEY=$AMOY_POLYGONSCAN_API_KEY

forge script ../script/deploy/DeployAmoyMessenger.s.sol --rpc-url $RPC_URL  --etherscan-api-key $SCAN_API_KEY --broadcast 
