import React from "react";
import ToggleFormType from "./FormElements/ToggleFormType.js";
import { useCharacterStore } from "../../../Provider/CharacterStoreProvider";
import CharacterForm from "./CharacterForm/CharacterForm";

const NewCharacterForm = () => {
	const characterStore = useCharacterStore();

	const defaultState = {
		name: "",
		title: "",
		age: "",
		characterType: "Protagonist",
		occupation: "Pirate",
		eyeColour: "Blue",
		hairColour: "Brunette",
		location: "Ocean",
		mainTrait: "",
		specialAbility: "",
	};

	const [character, setCharacter] = React.useState(defaultState);

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
		characterStore.createCharacter(character);
		setCharacter(defaultState);
	}

	console.log(character, "<-- submit");

	return (
		<>
			<ToggleFormType />
			<h3>Create a new character</h3>
			<CharacterForm
				character={character}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default NewCharacterForm;

/* Get form data using refs
 -- https://reactjs.org/docs/refs-and-the-dom.html#the-ref-string-attribute 
 
 onChange -- value == data
 onSubmit
 when they get fired >> onChange fires when the actual .value changes, which doesn't officially occur until it loses focus.

 1. fill form
 2. click submit
 3. trigger function/event to get data from form fields
 4. pass that to characterStore > call createCharacter func
 5. added to characterList
 */
