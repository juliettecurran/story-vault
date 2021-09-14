import React from 'react'
import './form.css'
import { useCharacterStore } from '../../../Provider/CharacterStoreProvider'

const NewCharacterForm = () => {
  const characterStore = useCharacterStore()

  const defaultState = {
    name: "",
    title: "",
    age: "",
    characterType: "Protagonist",
    occupation: "Pirate",
    eyeColour: "Blue",
    hairColour: "Brunette",
    location: "Ocean",
    mainTrait: "",
    specialAbility: ""
  }

  const [state, setState] = React.useState(defaultState)
 
  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
    console.log([e.target.name], value)
    console.log(state, '<--handleChange')
  }

  function handleSubmit(event) {
    event.preventDefault()
    characterStore.createCharacter(state)
    setState(defaultState)
  }
console.log(state, '<-- submit')

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
   
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title" 
            value={state.title} 
            placeholder="Lord"
            onChange={handleChange}>
           </input>
           
          <label htmlFor="name">Name</label>
          <input 
           type="text" 
           name="name"
           value={state.name} 
           placeholder="James Marshall"
           onChange={handleChange}>
         </input>
      
      
      {/*onChange not happy with number input type */}
          <label htmlFor="age">Age</label>
          <input
           onChange={handleChange}
            type="number"
            placeholder="20"
            min="1"
            value={state.age} 
            max="100+"
            name="age">
          </input>

          <label htmlFor="characterType">Character Type</label>
          <select name="characterType" value={state.characterType}  onChange={handleChange}>
            <option value="Protagonist">Protagonist</option>
            <option value="Antagonist">Antagonist</option>
            <option value="Love Interest">Love Interest</option>
            <option value="Mentor">Mentor</option>
            <option value="Side-Character">Side-Character</option>
          </select>

          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            value={state.occupation} 
            placeholder="Pirate"
            name="occupation"
            onChange={handleChange}>
          </input>

          <label htmlFor="location">Location</label>
          <select name="location"   value={state.occupation}  onChange={handleChange}>
            <option value="Ocean">Ocean</option>
            <option value="Mountain">Mountain</option>
            <option value="Town">Town</option>
            <option value="Mainland">Mainland</option>
          </select>

          <label htmlFor="eyeColour">Eye Colour</label>
          <select name="eyeColour"   value={state.eyeColour} onChange={handleChange}>
            <option value="Blue">Blue</option>
            <option value="Brown">Brown</option>
            <option value="Green">Green</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="hairColour">Hair Colour</label>
          <select name="hairColour"   value={state.hairColour}  onChange={handleChange}>
            <option value="Brunette">Brunette</option>
            <option value="Blonde">Blonde</option>
            <option value="Ginger">Ginger</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </select>
      
          <label htmlFor="mainTrait">Main Trait</label>
          <input 
            type="text" 
            value={state.mainTrait} 
            placeholder="Intelligent"
            name="mainTrait"
            onChange={handleChange}>
          </input>

          <label htmlFor="specialAbility">Special Ability</label>
          <input
            type="text"
            value={state.specialAbility} 
            placeholder="None"
            name="specialAbility"
            onChange={handleChange}>
          </input>
      
          <button type="submit">
              Submit
          </button> 
      
        </form>
      </div>
    )
}

export default NewCharacterForm

/* Get form data using refs
 -- https://reactjs.org/docs/refs-and-the-dom.html#the-ref-string-attribute 
 
 onChange -- value == data
 onSubmit
 when they get fired >> onChange fires when the actual .value changes, which doesn't officially occur until it loses focus.

 1. fill form
 2. click submit
 3. trigger function/event to get data from form fields
 4. pass that to characterStore > call createCharacter func
 5. added to characterList
 */