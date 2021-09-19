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
		history.push(`/character/edit/${Id}`);
	};

	return (
		<>
			<h3>Characters</h3>
			<div className='CharacterList__container'>
				{characterList.map((character) => {
					const { Id, title, name } = character;
					console.log(character);
					return (
						<article key={Id} className='CharacterList__characterCard'>
							<Link to={`/character/${Id}`}>
								<img src='https://via.placeholder.com/250'></img>
								<h4 className='CharacterList__displayCharacterName'>
									{title} {name} {/*Will be link to single character page */}
								</h4>
							</Link>

							<div className='CharacterList__btnGroup'>
								<button
									onClick={() => handleEdit(Id)}
									type='edit'
									className='CharacterList__editCharacterBtn'
								>
									Edit
								</button>

								<button
									onClick={() => handleDelete(Id)}
									type='delete'
									className='CharacterList__deleteCharacterBtn'
								>
									Delete
								</button>
							</div>
						</article>
					);
				})}
			</div>
		</>
	);
};

export default observer(CharacterList);
