import React from 'react'
import { useCharacterStore } from '../../Provider/CharacterStoreProvider'

const Header = () => {
    const { totalCharacters } = useCharacterStore()
    return (
        <div>
            <p>This is the header</p>
            <h4> {totalCharacters} character(s) created</h4> {/*how to ternary plural when > 1 */}
        </div>
    )
}

export default Header
