import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useLocationStore } from "../../../Provider/LocationStoreProvider";
import { observer } from "mobx-react";
import "./locations.css";

const LocationList = () => {
	let history = useHistory();
	const locationStore = useLocationStore();
	const { locationList } = useLocationStore();

	const handleDelete = (Id) => {
		locationStore.deleteLocation(Id);
	}; //make these handlers reusable

	const handleEdit = (Id) => {
		history.push(`/location/edit/${Id}`);
	};

	return (
		<div className='locationList__container'>
			<h3>Locations in vault</h3>
			{locationList.map((location) => {
				const { Id, name, ruler, symbol } = location;

				return (
					<article key={Id} className='locationList__locationGrid'>
						<Link to={`/location/${Id}`}>
							<h4 className='locationList__displayLocationName'>
								{name} {ruler} {/*Will be link to single location page */}
							</h4>
						</Link>
						<h4 className='locationList__displaylocationSymbol'>{symbol}</h4>

						<button
							onClick={() => handleEdit(Id)}
							type='edit'
							className='locationList__editLocationBtn'
						>
							Edit
						</button>

						<button
							onClick={() => handleDelete(Id)}
							type='delete'
							className='locationList__deleteLocationBtn'
						>
							Delete
						</button>
					</article>
				);
			})}
		</div>
	);
};

export default observer(LocationList);
