import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar: React.FC = () => {
	return (
		<div className="navbar">
			<h1>Heroes</h1>
			<div className="Links">
				<Link to="/">Home</Link>
				<Link to="/create">New Hero</Link>
				<Link to="/heroes">Heroes</Link>
			</div>
		</div>
	)
}

export default Navbar
