import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPass from "./containers/ForgotPass";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Newvid from "./containers/newvid";
import RestPass from "./containers/PasswordReset";
import SignUp from "./containers/SignUp";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/Signup" element={<SignUp />} />
				<Route exact path="/forgotpass" element={<ForgotPass />} />
				<Route exact path="/passreset" element={<RestPass />} />
				<Route exact path="/newvid" element={<Newvid />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
