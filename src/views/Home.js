import React from "react";
import NavBar from "../components/Home/NavBar";
import SearchBox from "../components/Home/SearchBox";
import Caterogy from "../components/Home/Category";
import Product from "../components/Home/Product";
import fire from "../assets/fire.svg";
import SpecialCard from "../components/Home/SpecialCard";
import Title from "../components/Utility/Title";
import Icon from "../components/Utility/Icon";

const Home = () => {
	return (
		<div className="container px-4 py-3 mx-auto md:px-10">
			<NavBar />

			<Title title="Coffee yet?" />
			<SearchBox />

			<Title title="Categories" />
			<Caterogy />

			<Product />

			<Title
				title="Special offer"
				icon={<Icon icon={fire} width={8} />}
			/>

			<SpecialCard />
		</div>
	);
};

export default Home;
