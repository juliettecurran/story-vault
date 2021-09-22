import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useCharacterStore } from "../../../Provider/CharacterStoreProvider";
import { observer } from "mobx-react";
import "./characters.css";
import Divider from "../MiscElements/Divider";

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
			<h3 className='CharacterList__listTitle'>
				Characters
				<Divider />
			</h3>
			<div className='CharacterList__container'>
				{characterList.map((character) => {
					const { Id, title, name } = character;
					return (
						<article key={Id} className='CharacterList__characterCard'>
							<Link to={`/character/${Id}`} className='characterList__link'>
								<h5 className='CharacterList__displayCharacterName'>
									{title} {name}
								</h5>
								<img src='https://via.placeholder.com/250' alt=''></img>
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
