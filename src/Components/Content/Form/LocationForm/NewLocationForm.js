import React from "react";
import ToggleFormType from "../FormElements/ToggleFormType.js";
import LocationForm from "./LocationForm.js";
import { useLocationStore } from "../../../../Provider/LocationStoreProvider";

const NewLocationForm = () => {
	const locationStore = useLocationStore();

	const defaultState = {
		name: "",
		demonym: "",
		size: "",
		ruler: "",
		population: "",
		geography: "",
		culturalTrait: "",
		dominantReligion: "",
		language: "",
		symbol: "",
	};

	const [location, setLocation] = React.useState(defaultState);

	const handleChange = (e) => {
		const value = e.target.value;
		setLocation({
			...location,
			[e.target.name]: value,
		});
	};

	function handleSubmit(event) {
		event.preventDefault();
		locationStore.createLocation(location);
		setLocation(defaultState);
	}

	return (
		<>
			<ToggleFormType />
			<LocationForm
				location={location}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};
export default NewLocationForm;
