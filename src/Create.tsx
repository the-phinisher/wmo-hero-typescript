import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
	const [name, setName] = useState("")
	const [isPending, setIsPending] = useState(false)
	const history = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsPending(true)
		const hero = { name }

		fetch("http://localhost:8000/heroes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(hero),
		}).then(() => {
			setIsPending(false)
			history(-1)
		})
	}

	return (
		<div className="create">
			<h2>Add a new hero</h2>
			<form onSubmit={handleSubmit}>
				<label>Hero Name: </label>
				<input
					type="text"
					required
					value={name}
					onChange={(e) => {
						setName(e.target.value)
					}}
				/>

				{!isPending && <button>Add Hero</button>}
				{isPending && <button disabled>Adding Hero...</button>}
				<p>{name}</p>
			</form>
		</div>
	)
}

export default Create
