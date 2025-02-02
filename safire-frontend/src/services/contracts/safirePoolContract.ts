import { SAFIRE_POOL_ABI } from "@/constants/abis/safirePool.abi";
import { CONTRACT_ADDRESS } from "@/constants/address.constant";
import { ethers } from "ethers";

const safirePoolContract = (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider
) => {
  return new ethers.Contract(contractAddress, SAFIRE_POOL_ABI, provider);
};

const buyInsurance = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
  amount: number | ethers.BigNumber,
) => {
  const contract = safirePoolContract(contractAddress, provider);
  const tx = await contract.buyInsurance(amount);
  await tx.wait();
  return tx;
};

const sellInsurance = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
  amount: number | ethers.BigNumber,
) => {
  const contract = safirePoolContract(contractAddress, provider);
  const tx = await contract.sellInsurance(amount);
  await tx.wait();
  return tx;
};

const checkUnlockClaim = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
) => {
  const contract = safirePoolContract(contractAddress, provider);
  const tx = await contract.checkUnlockClaim();
  await tx.wait();
  return tx;
};

const unlockMaturity = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
) => {
  const contract = safirePoolContract(contractAddress, provider);
  const tx = await contract.unlockMaturity();
  await tx.wait();
  return tx;
};

const checkUnlockTerminate = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
) => {
  const contract = safirePoolContract(contractAddress, provider);
  const tx = await contract.checkUnlockTerminate();
  await tx.wait();
  return tx;
};

const withdraw = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
  buyerAmount: number | ethers.BigNumber,
  sellerAmount: number | ethers.BigNumber,
) => {
  const contract = safirePoolContract(contractAddress, provider);
  const tx = await contract.withdraw(buyerAmount, sellerAmount);
  await tx.wait();
  return tx;
};

const safirePoolContractService = {
  safirePoolContract,
  buyInsurance,
  sellInsurance,
  checkUnlockClaim,
  unlockMaturity,
  checkUnlockTerminate,
  withdraw
};
export default safirePoolContractService;
