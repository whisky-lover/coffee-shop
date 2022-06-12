import React from "react";
import special from "../../assets/special.jpeg";

const SpecialCard = () => {
	return (
		<div className="grid grid-cols-2 gap-3 place-items-center px-3 py-2 shadow-lg rounded-2xl min-h-[200px]">
			<div className="w-full overflow-hidden rounded-2xl">
				<img
					src={special}
					alt="special products"
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="relative flex items-center justify-center w-full h-full">
				<div className="absolute top-8 md:top-4 md:left-10 flex justify-center items-center left-0 px-4 py-1 min-w-[75px] md:-translate-x-[50%] rounded-full text-lightGray bg-brown text-sm">
					Limited
				</div>
				<h3 className="text-lg font-semibold">
					Buy 1 get 1 free if you buy with Momo
				</h3>
			</div>
		</div>
	);
};

export default SpecialCard;
