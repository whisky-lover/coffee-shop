import React from "react";
import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import location from "../../assets/location.svg";

const NavBar = () => {
	return (
		<div className="flex justify-between px-3 py-4 text-lg">
			<div className="flex items-center cursor-pointer jusitfy-center">
				<img src={cart} alt="cart icon" className="md:w-8" />
			</div>

			<div>
				<h1 className="flex items-center space-x-2">
					<img
						src={location}
						alt="location-pin icon"
						className="md:w-6"
					/>
					<span className="font-[300]">Saigon, Vietnam</span>
				</h1>
			</div>

			<div className="flex items-center cursor-pointer jusitfy-center">
				<img src={heart} alt="favorite icon" className="md:w-8" />
			</div>
		</div>
	);
};

export default NavBar;
