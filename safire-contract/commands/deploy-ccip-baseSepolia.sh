source .env
# TODO : Change to Chain your want to deploy
export RPC_URL=$BASE_SEPOLIA_RPC_URL
export SCAN_URL=$BASE_SEPOLIA_SCAN_URL
export SCAN_API_KEY=$BASE_SEPOLIA_SCAN_API_KEY

forge script ../script/deploy/DeployBaseSepoliaMessenger.s.sol --rpc-url $RPC_URL  --etherscan-api-key $SCAN_API_KEY --broadcast 
