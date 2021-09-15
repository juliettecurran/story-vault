import React from "react";
import { useCharacterStore } from "../../Provider/CharacterStoreProvider";
import { observer } from "mobx-react";
import "./head.css";

const Header = () => {
	const { totalCharacters } = useCharacterStore();
	return (
		<header className='CharacterList__flexContainer'>
			<h2 className='CharacterList__flexItem'>Story Vault</h2>
			<h4 className='CharacterList__flexItem'>
				{totalCharacters} character(s) created
			</h4>

			{/*how to ternary plural when > 1 */}
		</header>
	);
};

export default observer(Header); /*Add observer to make header update*/
