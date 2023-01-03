Welcome to my Node.js project for web3 insurance!

Link to Youtube Video: https://youtu.be/xSK53j-l4q0

This project allows you to monitor the blockchain for transactions that are sent from a wallet that you own. It will then verify if the transaction is going to a trusted wallet. If the transaction is not going to a trusted wallet, the project will "front run" the rogue transaction and send the funds to a wallet that you own instead.

Getting Started
To get started with this project, you will need to have Node.js and npm installed on your machine. You can then clone this repository and install the necessary dependencies by running the following commands:


```git clone https://github.com/zouvier/web3insurance```
```cd insurance```
```npm install```


Before you can start using this project, you will need to set up a few configuration options. These can be found in the wallets.js file located in the ```insurance/```

First, you will need to specify the address of the wallet that you want to monitor. This can be done by setting the Account0 address option in the wallets file.

Next, you will need to specify a list of trusted wallet addresses. Any transactions going to these wallets will be considered safe and will not be front run. You can do this by setting the `backupAddress` option in the config file.

Running the Monitoring Script
To start monitoring the blockchain for transactions, simply run the following command from the root directory of the project:

node watcher.js

This will start the monitoring script, which will check the blockchain for transactions from the specified wallet and verify if they are going to a trusted wallet. If not, the script will front run the rogue transaction and send it to the target wallet instead.

Additional Features
In addition to the basic transaction monitoring and front running functionality, this project also includes several additional features:

Automatic retries: If the script encounters an error while attempting to front run a rogue transaction, it will automatically retry the transaction a configurable number of times before giving up.
Logging: The script will log all transactions and any errors that occur to a file for easy reference.
I hope you find this project useful for insuring your wallets! If you have any questions or suggestions for improvement, don't hesitate to open an issue or submit a pull request.
