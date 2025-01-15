source .env
export RPC_URL="https://rpc.testnet.citrea.xyz"
export CITREA_SCAN_URL=$CITREA_SCAN_URL
export EXPLORER_API_KEY=$CITREA_SCAN_API_KEY

forge script ../script/deploy/DeployTokens.s.sol \
  --rpc-url $RPC_URL \
  --etherscan-api-key $EXPLORER_API_KEY \
  --broadcast
