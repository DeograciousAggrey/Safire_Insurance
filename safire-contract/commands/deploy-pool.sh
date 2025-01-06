source .env
# TODO : Change to Chain your want to deploy
export RPC_URL=$BASE_SEPOLIA_RPC_URL
export SCAN_URL=$BASE_SEPOLIA_SCAN_URL
export EXPLORER_API_KEY=$BASE_SEPOLIA_SCAN_API_KEY

forge script ../script/deploy/DeployPool.s.sol --rpc-url $RPC_URL  --etherscan-api-key $EXPLORER_API_KEY --broadcast 