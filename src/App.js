import "./App.css";
import Header from "./Components/Head/Header/Header";
import Navbar from "./Components/Head/Navbar/Navbar";
import Home from "./Components/Content/Home/Home";
import CharacterList from "./Components/Content/CharactersList/CharacterList";
import NewCharacterForm from "./Components/Content/Form/CharacterForm/NewCharacterForm";
import NewLocationForm from "./Components/Content/Form/LocationForm/NewLocationForm";
import SingleCharacter from "./Components/Content/SingleItemView/SingleCharacter/SingleCharacter";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditCharacterForm from "./Components/Content/Form/CharacterForm/EditCharacterForm";
import LocationList from "./Components/Content/LocationsList/LocationList";
import SingleLocation from "./Components/Content/SingleItemView/SingleLocation/SingleLocation";
import EditLocationForm from "./Components/Content/Form/LocationForm/EditLocationForm";

function App() {
	return (
		<div className='grid-container App'>
			<BrowserRouter>
				<div className='Header'>
					<Header />
				</div>
				<div className='Content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/all'>
							<CharacterList />
							<LocationList />
						</Route>
						<Route exact path='/new/character'>
							<NewCharacterForm />
						</Route>
						<Route exact path='/edit/:character_id'>
							<EditCharacterForm />
						</Route>
						<Route exact path='/character/:character_id'>
							<SingleCharacter />
						</Route>
						<Route exact path='/new/location'>
							<NewLocationForm />
						</Route>
						<Route exact path='/location/edit/:location_id'>
							<EditLocationForm />
						</Route>
						<Route exact path='/location/:location_id'>
							<SingleLocation />
						</Route>
					</Switch>
				</div>
				<div className='Footer'>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
