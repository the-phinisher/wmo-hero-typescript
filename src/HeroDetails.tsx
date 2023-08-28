import { useParams } from "react-router-dom"
import useFetch from "./utils/useFetch"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const HeroDetails = () => {
	const [name, setName] = useState<string>("")
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
	const { id } = useParams()
	const history = useNavigate()
	const {
		data: hero,
		error,
		isPending,
	} = useFetch("http://localhost:8000/heroes/" + id)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)
		const newHero = { name, id: hero.id }
		fetch("http://localhost:8000/heroes/" + hero.id, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newHero),
		}).then(() => {
			setIsSubmitting(false)
			history(-1)
		})
	}

	return (
		<div className="hero-details">
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{hero && (
				<form onSubmit={handleSubmit}>
					<label>Hero Name: {hero.name}</label>
					<label>New name: </label>
					<input
						type="text"
						required
						value={name}
						onChange={(e) => {
							setName(e.target.value)
						}}
					/>
					{!isSubmitting && <button>Update Name</button>}
					{isSubmitting && <button disabled>Updating...</button>}
				</form>
			)}
		</div>
	)
}

export default HeroDetails
