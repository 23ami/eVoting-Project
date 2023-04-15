import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import styles from "./styles.module.css";
// import ElectionContract from "../src/contracts/Election.json";
import getWeb3 from "../../utils/getWeb3.js";
import ElectionContract from "../../contracts/Election.json";
import Navbar from "../Navbar";

const Signup = () => {
  	const [web3, setWeb3] = useState(null);
	const [currentAccount, setCurrentAccount] = useState(null);
	const [contract, setContract] = useState(null);

	const loadWeb3 = async () => {
		try {
		const web3 = await getWeb3();
		const accounts = await web3.eth.getAccounts();
		const networkId = await web3.eth.net.getId();
		const deployedNetwork = ElectionContract.networks[networkId];
		const instance = new web3.eth.Contract(
			ElectionContract.abi,
			deployedNetwork && deployedNetwork.address
		);
		setWeb3(web3);
		setCurrentAccount(accounts[0]);
		setContract(instance);
		console.log("Signup instance",web3,accounts[0],instance);

		} catch (error) {
		console.error("Error:", error);
		}
	};

	useEffect(() => {
		loadWeb3();
	})


	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState("");
	//const navigate = useNavigate();
	const [msg,setMsg]=useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Add voter address to blockchain
			const AddedVoter = await contract.methods.addVoter(currentAccount).send({ from: currentAccount });
			console.log("This tells that voter is added",AddedVoter);

		} catch (error) {
			console.log(error);
			setError("Already registered");
			return;
		}
		try {
			
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			setMsg(res.message);
		
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
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Login
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
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
						<input
							type="text"
							placeholder="Address"
							name="address"
							onChange={handleChange}
							value={data.address}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						{msg && <div className={styles.success_msg}>{msg}</div>}
						<button type="submit" className={styles.green_btn}>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	</>

	);
};

export default Signup;
