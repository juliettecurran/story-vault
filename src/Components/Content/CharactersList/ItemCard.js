import React from "react";
import { Link } from "react-router-dom";
import "./itemCard.css";

const ItemCard = () => {
	return (
		<>
			<div className='itemCard__container'>
				{locationList.map((location) => {
					const { Id, name } = location;

					return (
						<article key={Id} className='itemCard'>
							<Link to={`/location/${Id}`}>
								<h5 className='itemCard__displayName'>{name}</h5>
								<img src='https://via.placeholder.com/250' alt=''></img>
							</Link>

							<div className='itemCard__btnGroup'>
								<button
									onClick={() => handleEdit(Id)}
									type='edit'
									className='itemCard__editBtn'
								>
									Edit
								</button>

								<button
									onClick={() => handleDelete(Id)}
									type='delete'
									className='itemCard__deleteBtn'
								>
									Delete
								</button>
							</div>
						</article>
					);
				})}
			</div>
		</>
	);
};

export default ItemCard;
