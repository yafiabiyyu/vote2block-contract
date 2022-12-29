require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  networks : {
    goerli: {
      url: process.env.RPC_URL,
      accounts:{
        mnemonic:process.env.MNEMONIC,
        path:"m/44'/60'/0'/0",
        initialIndex:0
      }
    }
  }
};
