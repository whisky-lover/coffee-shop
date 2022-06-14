import React from "react";
import Home from "../views/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import OnBoarding from "../views/OnBoarding";
import Details from "../views/Details";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<OnBoarding />} />
				<Route path="/home" element={<Home />} />
				<Route path="/product" element={<Details />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
