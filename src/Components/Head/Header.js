import React from 'react'
import { useCharacterStore } from '../../Provider/CharacterStoreProvider'
import { observer } from 'mobx-react'

const Header = () => {
    const { totalCharacters } = useCharacterStore()
    return (
        <header>
            <h2>Story Vault</h2>
            <h4> {totalCharacters} character(s) created</h4> {/*how to ternary plural when > 1 */}
        </header>
    )
}

export default observer(Header) /*Add observer to make header update*/
