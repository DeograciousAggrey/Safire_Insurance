# SAFIRE INSURANCE
![SAFIRE INSURANCE](https://github.com/user-attachments/assets/89e9ba7b-5306-4f57-a827-5fec46eaba99)

## Introduction
Traditional insurance systems are plagued by limitations: limited investment sources, cumbersome claims, and inflexible coverage. Safire overcomes these challenges by introducing an open, instant-claim, and highly adaptable insurance platform.

## Features
- **Instant Claim**: Safire uses smart contracts to automate the claims process, ensuring that claims are processed instantly.
- **Adaptable Coverage**: Safire allows users to customize their insurance coverage to suit their needs.
- **Open Platform**: Safire is an open platform that allows users to invest in insurance pools and earn returns.

Safire empowers users with enhanced risk management and investment opportunities while simplifying the creation of global insurance programs

Youtube: [Safire Insurance](https://youtu.be/V1vP4lq8aMw)

## What it does
Safire empowers individuals and organizations to design and launch customized insurance contracts. These contracts can cover a wide range of risks, from global pandemics and market crashes to DeFi exploits.

Anyone can contribute liquidity to these contracts, seeking attractive returns. Once a contract is deployed, it enters a liquidity pool where participants can invest.

Insurance is purchased through ERC-20 tokens, representing buyer and seller positions. This tokenization allows for secondary market trading, enabling users to dynamically adjust their risk exposure and potential returns.

### Contract outcomes
  - **Claimable**: If the specified risk event occurs, policyholders receive their payouts.
- **Matured**: If the contract period expires without the triggering event, liquidity providers receive their principal and accrued yields.
- **Terminated**: In the event of unforeseen issues, all funds are returned to their respective contributors.

## SMART CONTRACTS
- **InsuranceFactory**: This contract is responsible for creating new insurance contracts.
- **Insurancepool**: This contract manages the liquidity pool for each insurance contract and it defines the insurance contract's logic.
- **ERC20**: Some ERC20 tokens are used to represent the insurance contract's positions.

These contracts and more are deployed to the Citrea testnet. For testing using Chainlink's cross-chain capabilities, we have deployed the contracts to the Base Sepolia testnet.

table of contracts

| Contract Name | Address |
| --- | --- |
|USDT | [0x1A6e8f72f309CFA7B7Aca231E65FA1e24D4B8fB0](https://explorer.testnet.citrea.xyz/address/0x1A6e8f72f309CFA7B7Aca231E65FA1e24D4B8fB0) |
|SimpleCondition | [0xE36bE621c0792A2a64d5BE267EA09A4C266CCeb1](https://explorer.testnet.citrea.xyz/address/0xE36bE621c0792A2a64d5BE267EA09A4C266CCeb1) |
|SafireFactory | [0x98aBC61FA299693246C282C4D15A0401C239F606](https://explorer.testnet.citrea.xyz/address/0x98aBC61FA299693246C282C4D15A0401C239F606) |
|SafirePool | [0xB0a7f823688BdB6125780D1Ebd2940Bf32F14FD6](https://explorer.testnet.citrea.xyz/address/0xB0a7f823688BdB6125780D1Ebd2940Bf32F14FD6) |

More information about the contracts can be found in the `contracts` directory, the deployed contracts can be found in the `deployments.txt` file.







## HOW IT WORKS
1. **Create an Insurance Contract**: Users can create a new insurance contract by specifying the risk event, coverage amount, and contract period.

![Create an Insurance Contract](https://github.com/user-attachments/assets/c20654d1-bbea-448d-9996-9c9303ced1f9)

      -The user will provide the required details to create the insurance contract.
      - Add a multiplier to the contract to determine the payout amount.
      - specify the expiration date of the contract.
      - Specify the condition that the insurance contract will be based on.
  
  ***Condition Contract***
  This is the condition that the insurance contract will be based on. The condition contract will be deployed to the blockchain and the address will be used to create the insurance contract. e.g The condition below is based on the price of ETH.
    ![Condition Contract](https://github.com/user-attachments/assets/7f0871ef-899f-4da5-9526-1b648eca209f)




2. **Deposit into the  Contract**: This adds liquidity to the insurance contract, allowing users to invest in the contract.

![Deposit into the Contract](https://github.com/user-attachments/assets/40f41ef3-c8f7-438d-9754-a3d5020750d0)



### BUYER'S VIEW
1. **Buy Insurance**: Users can purchase insurance by investing in the insurance contract, to hedge against the specified risk event.

  ![Buy Insurance](https://github.com/user-attachments/assets/22c7c53f-1cce-4f67-a287-05ace136e91c)




2. **Claim Payouts**: If the specified risk event occurs, user can claim their payouts.

  ![Claim Payouts](https://github.com/user-attachments/assets/a083a0a3-2b0f-4adb-a0d6-0873c7db0393)


3. **Earn Returns**: If the contract period expires without the triggering event, liquidity providers can withdraw their principal and accrued yields.

4. **Faucet**: Users can request testnet tokens from the faucet to interact with the platform.

![Faucet](https://github.com/user-attachments/assets/cdc53e09-45ec-42c8-90b6-6ab5b28ffe88)


## HOW TO RUN THE PROJECT LOCALLY
1. **Clone the Repository**: Clone the repository to your local machine using the command below.
```bash
git clone https://github.com/DeograciousAggrey/Safire_Insurance
```

2. **Deploy the Smart Contracts**: Deploy the smart contracts to the blockchain, ensure  you have the necessary environment variables set up. You can find the contracts in the `contracts` directory. Use the commands directory to deploy the contracts.

3. **Running the graphql server**: Navigate to the subgraph directory and setup your graph node and deploy it to the network. More information about setting up the graph node can be found [here](https://thegraph.com/docs/quick-start). After setting up the graph node, run the following commands to deploy the subgraph to the network.
```bash
npm codegen && npm build && npm deploy
```


4. **Running the Frontend**: Navigate to the `frontend` directory and run the following commands. Ensure you have the necessary environment variables set up.
```bash
npm install
```
5. **Start the Frontend**: Start the frontend using the command below.
```bash
npm run dev
```







## TECHNOLOGIES
- **Solidity**: Smart contract development
- **Chainlink**: Decentralized oracles and cross-chain capabilities
- **OpenZeppelin**: Audited smart contract libraries
- **Foundry**: Framework for deploying and managing smart contracts
- **React**: Frontend development
- **Citrea**: Testnet deployment
- **iExec**: Off-chain computation



