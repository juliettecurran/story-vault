import React from 'react'
import { useCharacterStore } from '../../../Provider/CharacterStoreProvider'
import { observer } from 'mobx-react'
import './characters.css'

const CharacterList = () => {
    const { characterList } = useCharacterStore() 
    return (
      
   <div className="characterList">
    <p>A list of character text or picture links should be here</p>

      {characterList.map((character) => {
        const { characterId, title, name } = character;
          return (
            <article key={characterId} className="character-grid">
              
                  <h4 className="characterName">
                    {title} {name} {/*Will be link to single character page */}
                  </h4>
                
                <button type="edit" className="editBtn">
                   Edit
                </button> 
                <button type="Delete" className="deleteBtn">
                   Delete
                </button> 
            </article>
          );
        })}

{/* ------- map over characterList array by ID and print only names ------- */}

          

        </div>
    )
}

export default observer(CharacterList)
