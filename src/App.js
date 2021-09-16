import "./App.css";
import Header from "./Components/Head/Header/Header";
import Navbar from "./Components/Head/Navbar/Navbar.js";
import Home from "./Components/Content/Home";
import CharacterList from "./Components/Content/Characters/CharacterList";
import NewCharacterForm from "./Components/Content/Form/CharacterForm/NewCharacterForm";
import NewLocationForm from "./Components/Content/Form/LocationForm/NewLocationForm";
import SingleCharacter from "./Components/Content/Characters/SingleCharacter";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditCharacterForm from "./Components/Content/Form/CharacterForm/EditCharacterForm";

function App() {
	return (
		<div className='grid-container App'>
			<BrowserRouter>
				<div className='Header'>
					<Header />
					<Navbar />
				</div>
				<div className='Content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/all'>
							<CharacterList />
						</Route>
						<Route exact path='/new/character'>
							<NewCharacterForm />
						</Route>
						<Route exact path='/new/location'>
							<NewLocationForm />
						</Route>
						<Route exact path='/edit/:character_id'>
							<EditCharacterForm />
						</Route>
						<Route exact path='/character/:character_id'>
							<SingleCharacter />
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
