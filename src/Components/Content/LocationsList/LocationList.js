import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useLocationStore } from "../../../Provider/LocationStoreProvider";
import { observer } from "mobx-react";
import "./locations.css";
import Divider from "../MiscElements/Divider";

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
		<>
			<h3 className='LocationList__listTitle'>
				<Divider />
				Locations
			</h3>
			<div className='LocationList__container'>
				{locationList.map((location) => {
					const { Id, name } = location;

					return (
						<article key={Id} className='LocationList__locationCard'>
							<Link to={`/location/${Id}`}>
								<img src='https://via.placeholder.com/250'></img>
								<h5 className='LocationList__displayLocationName'>
									{name} {/*Will be link to single location page */}
								</h5>
							</Link>

							<div className='LocationList__btnGroup'>
								<button
									onClick={() => handleEdit(Id)}
									type='edit'
									className='LocationList__editLocationBtn'
								>
									Edit
								</button>

								<button
									onClick={() => handleDelete(Id)}
									type='delete'
									className='LocationList__deleteLocationBtn'
								>
									Delete
								</button>
							</div>
						</article>
					);
				})}
			</div>
		</>
	);
};

export default observer(LocationList);
