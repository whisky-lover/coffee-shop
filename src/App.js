import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import OnBoarding from "./views/OnBoarding";

function App() {
	return (
		<Routes>
			<Route path="/" element={<OnBoarding />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
}

export default App;
