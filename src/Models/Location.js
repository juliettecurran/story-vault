import { v4 as uuidv4 } from "uuid";

class Location {
	constructor(data) {
		this.Id = uuidv4();
		this.name = data.name;
		this.demonym = data.demonym;
		this.size = data.size;
		this.ruler = data.ruler;
		this.population = data.population;
		this.geography = data.geography;
		this.culturalTrait = data.culturalTrait;
		this.dominantReligion = data.dominantReligion;
		this.language = data.language;
		this.symbol = data.symbol;
		this.citizens = data.citizens;
	}
}

export default Location;
