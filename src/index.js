import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CharacterStoreProvider } from "./Provider/CharacterStoreProvider";
import CharacterStore from "./Stores/CharacterStore";
import LocationStore from "./Stores/LocationStore";
import { BrowserRouter as Router } from "react-router-dom";
import LocationStoreProvider from "./Provider/LocationStoreProvider";
const characterStore = new CharacterStore();
const locationStore = new LocationStore();

ReactDOM.render(
	<React.StrictMode>
		<LocationStoreProvider locationStore={locationStore}>
			<CharacterStoreProvider characterStore={characterStore}>
				<Router>
					<App />
				</Router>
			</CharacterStoreProvider>
		</LocationStoreProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
