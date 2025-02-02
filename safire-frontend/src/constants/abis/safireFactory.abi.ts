export const SAFIRE_FACTORY_ABI = [
  {
    "type": "function",
    "name": "createSafireContract",
    "inputs": [
      {
        "name": "multiplier_",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "maturityBlock_",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "staleBlock_",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "asset_",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "fee_",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "feeTo_",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "condition_",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "name_",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "symbol_",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "InsuranceCreated",
    "inputs": [
      {
        "name": "creator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "target",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "asset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  }
] as const;
