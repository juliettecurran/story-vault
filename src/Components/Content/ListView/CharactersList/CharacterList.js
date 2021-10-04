import React from "react";
import { useHistory } from "react-router-dom";
import { useCharacterStore } from "../../../../Provider/CharacterStoreProvider";
import { observer } from "mobx-react";
import ItemCard from "../ItemCard/ItemCard";
import EmptyList from "../EmptyList/EmptyList";
import "./characters.css";

const CharacterList = () => {
	let history = useHistory();
	const characterStore = useCharacterStore();
	const { characterList } = useCharacterStore();

	const handleDelete = (Id) => {
		characterStore.deleteCharacter(Id);
	};

	const handleEdit = (Id) => {
		history.push(`/character/edit/${Id}`);
	};

	return (
		<>
			<h3 className='CharacterList__listTitle'>Characters</h3>
			<div className='CharacterList__container'>
				{characterList && characterList.length > 0 ? (
					<>
						{characterList.map((character) => {
							const { Id, title, name } = character;

							return (
								<ItemCard
									Id={Id}
									key={Id}
									title={title}
									name={name}
									cardType='character'
									handleEdit={handleEdit}
									handleDelete={handleDelete}
								/>
							);
						})}
					</>
				) : (
					<EmptyList listType='character' />
				)}
			</div>
		</>
	);
};

export default observer(CharacterList);
