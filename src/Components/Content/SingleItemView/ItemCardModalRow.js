import React from 'react'
import './itemCardModalRow.css'

const ItemCardModalRow = ({ label, children }) => {
    console.log('label', label)
    return (
        <tr>
            <td className="itemCardModalDetails__label">{label}</td>
            <td className="itemCardModalDetails__value">{children}</td>
        </tr>
    )
}

export default ItemCardModalRow
