import React from "react";
import special from "../../assets/special.jpeg";
import Title from "../Utility/Title";
import Image from "../Utility/Image";

const SpecialCard = () => {
	return (
		<div className="grid grid-cols-2 gap-3 md:gap-8 place-items-center px-3 py-2 shadow-lg rounded-2xl min-h-[200px] lg:shadow-xl">
			<Image rounded={true} img={special} alt="special products" />

			<div className="relative flex items-center justify-center w-full h-full">
				<div className="absolute top-8 md:top-2 md:left-10 flex justify-center items-center left-0 px-4 py-1 min-w-[75px] md:-translate-x-[50%] lg:left-12 lg:py-3 lg:min-w-[120px] lg:text-lg rounded-full text-lightGray bg-brown text-sm md:text-base">
					Limited
				</div>

				<Title title="Buy 1 get 1 free if you buy with Momo" />
			</div>
		</div>
	);
};

export default SpecialCard;
