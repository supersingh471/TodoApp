import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register"

function App() {
	return (
		<>
		<BrowserRouter>
		<Routes>
			<Route path="signup" element={<Register/>}/>
		</Routes>
		</BrowserRouter>
		</>
	)
}

export default App

