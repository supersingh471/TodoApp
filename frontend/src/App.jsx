import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register"
import { Login } from "./pages/Login";

function App() {
	return (
		<>
		<BrowserRouter>
		<Routes>
			<Route path="Register" element={<Register/>}/>
			<Route path="Login" element={<Login/>}/>
		</Routes>
		</BrowserRouter>
		</>
	)
}

export default App

