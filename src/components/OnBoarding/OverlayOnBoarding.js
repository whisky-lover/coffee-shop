import React from "react";
import ButtonLarge from "./ButtonLarge";
import PatternOnBoarding from "./PatternOnBoarding";

const OverlayOnBoarding = () => {
	return (
		<div className="absolute inset-0 z-10 text-white bg-black bg-opacity-40">
			<div className="flex space-y-6 h-full flex-col px-5 py-[120px] justify-end items-center">
				<h3 className="text-gray font-bold leading-[60px] text-4xl md:text-6xl lg:text-8xl lg:leading-[120px] md:leading-[80px] md:landscape:leading-[90px] md:landscape:text-7xl">
					Good coffee, <br /> Good friends, <br /> let it blends
				</h3>
				<p className="text-lightGray w-[65%] lg:w-[50%] md:py-4 md:landscape:py-2 lg:py-6 text-lg md:text-3xl md:landscape:text-3xl lg:text-4xl text-center leading-8 font-[300]">
					The best grain, the finest roast, the most powerful flavor.
				</p>

				<PatternOnBoarding />

				<ButtonLarge title="get started" />
			</div>
		</div>
	);
};

export default OverlayOnBoarding;
