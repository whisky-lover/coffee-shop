import Home from "./views/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import OnBoarding from "./views/OnBoarding";
import Details from "./views/Details";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
	return <AnimatedRoutes />;
}

export default App;
