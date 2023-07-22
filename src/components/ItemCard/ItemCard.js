import React from "react";
import './ItemCard.css'

function ItemCard({ item }) {
  const {
    name,
    price,
    image,
    toppings,
    tags,
    shortDescription,
    longDescription,
  } = item;

  return (
    <div className="ItemCard">
      <div className="ItemCard__image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="ItemCard__info">
        <h3>{name}</h3>
        <button>ADD TO ORDER</button>
        <p>
            {shortDescription}
        </p>
      </div>
    </div>
  );
}

export default ItemCard;
