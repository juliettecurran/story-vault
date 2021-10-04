import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useLocationStore } from "../../../../Provider/LocationStoreProvider";
import { observer } from "mobx-react";
import ItemCard from "../ItemCard/ItemCard";
import EmptyList from "../EmptyList/EmptyList";
import "./locations.css";

const LocationList = () => {
	let history = useHistory();
	const locationStore = useLocationStore();
	const { locationList } = useLocationStore();

	const handleDelete = (Id) => {
		locationStore.deleteLocation(Id);
	};

	const handleEdit = (Id) => {
		history.push(`/location/edit/${Id}`);
	};

	return (
		<>
			<h3 className='LocationList__listTitle'>Locations</h3>
			<div className='LocationList__container'>
				{locationList && locationList.length > 0 ? (
					<>
						{locationList.map((location) => {
							const { Id, name } = location;

							return (
								<ItemCard
									Id={Id}
									key={Id}
									name={name}
									cardType='location'
									handleEdit={handleEdit}
									handleDelete={handleDelete}
								/>
							);
						})}
					</>
				) : (
					<EmptyList listType='location' />
				)}
			</div>
		</>
	);
};

export default observer(LocationList);
