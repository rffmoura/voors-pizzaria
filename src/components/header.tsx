import useOrder from '../context/hooks/useOrder';
import logo from '../assets/images/logo.png';

export function Header() {
  const { value, orders, calculateTotalValue, isNewOrder } = useOrder();

  const totalValue = calculateTotalValue(orders);

  return (
    <div className="w-full bg-primary flex justify-between p-2 mb-5">
      <p className="flex items-center text-xl font-medium text-secondary">
        <img className="w-24" src={logo} />
      </p>
      <div className="flex flex-col items-center gap-2 justify-center">
        <p className="text-xl font-medium text-secondary">Total: R$ {totalValue === 0 ? value.toFixed(2) : totalValue.toFixed(2)}</p>
        {isNewOrder && (
          <p className="text-sm font-medium text-secondary">Pedido atual: R$ {value.toFixed(2)}</p>
        )}
      </div>
    </div>
  )
}