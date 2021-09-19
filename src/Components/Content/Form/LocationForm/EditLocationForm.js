import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import LocationForm from "./LocationForm.js";
import { useLocationStore } from "../../../../Provider/LocationStoreProvider";

const EditLocationForm = () => {
	let params = useParams();
	let history = useHistory();
	const id = params.location_id;
	const { locationById, updateLocation } = useLocationStore();
	const [location, setLocation] = React.useState({});

	useEffect(() => {
		const myLocation = locationById(id);
		setLocation(myLocation);
	}, []);

	function handleChange(e) {
		const value = e.target.value;
		setLocation({
			...location,
			[e.target.name]: value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		updateLocation(id, location);
		history.push(`/all`);
	}

	return (
		<>
			<h3>Edit location</h3>
			<LocationForm
				location={location}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default EditLocationForm;
