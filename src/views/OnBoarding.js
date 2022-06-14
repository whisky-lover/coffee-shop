import React from "react";
import OverlayOnBoarding from "../components/OnBoarding/OverlayOnBoarding";
import "./OnBoarding.css";
import { motion } from "framer-motion";

const OnBoarding = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="container relative mx-auto lg:max-w-none"
		>
			<OverlayOnBoarding />

			<div className="relative lg:blur-none blur-[2px] on-boarding bg-cover bg-no-repeat bg-center min-h-screen"></div>
		</motion.div>
	);
};

export default OnBoarding;
