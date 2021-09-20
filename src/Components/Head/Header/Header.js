import React from "react";
import { useCharacterStore } from "../../../Provider/CharacterStoreProvider";
import { useLocationStore } from "../../../Provider/LocationStoreProvider";
import { observer } from "mobx-react";
import "./head.css";
import { pluralise } from "../../../Utils/helpers.js";
import Navbar from "../Navbar/Navbar";

const Header = () => {
	const { totalCharacters } = useCharacterStore();
	const { totalLocations } = useLocationStore();

	const characterCount = `${totalCharacters} ${pluralise(
		totalCharacters,
		"character",
		"characters"
	)} created`;

	const locationCount = `${totalLocations} ${pluralise(
		totalLocations,
		"location",
		"locations"
	)} created`;

	return (
		<header className='CharacterList__flexContainer'>
			<h2 className='CharacterList__flexItem CharacterList__title'>
				Story Vault
			</h2>
			<Navbar className='CharacterList__flexItem' />
			<ul className='CharacterList__flexItem'>
				<li>{characterCount}</li>
				<li>{locationCount}</li>
			</ul>
		</header>
	);
};

export default observer(Header); /*Add observer to make header update*/
