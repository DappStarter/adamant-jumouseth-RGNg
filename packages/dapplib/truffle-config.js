require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth prefer pumpkin hunt process sun trouble'; 
let testAccounts = [
"0x0b4f490c03be83a9da60b643ae1c874c50d1adb044a08c39b647f193894a3de9",
"0x7b8700ee84a82484d0aff47cc2af271fa24d07ee4ad69983f935ecc84353b2b6",
"0xaf3bfc93d357e2a0e0eccbc657564ac700dec67c9fb1c1667de06daf6737479e",
"0x6fe2872c0b08dc2a5ef9d59cee11a725a4994cbebe2c7b75e45e6404ba379971",
"0xa19c05d9c50dc6ed60b5b99e03924446d38fbe74b8c1a375176d8591a158fa59",
"0x64b551f4c97384d4d2d264c2b9a8f5f6299d79cba304957b2f55f2bcaa820223",
"0x1d992c1eacc90364fba160fefeab8a0345947a25b9e9d5a1d1334f934dde1bb5",
"0xba86091ffe7df6faf457d426c0e0695329a3b9a26cfcec2d842a5829e184797f",
"0xd0fd119460f7d7236d3f660f1fd2d59382924337d1c72050a90ae5cf52a9474a",
"0x4b96d0f33c47aa4b25251f707b8a5b5082d23c337b0d08a0437986220f18e0f4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

