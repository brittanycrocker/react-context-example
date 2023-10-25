import { useContext } from "react";
import { MenuOrderingContext } from "./MenuOrderingContext";

const Cart = () => {
  const { itemsOrdered, setItemsOrdered } = useContext(MenuOrderingContext);

  if (!itemsOrdered) {
    return <div>Cart is empty</div>;
  }

  const updateCart = (item, quantity) => {
    setItemsOrdered((prevState) => {
      return { ...prevState, [item]: quantity };
    });
  };

  return (
    <div>
      Cart
      <ul>
        {Object.keys(itemsOrdered)?.map((item, i) => {
          const quantity = itemsOrdered[item];

          return (
            <li key={i}>
              <div>
                {item} {quantity}{" "}
                <button
                  onClick={() => updateCart(item, parseInt(quantity) + 1)}
                >
                  Add more
                </button>
                <button
                  onClick={() => updateCart(item, parseInt(quantity) - 1)}
                >
                  Remove one
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
