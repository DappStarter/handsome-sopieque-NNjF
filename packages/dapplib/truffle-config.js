require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remind hospital idea enroll fox turkey'; 
let testAccounts = [
"0x4a46fcbe6ff87a2925c1018926c48ff7e156f6b264124a4871cf51eec2c997ea",
"0xf891344adf6ebf6aee2a3fae09de7173788c91b14e01f594ea7bcfa9fa09ef4a",
"0x5e34d3a8d812a18e58f097064c31c9c6e4c75856fd6ed540b6975a240e77f218",
"0xc433ce664fccf755bd5776233a8a71f1c2a5a67eb4e868e10be0f76b160f7aee",
"0xa75e4788b1246628abf3b8c6278d61613879f823337557dd842a283d34e04175",
"0x9112245cae95de7df517b16f084dd2dcf2903c4e7d474954e9facf7bb2d24736",
"0x633faa985c58ba10d8bb90838235aae76148daa0cd095194abdce3a118697886",
"0xfa5b73a2fb9bda2302066b9a2e46af6d084bb424c27248d1e9af3a5f647a703e",
"0xc71f8e62551a803915b6e150a50ac9f94fde00dcb8b7b3aaaee302852d343d40",
"0x17dda73da42a3547200866a7ada969f1eecf7ebcf67519a668fcf4dd6b4ba16f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

