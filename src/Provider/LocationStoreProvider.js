import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const LocationStoreContext = createContext(undefined);

export function useLocationStore() {
	const context = useContext(LocationStoreContext);
	if (context === undefined) {
		throw new Error(
			"useLocationStore must be used within LocationStoreProvider"
		);
	}

	return context;
}
const LocationStoreProvider = ({ children, locationStore }) => {
	const locations = locationStore;
	return (
		<LocationStoreContext.Provider value={locations}>
			{children}
		</LocationStoreContext.Provider>
	);
};

LocationStoreProvider.propTypes = {
	locationStore: PropTypes.object,
	children: PropTypes.any,
};

export default LocationStoreProvider;
