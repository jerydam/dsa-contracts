import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();
const config: HardhatUserConfig = {
  solidity: "0.7.0",
  networks: {
   
    goerlsepoliai: {
      url: process.env.ETH_SEPOLIA,
      //@ts-ignore
      accounts:[process.env.PRIVATE_KEY]},
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  }
};

export default config;