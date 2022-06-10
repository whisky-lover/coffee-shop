import React from "react";
import ButtonLarge from "../components/ButtonLarge";
import PatternOnBoarding from "../components/PatternOnBoarding";

const OverlayOnBoarding = () => {
	return (
		<div className="absolute text-white z-10 inset-0 bg-black bg-opacity-40">
			<div className="flex space-y-6 h-full flex-col px-5 py-[120px] justify-end items-center">
				<h3 className="text-gray font-bold leading-[60px] text-4xl">
					Good coffee, <br /> Good friends, <br /> let it blends
				</h3>
				<p className="text-lightGray w-[65%] text-lg text-center leading-8 font-[300]">
					The best grain, the finest roast, the most powerful flavor.
				</p>

				<PatternOnBoarding />

				<ButtonLarge title="get started" />
			</div>
		</div>
	);
};

export default OverlayOnBoarding;
