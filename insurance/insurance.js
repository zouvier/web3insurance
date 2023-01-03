const Web3 = require('web3');
var url = "ENTER YOUR WSS HERE";
var jsoner = require("./wallets.json");
const web3 = new Web3(url);

async function outbidTransaction(nonce) {
    await nonce;
    console.log("in outbid")
    const accountValue = await web3.eth.getBalance(jsoner.account0.address);
    const gas = ("50000000000" * "21000");
    const valueToSend = (accountValue - gas);
    const holder = valueToSend.toLocaleString('fullwide', { useGrouping: false });
    const valueToSend2 = await web3.utils.BN(holder).toString();
    console.log("Is balance greater than gas: ",valueToSend2 > gas)

   

    const send = async () => {
        const rawTx = {
            from: jsoner.account0.address,
            gasPrice: "50000000000",
            gas: "21000",
            nonce: nonce,
            to: jsoner.account0.backupaddress,
            value: valueToSend2
        }

        const signature = await web3.eth.accounts.signTransaction(rawTx, jsoner.account0.pkey)
        console.log(signature)

        web3.eth.sendSignedTransaction(signature.rawTransaction).on("receipt", (receipt) => {
            console.log(receipt)
        })
    }
    send()



    // await sendAlert(message,jsoner.account0.phone);
}



module.exports = { sendAlert, outbidTransaction }





