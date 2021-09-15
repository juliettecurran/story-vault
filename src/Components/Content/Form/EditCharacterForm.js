import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "./Form";
import { useCharacterStore } from "../../../Provider/CharacterStoreProvider";

const EditCharacterForm = () => {
	let params = useParams();
	let history = useHistory();
	const id = params.character_id;
	const characterStore = useCharacterStore();
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
			[e.target.name]: value,
		});
		console.log([e.target.name], value);
		console.log(character, "<--handleChange");
	}

	function handleSubmit(event) {
		event.preventDefault();
		updateCharacter(id, character);
		history.push(`/all`);
	}

	console.log(character, "<-- character State");
	return (
		<div>
			<p>edit forms</p>
			1. get id from url - useParams /useHistory filter chars by
			params.character_id >> get data use effect
			<Form
				character={character}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default EditCharacterForm;
