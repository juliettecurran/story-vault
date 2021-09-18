import React from "react";
import { useParams } from "react-router-dom";
import { useCharacterStore } from "../../../../Provider/CharacterStoreProvider";

const SingleCharacter = () => {
	const params = useParams();
	const id = params.character_id;

	const { characterById } = useCharacterStore();
	const mySingleCharacter = characterById(id);
	console.log(id, "<<< id");
	console.log(mySingleCharacter, "single");
	//bbbd6826-5a18-42d2-ae6b-02e2bc59ef1b

	return (
		<div className='characterList__container'>
			<p>Single character page</p>
			<article key={id} className='characterList__characterGrid'>
				<p>{mySingleCharacter.title}</p>
				<p>{mySingleCharacter.name}</p>
				<p>{mySingleCharacter.characterType}</p>
				<p>{mySingleCharacter.age}</p>
				<p>{mySingleCharacter.occupation}</p>
				<p>{mySingleCharacter.eyeColour}</p>
				<p>{mySingleCharacter.hairColour}</p>
				<p>{mySingleCharacter.location}</p>
				<p>{mySingleCharacter.mainTrait}</p>
				<p>{mySingleCharacter.specialAbility}</p>
			</article>
		</div>
	);
};

export default SingleCharacter;
