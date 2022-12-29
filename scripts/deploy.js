const hre = require("hardhat");
require("dotenv").config();

async function main(){

  const deployer = await hre.ethers.getSigner()
  const vote = await hre.ethers.getContractFactory("Vote2Block");

  // Deploy Contract
  const vote2block = await vote.deploy("0x6b6B15AB5d4A7938563886F66c0ebA915142B5Cc");
  await vote2block.deployed();

  console.log("Contract Address : ", vote2block.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1)
})