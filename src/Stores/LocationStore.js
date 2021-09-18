import { makeAutoObservable } from "mobx";
import Location from "../Models/Location";
import {
	setSessionValue,
	getSessionValue,
	removeSessionValue,
} from "../Utils/helpers";

class LocationStore {
	/* ------- init locationList array ------- */

	locationList = getSessionValue("locationList") || [];
	totalLocations =
		(getSessionValue("locationList") &&
			getSessionValue("locationList").length) ||
		0;
	locationDetails = null;

	/* ------- observe array and methods ------- */
	constructor() {
		makeAutoObservable(this);
	}

	/* ------- methods ------- */
	createLocation = (location) => {
		const newLocation = new Location(location);
		this.locationList.push(newLocation);
		this.totalLocations = this.locationList.length;
		setSessionValue("locationList", this.locationList);
	};

	updateLocation = (locationId, updatedData) => {
		const locationIndexAtId = this.locationList.findIndex(
			(location) => location.Id === locationId
		);
		if (locationIndexAtId >= 0 && updatedData) {
			this.locationList[locationIndexAtId] = updatedData;
		}
		setSessionValue("locationList", this.locationList);
	};

	deleteLocation = (locationId) => {
		const locationIndexAtId = this.locationList.findIndex(
			(location) => location.Id === locationId
		);
		if (locationIndexAtId > -1) {
			this.locationList.splice(locationIndexAtId, 1);
			this.totalLocations = this.locationList.length;
		}
		setSessionValue("locationList", this.locationList);
	};

	locationById = (locationId) => {
		const locationIndexAtId = this.locationList.findIndex(
			(location) => location.Id === locationId
		);
		return this.locationList[locationIndexAtId];
	};

	locationDetails = () => {
		return `You have ${this.totalLocations} locations`;
	};

	logLocationDetails = () => {
		console.log(this.locationDetails);
	};
}

export default LocationStore;
