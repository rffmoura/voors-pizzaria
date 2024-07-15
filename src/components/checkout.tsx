import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import useOrder from '../context/hooks/useOrder';
import { Cross2Icon } from '@radix-ui/react-icons';
import { PaymentModal } from './payment-modal';
import clsx from 'clsx';

export function Checkout() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const { value, timeToPrepare, flavor, adicionals, size, addToOrder, setStartOver, orders, calculateTotalTimeToPrepare, setIsNewOrder } = useOrder()

  const totalTimeToPrepare = calculateTotalTimeToPrepare(orders)

  const drawerVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      y: "100vh",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const handleClickOutside = (event: any) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const getSelectedAdicionals = () => {
    const adicionalsMap: { [key: string]: string } = {
      bacon: "com extra bacon",
      border: "com borda recheada",
      noOnion: "Sem cebola",
    };

    const selected = Object.keys(adicionals).filter(key => adicionals[key]).map(key => adicionalsMap[key]);

    return selected;
  };

  const selectedAdicionals = getSelectedAdicionals();

  const getPizzaSizeAbbreviation = (size: string): 'P' | 'M' | 'G' => {
    const sizeAbbreviationMap: { [key: string]: 'P' | 'M' | 'G' } = {
      small: 'P',
      medium: 'M',
      large: 'G',
    };

    return sizeAbbreviationMap[size];
  };

  const handleContinueShopping = () => {
    setIsOpen(!isOpen)
    setIsNewOrder(true)
    setStartOver(true)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1, y: 100 }}
        transition={{ duration: 0.4 }}
        className='flex flex-col items-center mt-4 justify-center relative'
      >
        <button disabled={orders.length === 0} onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-md w-96 p-5 h-9 shadow-lg bg-primary text-secondary disabled:bg-primary/40">
          Ir para o carrinho
        </button>
        <div className="absolute top-[-10px] right-[-10px] flex items-center justify-center bg-tertiary text-secondary rounded-full h-6 w-6 text-xs">
          {orders.length}
        </div>
      </motion.div>
      {isOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={handleClickOutside}></div>}
      <motion.div
        ref={drawerRef}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={drawerVariants}
        className="fixed bottom-0 left-0 right-0 bg-secondary shadow-lg flex flex-col items-center z-50 p-12"
        style={{ height: "93vh" }}
      >

        <h1 className="text-2xl font-bold">Carrinho</h1>
        <div className="p-4 flex flex-col items-center mt-10">
          <div className='m-2'>
            <h1 className="text-xl font-bold">Aqui está um resumo do seu pedido:</h1>
            <div className='flex justify-between'>
              <p>Valor total: </p>
              <p>R$ {value.toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
              <p>Tempo estimado de preparo:</p>
              <p>{Object.values(orders).length > 0 ? totalTimeToPrepare : timeToPrepare} minutos</p>
            </div>

            <div className='flex flex-col mt-6'>
              <h1 className='text-xl font-bold'>Detalhes do pedido:</h1>
              {
                orders.length > 0 ? (
                  <>
                    {
                      orders.map(order => {
                        return (
                          <>
                            {Object.keys(order.adicionals).length > 0 ? (
                              <div className='flex justify-between'>
                                <div>
                                  <p>Pizza de {order.flavor}, <span className='font-semibold'>{getPizzaSizeAbbreviation(order.size)}</span></p>
                                  <p className='max-w-[236px]'> - Personalização: {selectedAdicionals.join(', ')}</p>
                                </div>
                                <p className='flex items-center'>R$ {order.value.toFixed(2)}</p>
                              </div>
                            ) : (
                              <div className='flex justify-between'>
                                <p>Pizza de {order.flavor}, <span className='font-semibold'>{getPizzaSizeAbbreviation(order.size)}</span></p>
                                <p>R$ {order.value.toFixed(2)}</p>
                              </div>

                            )}
                          </>
                        )
                      })
                    }
                  </>
                ) : (
                  <>
                    <p>Pizza de {flavor}, <span className='font-semibold'>{getPizzaSizeAbbreviation(size)}</span></p>
                    {
                      selectedAdicionals.length > 0 && (
                        <p>Personalização: {selectedAdicionals.join(', ')}</p>
                      )
                    }
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div className='flex flex-col'>

          <button
            onClick={() => handleContinueShopping()}
            className="inline-flex items-center justify-center rounded-md w-96 p-5 h-9 shadow-lg bg-primary text-secondary md:mt-10"
          >
            Continuar comprando
          </button>

          <PaymentModal setIsOpen={setIsOpen} />

        </div>

        <div onClick={() => setIsOpen(!isOpen)} className="absolute top-0 right-0 m-6 cursor-pointer">
          <Cross2Icon className='size-5' />
        </div>
      </motion.div>

    </>
  );
};