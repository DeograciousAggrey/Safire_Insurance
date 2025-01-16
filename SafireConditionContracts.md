### What is Safire Condition Contracts?
Safire is a decentralized insurance platform that allows users to hedge against risks by investing in insurance contracts. Anyone can create an insurance contract by specifying the risk event, the premium, and the duration of the contract. Users can invest in these contracts to hedge against the specified risk event. If the risk event occurs, the users can claim their payouts. If the contract period expires without the triggering event, liquidity providers can withdraw their principal and accrued yields.

The Safire Condition Contracts are the conditions that the insurance contracts are based on. These contracts are deployed to the blockchain and the address is used to create the insurance contract. For example, a condition contract can be based on the price of ETH. If the price of ETH falls below a certain threshold, the insurance contract will be triggered and the users can claim their payouts. Anyone can create a condition contract by specifying the condition and the parameters of the contract.

### How to Create an Insurance Contract
Go to `contracts/SimpleCondition.sol` to see the code for the condition contract. You can deploy this contract to the blockchain and use the address to create an insurance contract. 
Your condition contract must override the `checkUnlockClaim()` and `checkUnlockTerminate()` functions. These functions are used to check if the insurance contract can be claimed or terminated. You can specify the conditions for these functions based on your requirements. The following are all states in an insurance contract:
   - `Ongoing`: The contract is still active and the risk event has not occurred. The contract is open for deposits to buy and sell. It does not allow token withdrawal.
    - `Claimable`: The risk event has occurred and the contract can be claimed. The contract is closed for deposits and withdrawals. The user can claim their payouts. It occurs when the `IsafirePool(target).UnlockClaim()` is called. No additional deposits are allowed. It adjusts the portion of the shares to benefit the claimant. It uses this formula
   
```bash
adjustedBuyerShare = totalBuyerShare * multiplier
adjustedSellerShare = totalSellerShare / multiplier
```

- `Matured`: The state indicates the maturity block has been passed and the `unlockMaturity()` function has been called. No additional deposits are allowed. It adjusts the portion of the shares to benefit the seller. It uses this formula

```bash
adjustedBuyerShare = totalBuyerShare / multiplier
adjustedSellerShare = totalSellerShare * multiplier
```
- `Terminated`: The contract is terminated and the user can withdraw their principal and accrued yields. It occurs when the `IsafirePool(target).UnlockTerminate()` is called. No additional deposits are allowed. No adjustments are made to the shares. The user can withdraw their principal and accrued yields.


The total amount users can claim once all the adjustments have been made is calculated as follows:

```bash
totalShares = adjustedBuyerShare + adjustedSellerShare

totalBuyerValue = adjustedBuyerShare * totalValue / totalShares
totalSellerValue = adjustedSellerShare * totalValue / totalShares

buyerValue = buyerToken * totalBuyerValue / adjustedBuyerShare
sellerValue = sellerToken * totalSellerValue / adjustedSellerShare

claimedValue = buyerValue + sellerValue
```

### How to Deploy the Condition Contract

- . Make sure you deploy the condition contract to the same network as the insurance contract. Make note of the address of the condition contract as you will need it to create the insurance contract.

### Available Condition Contracts
For testing we have deployed the following condition contracts provided in the table below:

| Contract Name | Description | Address | Network |
| --- | --- | --- | --- |
|SimpleCondition | A simple condition contract that can be used to create an insurance contract based on a single condition. | [0xE36bE621c0792A2a64d5BE267EA09A4C266CCeb1](https://explorer.testnet.citrea.xyz/address/0xE36bE621c0792A2a64d5BE267EA09A4C266CCeb1) | Citrea Testnet |
|ETHDiffCondition | A condition contract that can be used to create an insurance contract based on the difference in the price of ETH. | [0x172357ef057b37adf2bc8517eee96aec7f1c81d2](https://sepolia.basescan.org/address/0x172357ef057b37adf2bc8517eee96aec7f1c81d2 ) | Base Sepolia Testnet |
|DeployLendingLockCondition | A condition contract that can be used to create an insurance contract based on the locking of a lending platform. | [0x7758da40db3abc5d1c244a1a0f52091af269fc45](https://sepolia.basescan.org/address/0x7758da40db3abc5d1c244a1a0f52091af269fc45) | Base Sepolia Testnet |
|SimpleCondition | A simple condition contract that can be used to create an insurance contract based on a single condition. | [0x0b828e93e6c763530a77866d8afe7630ed3bd12a](https://sepolia.basescan.org/address/0x0b828e93e6c763530a77866d8afe7630ed3bd12a) | Base Sepolia Testnet |






