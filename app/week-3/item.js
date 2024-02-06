import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-100 p-4 mb-4 rounded-lg">
      <div className="font-bold text-sky-700">{name}</div>
      <div className="font-bold text-pink-500">Quantity: {quantity}</div>
      <div className="font-bold text-purple-400">Category: {category}</div>
    </li>
  );
};

export default Item;
