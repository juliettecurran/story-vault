class Character {
    constructor(data) {

        this.Id = data.Id;
        this.name = data.name;
        this.title = data.title;
        this.age = data.age;
        this.characterType = data.characterType;
        this.occupation = data.occupation;
        this.eyeColour = data.eyeColour;
        this.hairColour = data.hairColour;
        this.location = data.location;
        this.mainTrait = data.mainTrait;
        this.specialAbility = data.specialAbility
    }
}

export default Character;
