import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import OnBoarding from "./views/OnBoarding";
import Details from "./views/Details";

function App() {
	return (
		<Routes>
			<Route path="/" element={<OnBoarding />} />
			<Route path="/home" element={<Home />} />
			<Route path="/product" element={<Details />} />
		</Routes>
	);
}

export default App;
