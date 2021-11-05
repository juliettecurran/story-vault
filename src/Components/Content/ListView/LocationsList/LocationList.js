import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocationStore } from "../../../../Provider/LocationStoreProvider";
import { observer } from "mobx-react";
import ItemCard from "../ItemCard/ItemCard";
import EmptyList from "../EmptyList/EmptyList";
import Modal from "../../SingleItemView/Modal";
import "./locations.css";
import ItemCardModalOuter from "../../SingleItemView/ItemCardModalOuter";
import ItemCardModalRow from "../../SingleItemView/ItemCardModalRow";
import LocationModal from "../../SingleItemView/LocationModal";

const LocationList = () => {
    const [openModal, setOpenModal] = useState(false);
    let history = useHistory();
    const locationStore = useLocationStore();
    const { locationList } = useLocationStore();

    const handleDelete = (Id) => {
        locationStore.deleteLocation(Id);
    };

    const handleEdit = (Id) => {
        history.push(`/location/edit/${Id}`);
    };

    const handleModalOpen = () => {
        setOpenModal(true)
    }

    const handleModalClose = () => {
        setOpenModal(false)
    }

    return (
        <>
            <h3 className="LocationList__listTitle">Locations</h3>
            <div className="LocationList__container">
                {locationList && locationList.length > 0 ? (
                    <>
                        {locationList.map((location, index) => {
                            console.log(location, 'lloc')
                            return (

                                <ItemCard
                                    key={index}
                                    data={location}
                                    cardType="location"
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}>

                                    <LocationModal handleDelete={handleDelete} handleEdit={handleEdit} location={location} />
                                </ItemCard>



                            );
                        })}
                    </>
                ) : (
                    <EmptyList listType="location" />
                )}
            </div>
        </>
    );
};

export default observer(LocationList);
