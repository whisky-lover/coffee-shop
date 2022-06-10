import React from "react";
import OverlayOnBoarding from "../components/OverlayOnBoarding";

import "./OnBoarding.css";

const OnBoarding = () => {
	return (
		<div className="relative">
			<OverlayOnBoarding />

			<div className="relative blur-[2px] on-boarding bg-cover bg-no-repeat bg-center min-h-screen"></div>
		</div>
	);
};

export default OnBoarding;
