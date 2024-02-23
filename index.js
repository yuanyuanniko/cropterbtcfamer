// index.js

const Web3 = require('web3');

const web3 = new Web3('https://mainnet.infura.io/v3/your_infura_project_id');

async function getLatestBlockNumber() {
  try {
    return await web3.eth.getBlockNumber();
  } catch (error) {
    throw new Error('Error fetching latest block number:', error);
  }
}

async function getEthBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
  } catch (error) {
    throw new Error('Error fetching ETH balance:', error);
  }
}

module.exports = { getLatestBlockNumber, getEthBalance };
