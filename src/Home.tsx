import HeroesList from "./utils/HeroesList"
import useFetch from "./utils/useFetch"

const Home = () => {
	const {
		data: heroes,
		isPending,
		error,
	} = useFetch("http://localhost:8000/heroes")

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{!isPending && (
				<HeroesList
					heroes={heroes.filter((hero: any) => hero.id < 5)}
					title="Top heroes!"
				/>
			)}
		</div>
	)
}

export default Home
