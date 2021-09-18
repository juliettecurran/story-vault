import React from "react";
import { useParams } from "react-router-dom";
import { useLocationStore } from "../../../../Provider/LocationStoreProvider";

const SingleLocation = () => {
	const params = useParams();
	const id = params.location_id;

	const { locationById } = useLocationStore();
	const mySingleLocation = locationById(id);
	console.log(id, "<<< id");
	console.log(mySingleLocation, "single");
	//bbbd6826-5a18-42d2-ae6b-02e2bc59ef1b

	return (
		<div className='locationList__container'>
			<p>Single location page</p>
			<article key={id} className='locationList__locationGrid'>
				<p>{mySingleLocation.name}</p>
				<p>{mySingleLocation.demonym}</p>
				<p>{mySingleLocation.size}</p>
				<p>{mySingleLocation.ruler}</p>
				<p>{mySingleLocation.population}</p>
				<p>{mySingleLocation.geography}</p>
				<p>{mySingleLocation.culturalTrait}</p>
				<p>{mySingleLocation.dominantReligion}</p>
				<p>{mySingleLocation.language}</p>
				<p>{mySingleLocation.symbol}</p>
			</article>
		</div>
	);
};

export default SingleLocation;
