import React from "react";

const sizes = [
	{ title: "small", isActive: true },
	{ title: "medium", isActive: false },
	{ title: "large", isActive: false },
];

const SizeBoard = () => {
	return (
		<div className="flex justify-between">
			{sizes.map((item, index) => (
				<div
					key={index}
					className={`px-8 py-3 min-w-[110px] text-center rounded-full ${
						item.isActive
							? "bg-brown text-white"
							: "bg-white text-black"
					} shadow-md cursor-pointer`}
				>
					<span className="text-lg font-semibold capitalize">
						{item.title}
					</span>
				</div>
			))}
		</div>
	);
};

export default SizeBoard;
