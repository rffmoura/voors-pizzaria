import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import useOrder from '../context/hooks/useOrder';
import creditCard from '../assets/images/credit-card.png'
import { Cross2Icon } from '@radix-ui/react-icons';

export function Checkout() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const { value, timeToPrepare, flavor, adicionals } = useOrder()

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

  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1, y: 100 }}
        transition={{ duration: 0.4 }}
        className='flex flex-col items-center mt-4 justify-center relative'
      >
        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-md w-96 p-5 h-9 shadow-lg bg-primary text-secondary">
          Finalizar pedido
        </button>

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

        <h1 className="text-2xl font-bold">Checkout</h1>
        <div className="p-4 flex flex-col items-center mt-10">
          <div className='m-2'>
            <h1 className="text-xl font-bold">Aqui está um resumo do seu pedido:</h1>
            <div className='flex justify-between'>
              <p>Valor total: </p>
              <p>R$ {value.toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
              <p>Tempo estimado de preparo:</p>
              <p>{timeToPrepare} minutos</p>
            </div>

            <div className='flex flex-col mt-6'>
              <h1 className='text-xl font-bold'>Detalhes do pedido:</h1>
              <p>Pizza de {flavor}</p>
              {
                selectedAdicionals.length > 0 && (
                  <p>Personalização: {selectedAdicionals.join(', ')}</p>
                )
              }
            </div>
          </div>

          <div className='w-full flex flex-col m-5 items-center mt-10'>
            <h2 className="text-xl font-bold">Formas de pagamento:</h2>
            <div className='flex'>
              <div className='flex flex-col items-center w-32 md:w-52'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                >
                  <div className='w-24  flex flex-col items-center cursor-pointer transition-all' >
                    <img src={creditCard} />
                  </div>
                </motion.button>
                <p>Cartão de crédito</p>
              </div>

              <div className='flex flex-col items-center w-32 md:w-52'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                >
                  <div className='w-24  flex flex-col items-center cursor-pointer transition-all' >
                    <img src={creditCard} />
                  </div>
                </motion.button>
                <p>Pix</p>
              </div>

              <div className='flex flex-col items-center w-32 md:w-52'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                >
                  <div className='w-24  flex flex-col items-center cursor-pointer transition-all' >
                    <img src={creditCard} />
                  </div>
                </motion.button>
                <p>Carteira digital</p>
              </div>

            </div>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md w-96 p-5 h-9 shadow-lg bg-primary text-secondary md:mt-10"
        >
          Finalizar pedido
        </button>

        <div onClick={() => setIsOpen(!isOpen)} className="absolute top-0 right-0 m-6 cursor-pointer">
          <Cross2Icon className='size-5' />
        </div>
      </motion.div>


    </>
  );
};