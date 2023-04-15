# Senate Election System Using Blockchain Technology
---
##### Group 19
##### Amit Kumar(22111008)
##### Bharat(22111074)
##### Saqeeb(22111053)
##### Sanket Kale(22111052)
---

This project is blockchain based e-voting dapp created in React,Solidity,Ganache and Truffle.

### Project Description
---
“Blockchain Based e-Voting System” is a web based online voting system primarily based on ethereum blockchain technology. Blockchain is a transparent, distributed, immutable and trustless ledger and to overcome the problems of the traditional voting system, blockchain plays a vital role in terms of security, trust and more. Here anyone eligible for voting can vote for their favorite candidate and they can see the result after the end of the election. It is fast, secure, and has low cost as compared to traditional voting systems. Some key features of our system are vote immutability and transparancy, security and user-friendly flow.
This project serves as a basic implementation of a voting system to understand the fundamentals of ethereum blockchain technology and how decentralized applications are built using Solidity and React. In this system, the account that deploys the smart contract acts as the Admin, who has the authority to add candidates. Voters are added using the signup page. They can cast the votes by loggin in through the login page. The Admin starts the election and eligible voters can cast their votes. Once the election is closed by the Admin, the final results are immediately visible to the voters.

### Dependencies
---
#### SERVER SIDE
* bcrypt
* cors
* dotenv
* express
* joi
* joi-password-complexity
* jsonwebtoken
* ldapjs
* mongoose
* nodemailer
* nodemon
#### CLIENT SIDE
* @mui/icons-material
* @mui/material
* @reduxjs/toolkit
* axios
* ldapjs
* react
* react-dom
* react-router-dom
* react-scripts
* web-vitals
* web3

### Installation
---
##### Step 1. Clone the project 
```sh
git clone "https://github.com/23ami/eVoting-Project"
```
##### Step 2. Start Ganache
Open the Ganache GUI client to start the local blockchain instance.
##### Step 3. Compile & Deploy Election Smart Contract
```sh
truffle migrate --reset
```
Each time Ganache is restarted, it's necessary to migrate the election smart contract.
##### Step 4. Create Admin
```sh
cd .\server
node createAdmin.js
```
Copy the output of the above program without curly braces. Then goto the mongodb cloud and click on the insert button and paste it there to create a instance of the admin.
![alt text](https://github.com/23ami/eVoting-Project/blob/main/projectImages/image5.png?raw=true)

##### Step 5. Run the Front End Application
```sh
cd .\client
npm install
npm start
```

##### Step 6. Run the Server
```sh
cd .\server
npm install
npm start
```
##### Step 7. Configure Metamask
- Unlock Metamask
- Connect metamask to the local Etherum blockchain provided by Ganache.
- Import accounts for admin and voters (according to the requirement) provided by Ganache.

#### Step 8. Admin Login
- Now Admin can login with the help of user name and password.
- The default login email of admin is "amitkumar10.cse@gmail.com"
- The default password is "ASDF@123"

#### Step 9. Voter Registration
- Admin can start the election and add candidates.
- Voters can also register themselves and vote to their favourite candidate.(change the metamask address accordingly) 

#### Step 10. Result
- Admin can end the election 
- Voters can see the final results

Visit URL in your browser: http://localhost:3000

### Screenshots
---
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