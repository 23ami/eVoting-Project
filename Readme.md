# Senate Election System Using Blockchain Technology
### *- by Group 19*
### *Amit Kumar(22111008), Bharat(22111074), Saqeeb(22111053), Sanket Kale(22111052)*
This project is blockchain based e-voting dapp created in React,Solidity,Ganache and Truffle.

### Project Description
“Blockchain Based e-Voting System” is a web based online voting system primarily based on ethereum blockchain technology. Blockchain is a transparent, distributed, immutable and trustless ledger and to overcome the problems of the traditional voting system, blockchain plays a vital role in terms of security, trust and more. Here anyone eligible for voting can vote for their favorite candidate and they can see the result after the end of the election. It is fast, secure, and has low cost as compared to traditional voting systems. Some key features of our system are vote immutability and transparancy, security and user-friendly flow.
This project serves as a basic implementation of a voting system to understand the fundamentals of ethereum blockchain technology and how decentralized applications are built using Solidity and React. In this system, the account that deploys the smart contract acts as the Admin, who has the authority to add candidates. Voters are added using the signup page. They can cast the votes by loggin in through the login page. The Admin starts the election and eligible voters can cast their votes. Once the election is closed by the Admin, the final results are immediately visible to the voters.

### Screenshots

##### Voter Registration
![alt text](https://github.com/23ami/eVoting-Project/blob/main/projectImages/image1.png?raw=true)
---
##### Add Candidate + Start Election by Admin
![alt text](https://github.com/23ami/eVoting-Project/blob/main/projectImages/image2.png?raw=true)
---
##### Voting Page
![alt text](https://github.com/23ami/eVoting-Project/blob/main/projectImages/image3.png?raw=true)
---
##### Result Page
![alt text](https://github.com/23ami/eVoting-Project/blob/main/projectImages/image4.png?raw=true)
---

### Installation
##### Step 1. Clone the project 
```sh
git clone {ADD GITHUB LINK HERE}
```
##### Step 2. Start Ganache
Open the Ganache GUI client to start the local blockchain instance.
##### Step 3. Compile & Deploy Election Smart Contract
```sh
truffle migrate --reset
```
Each time Ganache is restarted, it's necessary to migrate the election smart contract.

##### Step 4. Configure Metamask
- Unlock Metamask
- Connect metamask to the local Etherum blockchain provided by Ganache.
- Import an account provided by Ganache.

##### Step 5. Run the Front End Application
```sh
cd .\client
npm install
npm start
```

##### Step 5. Run the Server
```sh
cd .\server
npm install
npm start
```
Visit URL in your browser: http://localhost:3000

