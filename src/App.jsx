import React from "react";
import Menu from "./Menu";
import { MenuOrderingContext } from "./MenuOrderingContext";
import Cart from "./Cart";
import "./App.css";

export default function App() {
  const [itemsOrdered, setItemsOrdered] = React.useState();

  return (
    <MenuOrderingContext.Provider value={{ itemsOrdered, setItemsOrdered }}>
      <div className="layout">
        <header>Order</header>
        <nav>
          <Cart />
        </nav>
        <main>
          <Menu />
        </main>
      </div>
    </MenuOrderingContext.Provider>
  );
}
