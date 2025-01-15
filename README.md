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
1. **Create a Contract**: Users can create a new insurance contract by specifying the risk event, coverage amount, and contract period.

2. **Invest in a Contract**: Users can invest in existing insurance contracts by contributing liquidity to the contract's pool.

3. **Claim Payouts**: If the specified risk event occurs, policyholders can claim their payouts instantly.

4. **Earn Returns**: If the contract period expires without the triggering event, liquidity providers can withdraw their principal and accrued yields.

## TECHNOLOGIES
- **Solidity**: Smart contract development
- **Chainlink**: Decentralized oracles and cross-chain capabilities
- **OpenZeppelin**: Audited smart contract libraries
- **Foundry**: Framework for deploying and managing smart contracts
- **React**: Frontend development
- **Citrea**: Testnet deployment
- **iExec**: Off-chain computation



