import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import getWeb3 from "../../utils/getWeb3.js";
import LoginNavbar from "../LoginNavbar";
import Navbar from "../Navbar";

const Login = () => {
	const [web3, setWeb3] = useState(null);
	const [currentAccount, setCurrentAccount] = useState(null);
	const [loading, setLoading] = useState(true);

	const loadWeb3 = async () => {
		try {
			const web3 = await getWeb3();
			window.ethereum.request({method:"eth_requestAccounts"});
			const accounts = await web3.eth.getAccounts();
			setWeb3(web3);
			setCurrentAccount(accounts[0]);
			console.log(accounts[0]);
			setLoading(false);
		} catch (error) {
		console.error("Error:", error);
		}
	};
	useEffect(() => {
		loadWeb3();
	})
	// await contract.methods.addVoter(name).send({ from: currentAccount });

	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Submit button called");
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			// check if metamask address === retrieved address
			console.log("server",res.myuser.address);
			console.log("metamask",currentAccount); 
			if(res.myuser.address != currentAccount){
				console.log("error in metamask");
				setError("Change Metamask address");

				throw new Error("Change metamask address");
			}else{
				localStorage.setItem("token", res.data);
				window.location = "/";
			}
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (<>
	<Navbar />
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Login
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
						 Register
						</button>
					</Link>
				</div>
			</div>
		</div>
	</>

	);
};

export default Login;
