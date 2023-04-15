const router = require("express").Router();
const { User, validate } = require("./models/user");

const crypto = require("crypto");
const bcrypt = require("bcrypt");

const EMAIL = "amitkumar10.cse@gmail.com";
const PASSWORD = "ASDF@123";
const ADDRESS = "0x6BD3669fB0b56Ee5Af35e79b009f7ca8C0c46A96";

const createAdmin = async () => {
    try {
        console.log("1");
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(PASSWORD, salt);
        const mydata = { firstName:"admin",lastName:"admin",email: EMAIL, password: hashPassword, verified:true, address:ADDRESS};
        console.log(JSON.stringify(mydata));
        
    } catch (error) {
            console.log("error");
    }
}
createAdmin();