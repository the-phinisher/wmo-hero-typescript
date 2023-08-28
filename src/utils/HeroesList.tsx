import { Link } from "react-router-dom"

const HeroesList: React.FC<{
	title: string
	heroes: Array<{ id: number; name: string }>
}> = ({ heroes, title }) => {
	return (
		<div className="heroes">
			<h2>{title}</h2>
			{heroes.map((hero: { id: number; name: string }) => (
				<Link to={`/heroes/${hero.id}`} key={hero.id}>
					<div className="hero-preview">
						<h2>{hero.name}</h2>
					</div>
				</Link>
			))}
		</div>
	)
}

export default HeroesList
