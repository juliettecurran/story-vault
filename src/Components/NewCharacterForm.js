import React from 'react'
import '../Styling/form-style.css'
import { useState } from 'react';

const NewCharacterForm = () => {

  const [state, setState] = React.useState({
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
  })
 
  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
    console.log([e.target.name], value)
    console.log(state)
  }

  //useState
    return (
        <div class="container">
        <form>
   
          <label for="name">Name</label>
          <input 
           type="text" 
           name="name" 
           placeholder="James Marshall"
           onChange={handleChange}>
         </input>
      
          <label for="title">Title</label>
          <input
            type="text"
            name="title" 
            placeholder="Lord"
            onChange={handleChange}>
           </input>
      
      {/*onChange not happy with number input type */}
          <label for="age">Age</label>
          <input
            type="number"
            placeholder="20"
            min="1"
            max="100+"
            name="age">
          </input>

          <label for="characterType">Character Type</label>
          <select name="characterType" onChange={handleChange}>
            <option value="Protagonist">Protagonist</option>
            <option value="Antagonist">Antagonist</option>
            <option value="Love Interest">Love Interest</option>
            <option value="Mentor">Mentor</option>
            <option value="Side-Character">Side-Character</option>
          </select>

          <label for="occupation">Occupation</label>
          <input
            type="text"
            placeholder="Pirate"
            name="occupation"
            onChange={handleChange}>
          </input>

          <label for="location">Location</label>
          <select name="location" onChange={handleChange}>
            <option value="Ocean">Ocean</option>
            <option value="Mountain">Mountain</option>
            <option value="Town">Town</option>
            <option value="Mainland">Mainland</option>
          </select>

          <label for="eyeColour">Eye Colour</label>
          <select name="eyeColour" onChange={handleChange}>
            <option value="Blue">Blue</option>
            <option value="Brown">Brown</option>
            <option value="Green">Green</option>
            <option value="Other">Other</option>
          </select>

          <label for="hairColour">Hair Colour</label>
          <select name="hairColour" onChange={handleChange}>
            <option value="Brunette">Brunette</option>
            <option value="Blonde">Blonde</option>
            <option value="Ginger">Ginger</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </select>
      
          <label for="mainTrait">Main Trait</label>
          <input 
            type="text" 
            placeholder="Intelligent"
            name="mainTrait"
            onChange={handleChange}>
          </input>

          <label for="specialAbility">Special Ability</label>
          <input
            type="text"
            placeholder="None"
            name="specialAbility"
            onChange={handleChange}>
          </input>
      
          <input
            type="submit"
            value="Submit"
            onSubmit={/* OnSubmit add data to characterList array */}>
          </input> 
      
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