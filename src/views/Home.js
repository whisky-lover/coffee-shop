import React from "react";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import Caterogy from "../components/Category";
import Product from "../components/Product";
import fire from "../assets/fire.svg";
import SpecialCard from "../components/SpecialCard";

const Home = () => {
	return (
		<div className="container px-4 py-3 mx-auto">
			<NavBar />

			<h3 className="py-8 text-2xl font-semibold">Coffee yet?</h3>

			<SearchBox />

			<h3 className="py-8 text-2xl font-semibold">Categories</h3>
			<Caterogy />

			<Product />

			<h3 className="flex items-center w-full py-8 space-x-4 text-4xl font-semibold">
				<span>Special Offer</span>
				<div className="w-[40px]">
					<img
						src={fire}
						alt="fire icon"
						className="object-cover w-full h-full"
					/>
				</div>
			</h3>

			<SpecialCard />
		</div>
	);
};

export default Home;
