import React from "react";
import { useCharacterStore } from "../../../Provider/CharacterStoreProvider";
import { observer } from "mobx-react";
import "./head.css";
import { pluralise } from "../../../Utils/helpers.js";

const Header = () => {
	const { totalCharacters } = useCharacterStore();
	const characterCount = `${totalCharacters} ${pluralise(
		totalCharacters,
		"character",
		"characters"
	)} created`;
	console.log(totalCharacters);
	return (
		<header className='CharacterList__flexContainer'>
			<h2 className='CharacterList__flexItem'>Story Vault</h2>
			<h4 className='CharacterList__flexItem'>{characterCount}</h4>
		</header>
	);
};

export default observer(Header); /*Add observer to make header update*/
