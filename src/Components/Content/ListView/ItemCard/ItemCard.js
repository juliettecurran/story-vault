import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import "./itemCard.css";

const ItemCard = ({ Id, title, name, cardType, handleEdit, handleDelete }) => {
	return (
		<article key={Id} className='itemCard'>
			<Link to={`/${cardType}/${Id}`}>
				<h5 className='itemCard__displayName' value={name}>
					{title} {name}
				</h5>
				<img src='https://via.placeholder.com/250' alt=''></img>
			</Link>

			<div className='itemCard__btnGroup'>
				<button
					onClick={() => handleEdit(Id)}
					type='edit'
					className='itemCard__editCardBtn'
				>
					Edit
				</button>

				<button
					onClick={() => handleDelete(Id)}
					type='delete'
					className='itemCard__deleteCardBtn'
				>
					Delete
				</button>
			</div>
		</article>
	);
};

export default observer(ItemCard);
