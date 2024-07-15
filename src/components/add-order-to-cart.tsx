import { toast } from "sonner"
import useOrder from "../context/hooks/useOrder"
import { motion } from "framer-motion"
import { useState } from "react"

export function AddOrderToCart() {
  const [orderAdded, setOrderAdded] = useState(false)
  const { value, timeToPrepare, flavor, adicionals, size, addToOrder, isNewOrder, setIsNewOrder } = useOrder()

  const handleOrderIntoCart = () => {
    const currentOrder = {
      size,
      flavor,
      value,
      timeToPrepare,
      adicionals
    }
    setOrderAdded(true)
    addToOrder(currentOrder)
    setIsNewOrder(false)
    toast.success('Pedido adicionado ao carrinho')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1, y: 100 }}
      transition={{ duration: 0.4 }}
      className='flex flex-col items-center justify-center relative'
    >
      <button disabled={orderAdded} type="button" onClick={handleOrderIntoCart} className="inline-flex items-center justify-center rounded-md w-96 p-5 h-9 shadow-lg bg-primary text-secondary disabled:bg-primary/40">
        Adicionar pedido ao carrinho
      </button>


    </motion.div>
  )
}