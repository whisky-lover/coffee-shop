import React from "react";
import search from "../../assets/search.svg";
import filter from "../../assets/filter.svg";

const SearchBox = () => {
	return (
		<div className="relative">
			<div className="absolute -translate-y-[50%] left-4 top-1/2 flex items-center justify-center">
				<img src={search} alt="search icon" />
			</div>
			<input
				autoComplete="off"
				className="w-full px-12 py-4 border rounded-full outline-none border-darkGray bg-lightGray placeholder:text-lg placeholder:text-darkGray"
				type="text"
				name="search"
				id="search-box"
				placeholder="Search coffee.."
			/>

			<div className="absolute -translate-y-[50%] right-6 top-1/2 flex items-center justify-center">
				<img src={filter} alt="filter icon" />
			</div>
		</div>
	);
};

export default SearchBox;
