import { useState } from "react";
import PizzaSizes from "./components/pizza-sizes";
import { PizzaFlavors } from "./components/pizza-flavors";
import { PizzaAdicionals } from "./components/pizza-aditionals";
import { Checkout } from "./components/checkout";
import { WelcomePage } from "./components/welcome-page";
import useOrder from "./context/hooks/useOrder";
import { AddOrderToCart } from "./components/add-order-to-cart";
import { Header } from "./components/header";

export function App() {
  const { size, flavor } = useOrder();
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <Header />
      {showWelcomePage && (
        <WelcomePage setShowWelcomePage={setShowWelcomePage} />
      )}

      <PizzaSizes />
      {
        size !== '' && (
          <PizzaFlavors />
        )
      }

      {
        flavor !== '' && (
          <>
            <PizzaAdicionals />
            <AddOrderToCart />
            <Checkout />
          </>
        )
      }
    </div>
  )
}
