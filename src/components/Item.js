import React, {useState} from "react";

function Item({ name, category }) {

const [didAdd, setCart] = useState(false)

  function handleAddButton () {
    setCart((didAdd) => !didAdd)
  }

  return (
    <li className={didAdd ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= "add" onClick={handleAddButton}>{didAdd ? "Remove From Cart" : "Add to Card"}</button>
    </li>
  );
}

export default Item;
