import React from "react";

const Form = ({ character, handleChange, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='title'>Title</label>
			<input
				type='text'
				name='title'
				value={character.title}
				placeholder='Lord'
				onChange={handleChange}
			></input>

			<label htmlFor='name'>Name</label>
			<input
				type='text'
				name='name'
				value={character.name}
				placeholder='James Marshall'
				onChange={handleChange}
			></input>

			{/*onChange not happy with number input type */}
			<label htmlFor='age'>Age</label>
			<input
				onChange={handleChange}
				type='number'
				placeholder='20'
				min='1'
				value={character.age}
				max='100+'
				name='age'
			></input>

			<label htmlFor='characterType'>Character Type</label>
			<select
				name='characterType'
				value={character.characterType}
				onChange={handleChange}
			>
				<option value='Protagonist'>Protagonist</option>
				<option value='Antagonist'>Antagonist</option>
				<option value='Love Interest'>Love Interest</option>
				<option value='Mentor'>Mentor</option>
				<option value='Side-Character'>Side-Character</option>
			</select>

			<label htmlFor='occupation'>Occupation</label>
			<input
				type='text'
				value={character.occupation}
				placeholder='Pirate'
				name='occupation'
				onChange={handleChange}
			></input>

			<label htmlFor='location'>Location</label>
			<select
				name='location'
				value={character.occupation}
				onChange={handleChange}
			>
				<option value='Ocean'>Ocean</option>
				<option value='Mountain'>Mountain</option>
				<option value='Town'>Town</option>
				<option value='Mainland'>Mainland</option>
			</select>

			<label htmlFor='eyeColour'>Eye Colour</label>
			<select
				name='eyeColour'
				value={character.eyeColour}
				onChange={handleChange}
			>
				<option value='Blue'>Blue</option>
				<option value='Brown'>Brown</option>
				<option value='Green'>Green</option>
				<option value='Other'>Other</option>
			</select>

			<label htmlFor='hairColour'>Hair Colour</label>
			<select
				name='hairColour'
				value={character.hairColour}
				onChange={handleChange}
			>
				<option value='Brunette'>Brunette</option>
				<option value='Blonde'>Blonde</option>
				<option value='Ginger'>Ginger</option>
				<option value='Black'>Black</option>
				<option value='White'>White</option>
			</select>

			<label htmlFor='mainTrait'>Main Trait</label>
			<input
				type='text'
				value={character.mainTrait}
				placeholder='Intelligent'
				name='mainTrait'
				onChange={handleChange}
			></input>

			<label htmlFor='specialAbility'>Special Ability</label>
			<input
				type='text'
				value={character.specialAbility}
				placeholder='None'
				name='specialAbility'
				onChange={handleChange}
			></input>

			<button type='submit' className='submitBtn'>
				Submit
			</button>
		</form>
	);
};

export default Form;
