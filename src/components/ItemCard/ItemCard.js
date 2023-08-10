import React, { useState } from "react";
import "./ItemCard.css";
import { Button } from "@mui/material";

function ItemCard({ item }) {
  const [topping, setTopping] = useState("");
  const {
    name,
    // price,
    // image,
    toppings,
    // tags,
    shortDescription,
    // longDescription,
  } = item;

  console.log(topping);
  return (
    <div className="ItemCard">
      <div className="ItemCard__image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="ItemCard__info">
        <h3>{name}</h3>
        <Button>ADD TO ORDER</Button>
        <p className="ItemCard__info__description">{shortDescription}</p>
        <p className="ItemCard__info__toppings">{toppings.length > 0 && `Toppings: ${toppings.join(", ")}`}</p>
      </div>
    </div>
  );
}

export default ItemCard;
