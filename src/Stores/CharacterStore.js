import { autorun, makeAutoObservable } from 'mobx';
import Character from '../Models/Character';

class CharacterStore {
     /* ------- init characterList array ------- */
	characterList = [];
    totalCharacters = 0;
    characterDetails = null;
    createCharacter = null;
    updateCharacter = null;
    deleteCharacter = null;
    characterById = null;

    /* ------- observe array and methods ------- */
    constructor() {
        makeAutoObservable(this);       
     /*    autorun(this.logCharacterDetails); */
    }


    /* ------- methods ------- */
	 createCharacter = (character) => {
        const newCharacter = new Character(character)
		 this.characterList.push(newCharacter); 
       // this.characterList = [...this.characterList, {...character, characterId: Math.random()}]
        this.totalCharacters = this.characterList.length
	} 
  
	updateCharacter(characterId, update) {
		const characterIndexAtId = this.characterList.findIndex(
			(character) => character.id === characterId
		);
		if (characterIndexAtId >= 0 && update) {
			this.characterList[characterIndexAtId] =
				update;
		}
	}

    deleteCharacter(characterId) {
        const characterIndexAtId = this.characterList.findIndex((character) => character.id === characterId);
        if (characterIndexAtId > -1) {
            this.characterList.splice(characterIndexAtId, 1)
            this.totalCharacters = this.characterList.length
        }
    }

     characterById(characterId) {
        const characterIndexAtId = this.characterList.findIndex((character) => character.id === characterId);
        return this.characterList[characterIndexAtId]
    }
  
     characterDetails() {
        return `You have ${this.totalCharacters} characters`
    }

    logCharacterDetails() {
        console.log(this.characterDetails)
    }
}

export default CharacterStore;
