import { AppEnvironment } from '../app/core/interfaces/app-environment.interface';
import { HttpHeaders } from '@angular/common/http';


let apiKey = 'U2FsdGVkX18k5itQROOzEotUtBOLK4apPBmljl1wphduEXLbXkP08TjP6EVNDq+QzEVSAVgWOD/WMCkV1WQZ9Uo/3JXBrjz2RVdgNQmZ5sU=';
let demoBlockchainKey = "c7740e06-43f2-46cb-92e1-85841d6d2f72";
let ravePubKey = 'FLWPUBK-1d8566c17fd622e946c6652b20b30b12-X'
let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Content-Type', 'application/json');
headers = headers.append('api-key', apiKey);

export const environment: AppEnvironment = {
  production: true,
  headers: headers,
  baseApiUrl: 'https://172.245.9.26/api/yasuke/',
  extraUrl: 'https://172.245.9.26/yasuke-server/',
  icoUrl: 'https://172.245.9.26/api/ico/whitelist/',
  // baseApiUrl: 'https://lb.niftyrow.io/api/yasuke/',
  // extraUrl: 'https://lb.niftyrow.io/yasuke-server/',
  // icoUrl: 'https://lb.niftyrow.io/api/ico/whitelist/',
  security: {
    allowedOrigins: 'https://niftyrow.io/'
  }
};

export const networkChains = [ {
  name: 'Harmony Testnet',
  chain: 1666700000,
  rpcUrl: 'https://api.s0.b.hmny.io',
  currency: 'ONE',
  systemName: 'harmony testnet',
  verifyLink: 'https://explorer.testnet.harmony.one/address/',
  explorer: 'https://explorer.pops.one'
},
{
  name: 'Harmony',
  chain: 1666600000,
  rpcUrl: 'https://api.harmony.one',
  currency: 'ONE',
  systemName: 'harmony',
  verifyLink: 'https://explorer.harmony.one/address/',
  explorer: 'https://explorer.harmony.one'
},
{
  name: "Binance Smart Chain Testnet",
  chain: 97,
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  currency: 'BNB',
  systemName: 'bsc testnet',
  verifyLink: 'https://testnet.bscscan.com/token/',
  explorer: 'https://testnet.bscscan.com'
},
{
  name: "Gnosis",
  chain: 100,
  rpcUrl: 'https://rpc.gnosischain.com',
  currency: 'xDAI',
  systemName: 'gnosis',
  verifyLink: 'https://blockscout.com/xdai/mainnet',
  explorer: 'https://blockscout.com/xdai/mainnet'
},
{
  name: "Binance Smart Chain",
  chain: 56,
  rpcUrl: 'https://bsc-dataseed1.binance.org',
  currency: 'BNB',
  systemName: 'bsc',
  verifyLink: 'https://testnet.bscscan.com/token/',
  explorer: 'https://bscscan.com'
},
{
  name: "Polygon Testnet",
  chain: 80001,
  rpcUrl: 'https://rpc-mumbai.matic.today',
  currency: 'MATIC',
  systemName: 'polygon testnet',
  verifyLink: 'https://mumbai.polygonscan.com/token/',
  explorer: 'https://mumbai.polygonscan.com'
},
{
  name: "Polygon",
  chain: 137,
  rpcUrl: 'https://polygon-rpc.com',
  currency: 'MATIC',
  systemName: 'polygon',
  verifyLink: 'https://polygonscan.com/token/',
  explorer: 'https://polygonscan.com'
},
{
  name: "Aurora Testnet",
  chain: 1313161555,
  rpcUrl: 'https://testnet.aurora.dev/',
  currency: 'aETH',
  systemName: 'aurora testnet',
  verifyLink: 'https://aurorascan.dev/token/',
  explorer: ''
},
{
  name: "Aurora",
  chain: 1313161554,
  rpcUrl: 'https://mainnet.aurora.dev',
  currency: 'aETH',
  systemName: 'aurora',
  verifyLink: 'https://aurorascan.dev/token/',
  explorer: 'https://aurorascan.dev'
},
{
  name: "Avalanche",
  chain: 43113,
  rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
  currency: 'AVAX',
  systemName: 'avalanche testnet',
  verifyLink: 'https://testnet.snowtrace.io/token/',
  explorer: 'https://testnet.snowtrace.io'
},
{
name: "Avalanche Mainnet",
chain: 43114,
rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
currency: 'AVAX',
systemName: 'avalanche',
verifyLink: 'https://testnet.snowtrace.io/token/',
explorer: 'https://snowtrace.io'
}
]


export const rpcData = {
1666700000: 'https://api.s0.b.hmny.io',
97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
80001: 'https://rpc-mumbai.matic.today',
1313161555: 'https://testnet.aurora.dev/',
43113: 'https://api.avax-test.network/ext/bc/C/rpc'
}

export const baseABI = [
  "function issueToken(uint256,address,string,string,string,bool)",
  "function startAuction(uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
  "function placeBid(uint256,uint256)",
  "function endBid(uint256,uint256)",
  "function withdraw(uint256,uint256)",
  "function cancelAuction(uint256,uint256)",
  "function sellNow(uint256, uint256)",
  "function bought(uint256)"
]
export const chainId = 1666700000;
export const niftyKey = apiKey;
export const ravePublicKey = ravePubKey;
export const blockchainInfo = {
key: demoBlockchainKey,
url: "https://api.blockchain.com/v3/exchange"
};

export const cryptocompareInfo = {
url: "https://min-api.cryptocompare.com/data/price?"
}

