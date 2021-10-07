import React from "react";
import ToggleFormType from "../FormElements/ToggleFormType.js";
import { useCharacterStore } from "../../../../Provider/CharacterStoreProvider";
import CharacterForm from "./CharacterForm";

const NewCharacterForm = () => {
	const characterStore = useCharacterStore();

	const defaultState = {
		name: "",
		title: "",
		age: "",
		characterType: "Protagonist",
		occupation: "",
		eyeColour: "Blue",
		hairColour: "Brunette",
		location: "Ocean",
		mainTrait: "",
		specialAbility: "",
		characterImage: "https://via.placeholder.com/250x250"
	};

	const [character, setCharacter] = React.useState(defaultState);

	function handleChange(e) {
		const value = e.target.value;
		setCharacter({
			...character,
			[e.target.name]: value
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		characterStore.createCharacter(character);
		setCharacter(defaultState);
	}

	return (
		<>
			<ToggleFormType />

			<CharacterForm
				character={character}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default NewCharacterForm;
