import React from 'react'
import './itemCardModalOuter.css'

const ItemCardModalOuter = ({ itemImage, handleDelete, handleEdit, id, children }) => {
    console.log('id', id)
    return (
        <div className="modal__body">
            <div className="itemCardModalOuter__container">
                <img
                    className="itemCardModalOuter__itemImage"
                    src={itemImage}
                    alt=""
                ></img>

                <table className="itemCardModalOuter__table">
                    <thead></thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
            <div className="modal__footer">
                <button className='itemCardModalOuter__editCardBtn' onClick={() => handleEdit(id)}>Edit</button>

                <button className='itemCardModalOuter__deleteCardBtn' onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default ItemCardModalOuter
