import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import "./itemCard.css";

const ItemCard = ({
	Id,
	title,
	name,
	characterImage,
	cardType,
	handleEdit,
	handleDelete
}) => {
	return (
		<article key={Id} className='itemCard'>
			<Link to={`/${cardType}/${Id}`}>
				<h5
					className='itemCard__displayName'
					Link
					to={`/${cardType}/${Id}`}
					value={name}
				>
					{title} {name}
				</h5>
				<div className='itemCard__imageContainer'>
					<img
						src={`${characterImage}`}
						className='itemCard__characterImage'
						alt=' '
					></img>
				</div>
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
