import React from "react";
import cappu from "../assets/cappu.svg";
import coldbrew from "../assets/coldbrew.svg";
import expresso from "../assets/expresso.svg";
import CartegoryTag from "./CartegoryTag";

const categories = [
	{
		name: "Cappuccino",
		icon: cappu,
		isActive: true,
	},
	{
		name: "Cold brew",
		icon: coldbrew,
		isActive: false,
	},
	{
		name: "Expresso",
		icon: expresso,
		isActive: false,
	},
	{
		name: "Expresso",
		icon: expresso,
		isActive: false,
	},
	{
		name: "Expresso",
		icon: expresso,
		isActive: false,
	},
	{
		name: "Expresso",
		icon: expresso,
		isActive: false,
	},
];

const Category = () => {
	return (
		<div className="flex items-center py-3 space-x-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
			{categories.map((item, index) => (
				<CartegoryTag
					key={index}
					name={item.name}
					isActive={item.isActive}
					icon={item.icon}
				/>
			))}
		</div>
	);
};

export default Category;
