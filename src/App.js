import './App.css';
import CharacterList from './Components/CharacterList';
import NewCharacterForm from './Components/NewCharacterForm';
import CharacterStore from './Stores/CharacterStore';


function App() {

  //const store = new CharacterStore();

  return (
    <div>
      <NewCharacterForm/>
      <CharacterList/>
    </div>
  );
}

export default App;
