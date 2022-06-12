import React from "react";
import bean from "../../assets/coffee-bean.svg";
import chocolate from "../../assets/chocolate.svg";
import milk from "../../assets/milk.svg";
import Ingredient from "./Ingredient";
import SizeBoard from "./SizeBoard";
import About from "./About";
import AddToCartBtn from "./AddToCartBtn";

const ingredients = [
	{ name: "Coffee", img: bean },
	{ name: "Chocolate", img: chocolate },
	{ name: "Milk", img: milk },
];

const DetailOverlay = () => {
	return (
		<div className="relative z-10 w-full min-h-[70vh] px-5 py-4 -translate-y-10 bg-white rounded-[36px]">
			<div className="flex items-center justify-center w-full px-2 py-6 mx-auto space-x-3 rounded-full bg-gray">
				{ingredients.map((item, index) => (
					<Ingredient
						key={index}
						isLast={index === ingredients.length - 1}
						name={item.name}
						img={item.img}
					/>
				))}
			</div>

			<h3 className="py-8 text-2xl font-semibold">Coffee size</h3>
			<SizeBoard />

			<About />

			<AddToCartBtn />
		</div>
	);
};

export default DetailOverlay;
