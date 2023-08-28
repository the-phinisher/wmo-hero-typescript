import HeroesList from "./utils/HeroesList"
import useFetch from "./utils/useFetch"

const Heroes: React.FC = () => {
	const {
		data: heroes,
		isPending,
		error,
	} = useFetch("http://localhost:8000/heroes")

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{!isPending && <HeroesList heroes={heroes} title="All heroes!" />}
		</div>
	)
}

export default Heroes
