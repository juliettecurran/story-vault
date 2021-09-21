import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import CharacterForm from "./CharacterForm.js";
import { useCharacterStore } from "../../../../Provider/CharacterStoreProvider";

const EditCharacterForm = () => {
	let params = useParams();
	let history = useHistory();
	const id = params.character_id;
	const { characterById, updateCharacter } = useCharacterStore();
	const [character, setCharacter] = React.useState({});

	useEffect(() => {
		const myCharacter = characterById(id);
		setCharacter(myCharacter);
	}, []);

	function handleChange(e) {
		const value = e.target.value;
		setCharacter({
			...character,
			[e.target.name]: value
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		updateCharacter(id, character);
		history.push(`/all`);
	}

	return (
		<>
			<h3>Edit character</h3>
			<CharacterForm
				character={character}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default EditCharacterForm;
