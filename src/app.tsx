import { useContext, useState } from "react";
import PizzaSizes from "./components/pizza-sizes";
import { OrderContext } from "./context/OrderContext/order-context";
import { PizzaFlavors } from "./components/pizza-flavors";
import logo from './assets/images/logo.png';
import { PizzaAdicionals } from "./components/pizza-aditionals";
import { Checkout } from "./components/checkout";
import { WelcomePage } from "./components/welcome-page";

export function App() {
  const { value, size, flavor } = useContext(OrderContext);
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  return (
    <div>
      {showWelcomePage && (
        <WelcomePage setShowWelcomePage={setShowWelcomePage} />
      )}

      <div className="w-full bg-primary flex justify-between p-2 mb-5">
        <p className="flex items-center text-xl font-medium text-secondary">
          <img className="w-20" src={logo} />
        </p>
        <div className="flex flex-col items-center gap-2 justify-center">
          <p className="text-xl font-medium text-secondary">Total: R$ {value.toFixed(2)}</p>
        </div>
      </div>
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
            <Checkout />
          </>
        )
      }
    </div>
  )
}
