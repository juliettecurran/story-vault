import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useCharacterStore } from "../../../Provider/CharacterStoreProvider";
import { observer } from "mobx-react";

import "./characters.css";

const CharacterList = () => {
	let history = useHistory();
	const characterStore = useCharacterStore();
	const { characterList } = useCharacterStore();

	const handleDelete = (Id) => {
		characterStore.deleteCharacter(Id);
	};

	const handleEdit = (Id) => {
		history.push(`/edit/${Id}`);
	};

	return (
		<div className='characterList__container'>
			<h3>Characters in vault</h3>
			{characterList.map((character) => {
				const { Id, title, name, characterType } = character;

				return (
					<article key={Id} className='characterList__characterGrid'>
						<Link to={`/character/${Id}`}>
							<h4 className='characterList__displayCharacterName'>
								{title} {name} {/*Will be link to single character page */}
							</h4>
						</Link>

						<h4 className='characterList__displayCharacterType'>
							{characterType}
						</h4>

						<button
							onClick={() => handleEdit(Id)}
							type='edit'
							className='characterList__editCharacterBtn'
						>
							Edit
						</button>

						<button
							onClick={() => handleDelete(Id)}
							type='delete'
							className='characterList__deleteCharacterBtn'
						>
							Delete
						</button>
					</article>
				);
			})}
		</div>
	);
};

export default observer(CharacterList);
