import { CONTRACT_ADDRESS } from "./address.constant";

export const tokens = [
  {
    tokenAddress: CONTRACT_ADDRESS["0x14a34"]["USDT"],
    tokenName: "USD Tether",
    tokenSymbol: "USDT",
    decimal: 18,
    logo: "/tokens/USDT.png",
  },
  {
    tokenAddress: CONTRACT_ADDRESS["0x14a34"]["DAI"],
    tokenName: "Dai stablecoin",
    tokenSymbol: "DAI",
    decimal: 18,
    logo: "/tokens/DAI.png",
  },
  {
    tokenAddress: CONTRACT_ADDRESS["0x14a34"]["WETH"],
    tokenName: "Wrapped Etherum",
    tokenSymbol: "WETH",
    decimal: 18,
    logo: "/tokens/WETH.png",
  },
];
