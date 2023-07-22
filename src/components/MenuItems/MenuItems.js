import React from "react";
import "./MenuItems.css";
import ItemCard from "../ItemCard/ItemCard.js";

function MenuItems({ menuData }) {
  return (
    <div className="MenuItems">
      {menuData.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuItems;
