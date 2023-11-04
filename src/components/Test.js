import React from 'react';
import Himesh from "../images/himesh.jpg";
import Dinesha from "../images/dinesha.jpg";

const ItemList = () => {
  const items = [
    { id: 1, name: 'Item 1', Image: Himesh},
    { id: 2, name: 'Item 2', Image: Dinesha},
    { id: 3, name: 'Item 3', Image: Himesh},
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}<img alt='' src={item.Image}></img></li>
      ))}
    </ul>
  );
};

export default ItemList;