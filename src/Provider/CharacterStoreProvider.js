import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const StoreContext = createContext(undefined);

export function useCharacterStore() {
	//Custom Hook -- use to access the context
	const context = useContext(StoreContext); //Accepts context obj
	if (context === undefined) {
		throw new Error(
			"useCharacterStore must be used within CharacterStoreProvider"
		);
	}

	return context;
}

export function CharacterStoreProvider({ children, characterStore }) {
	const characters = characterStore;

	return (
		<StoreContext.Provider value={characters}>{children}</StoreContext.Provider>
	);
}

CharacterStoreProvider.propTypes = {
	characterStore: PropTypes.object,
	children: PropTypes.any,
};
