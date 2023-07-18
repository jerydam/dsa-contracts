import { ethers } from "hardhat";

async function main() {
    const nftContract = await ethers.getContractFactory("MyNft");

    const [owner] = await ethers.getSigners();
    
    const deployedNFTContract = await nftContract.deploy();
        
    await deployedNFTContract.deployed();
  
    console.log(" Contract Address:", deployedNFTContract.address);

  
}




main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});