import React, { useContext, useEffect, useState } from "react";
import { MenuOrderingContext } from "./MenuOrderingContext";
import "./App.css";

const Menu = () => {
  const { setItemsOrdered, itemsOrdered } = useContext(MenuOrderingContext);
  const [internalItems, setInternalItems] = useState(itemsOrdered);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInternalItems((prevState) => {
      return { ...prevState, [name]: parseInt(value) };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setItemsOrdered(internalItems);
  };

  useEffect(() => {
    setInternalItems(itemsOrdered);
  }, [itemsOrdered]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="sushi">Sushi</label>
        <input
          type="number"
          name="sushi"
          value={internalItems?.["sushi"] ?? 0}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="burgers">Burgers</label>
        <input type="number" name="burgers" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Menu;
