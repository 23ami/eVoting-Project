import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./screens/Home";
import Navbar from "./components/Navbar";
// import CoverPage from "./screens/CoverPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";


const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const user = localStorage.getItem("token");

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Routes>
          {/* <Route path="/" element={<LoginApp />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}

			    {user && <Route path="/" exact element={<Home />} />}
          
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
