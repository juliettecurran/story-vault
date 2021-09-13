import React from 'react'
import { useCharacterStore } from '../../Provider/CharacterStoreProvider'
import { observer } from 'mobx-react'

const CharacterList = () => {
    const characterList = useCharacterStore().characterList //Destructure
    const totalCharacters = useCharacterStore().totalCharacters
    return (


        <div className="characterList">

{/* ------- map over characterList array by ID and print only names ------- */}

            {totalCharacters}

        </div>
    )
}

export default observer(CharacterList)
