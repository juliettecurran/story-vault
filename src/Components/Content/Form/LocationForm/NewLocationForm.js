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
    locationImage: "https://via.placeholder.com/250x250",
    citizens: [],
  };

  const [location, setLocation] = React.useState(defaultState);
  const [citizens, setCitizens] = React.useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocation({
      ...location,
      [e.target.name]: value,
    });
  };

  const handleCheckboxChange = (id) => {
    setCitizens(id);
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
        handleCheckboxChange={handleCheckboxChange}
      />
    </>
  );
};
export default NewLocationForm;
