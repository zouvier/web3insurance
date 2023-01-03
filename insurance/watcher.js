var ethers = require("ethers");
var url = "ENTER YOUR WSS HERE";
var {outbidTransaction} = require("./insurance.js");
var json = require("./wallets.json");


from1 = json.account0.address;
fromnumber = json.account0.phone;
to1 = json.account0.backupaddress;



var init = async function () {
  var customWsProvider = new ethers.providers.WebSocketProvider(url);
  
  customWsProvider.on("pending", (tx) => {
    customWsProvider.getTransaction(tx).then(function (transaction) {
      try{
        if(transaction.from === from1 && transaction.to !== to1){
          console.log(transaction.from)
          console.log("===[][][][][]  alert [][][][][]===")
          console.log("account transaction found for: ",from1)
          console.log("sending alert to: ",fromnumber)
          outbidTransaction(transaction.nonce).then(console.log);
          console.log(transaction)
          console.log("===[][][][][]  alert [][][][][]===")
        }
        else if(transaction.from === from1){
          console.log(transaction)
        }
      }
      catch(error){
        console.error(error)
        init()
      }
    });
  });

  customWsProvider._websocket.on("error", async () => {
    console.log(`Unable to connect to ${ep.subdomain} retrying in 3s...`);
    setTimeout(init, 3000);
  });

  customWsProvider._websocket.on("close", async (code) => {
    console.log(
      `Connection lost with code ${code}! Attempting reconnect in 3s...`
    );
    customWsProvider._websocket.terminate();
    setTimeout(init, 3000);
  });
};

function composeMessage(info){
  return `\n ==TX ALERT== \n\n did you send a transaction to ${info.to}? \n\n Reply with Y or N ${info.nonce}`
}


init();