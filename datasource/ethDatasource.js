// Import Apollo REST data source 
const { RESTDataSource } = require("apollo-datasource-rest"); 

// Vitalik's Ethereum address we will use for queries
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Etherscan API data source class
class EtherDataSource extends RESTDataSource {

  // Constructor sets base URL 
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api"; 
  }

  // Get account balance for an Ethereum address
  async etherBalanceByAddress() {
    
    // Call Etherscan balance endpoint
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get total ether supply
  async totalSupplyOfEther() {
  
    // Call Etherscan ethsupply endpoint
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  
  // Get latest ETH price
  async getLatestEthereumPrice() {

    // Call Etherscan ethprice endpoint 
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Estimate gas usage
  async getBlockConfirmationTime() {

    // Call Etherscan gastracker endpoint
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
