import { SAFIRE_FACTORY_ABI } from "@/constants/abis/safireFactory.abi";
import { CONTRACT_ADDRESS } from "@/constants/address.constant";
import { ethers } from "ethers";

const safireFactoryContract = (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider
) => {
  return new ethers.Contract(contractAddress, SAFIRE_FACTORY_ABI, provider);
};

const createSafireContract = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
  multiplier: number | ethers.BigNumber,
  maturityBlock: number | ethers.BigNumber,
  staleBlock: number | ethers.BigNumber,
  asset: string,
  fee: number | ethers.BigNumber,
  feeTo: string,
  condition: string,
  name: string,
  symbol: string
) => {
  const contract = safireFactoryContract(contractAddress, provider);
  const tx = await contract.createSafireContract(
    multiplier,
    maturityBlock,
    staleBlock,
    asset,
    fee,
    feeTo,
    condition,
    name,
    symbol
  );
  await tx.wait();
  return tx;
};

const safireFactoryContractService = {
  safireFactoryContract,
  createSafireContract,
};
export default safireFactoryContractService;
