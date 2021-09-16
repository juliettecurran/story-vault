import { makeAutoObservable } from "mobx";
import Character from "../Models/Character";
import {
	setSessionValue,
	getSessionValue,
	removeSessionValue,
} from "../Utils/helpers";

class CharacterStore {
	/* ------- init characterList array ------- */

	characterList = getSessionValue("characterList") || [];
	totalCharacters =
		(getSessionValue("characterList") &&
			getSessionValue("characterList").length) ||
		0;
	characterDetails = null;

	/* ------- observe array and methods ------- */
	constructor() {
		makeAutoObservable(this);
	}

	/* ------- methods ------- */
	createCharacter = (character) => {
		const newCharacter = new Character(character);
		this.characterList.push(newCharacter);
		this.totalCharacters = this.characterList.length;
		setSessionValue("characterList", this.characterList);
	};

	updateCharacter = (characterId, updatedData) => {
		const characterIndexAtId = this.characterList.findIndex(
			(character) => character.Id === characterId
		);
		if (characterIndexAtId >= 0 && updatedData) {
			this.characterList[characterIndexAtId] = updatedData;
		}
		setSessionValue("characterList", this.characterList);
	};

	deleteCharacter = (characterId) => {
		const characterIndexAtId = this.characterList.findIndex(
			(character) => character.Id === characterId
		);
		if (characterIndexAtId > -1) {
			this.characterList.splice(characterIndexAtId, 1);
			this.totalCharacters = this.characterList.length;
		}
		setSessionValue("characterList", this.characterList);
	};

	characterById = (characterId) => {
		const characterIndexAtId = this.characterList.findIndex(
			(character) => character.Id === characterId
		);
		return this.characterList[characterIndexAtId];
	};

	characterDetails = () => {
		return `You have ${this.totalCharacters} characters`;
	};

	logCharacterDetails = () => {
		console.log(this.characterDetails);
	};
}

export default CharacterStore;
