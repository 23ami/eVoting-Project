const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	address:{type:String,required:true,validate: {
		validator: function(v) {
		  return /^0x[a-fA-F0-9]{40}$/.test(v); // validate that the string is a valid Ethereum address
		},
		message: props => `${props.value} is not a valid Ethereum address!`
	  }},
	verified:{type:Boolean,default:false},
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		address: Joi.string().required().label("Address"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
