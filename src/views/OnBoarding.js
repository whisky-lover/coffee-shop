import React from "react";
import OverlayOnBoarding from "../components/OnBoarding/OverlayOnBoarding";
import "./OnBoarding.css";

const OnBoarding = () => {
	return (
		<div className="container relative mx-auto lg:max-w-none">
			<OverlayOnBoarding />

			<div className="relative lg:blur-none blur-[2px] on-boarding bg-cover bg-no-repeat bg-center min-h-screen"></div>
		</div>
	);
};

export default OnBoarding;
