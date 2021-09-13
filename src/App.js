import './App.css';
import Header from "./Components/Head/Header";
import Navbar from "./Components/Head/Navbar";
import Home from "./Components/Content/Home";
import CharacterList from './Components/Content/CharacterList';
import NewCharacterForm from './Components/Content/NewCharacterForm';
import SingleCharacter from './Components/Content/SingleCharacter';
import Footer from "./Components/Footer/Footer";
import CharacterStore from './Stores/CharacterStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {

  //const store = new CharacterStore(); Router!!!

  return (

    <div className='App'>
      <BrowserRouter>
        <div className='Head'>
          <Header />
          <Navbar/>
        </div>
        <div className='Content'>
          <Switch>
          <Route exact path='/'>
             <Home/>
            </Route>
            <Route exact path='/all'>
              <CharacterList />
            </Route>
            <Route exact path='/new'>
              <NewCharacterForm />
            </Route>
            <Route exact path='/character/:review_id'>
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

    {/* <>
    <Navbar/>
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/new" component={NewCharacterForm} />
      <Route exact path="/all" component={CharacterList} />
    </div>
    </>
  );
} */}

export default App;
