import Navbar from "./constants/Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Create from "./Create"
import HeroDetails from "./HeroDetails"
import NotFound from "./constants/NotFound"
import Heroes from "./Heroes"

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" Component={Home} />
						<Route path="/create" Component={Create} />
						<Route path="/heroes" Component={Heroes} />
						<Route path="/heroes/:id" Component={HeroDetails} />
						<Route path="*" Component={NotFound} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
