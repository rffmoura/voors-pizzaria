import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import creditCard from '../assets/images/credit-card.png'
import pix from '../assets/images/pix.png'
import motoboy from '../assets/images/motoboy.png'
import logo from '../assets/images/logo-colored.png'
import { useState } from 'react';


export function PaymentModal({ setIsOpen }: { setIsOpen: (value: boolean) => void }) {
  const [farewell, setFarewell] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className='flex flex-col items-center justify-center'
    >
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button onClick={(prevState) => setIsOpen(!prevState)} data-testid="adicionals-button" className="inline-flex items-center justify-center rounded-md w-96 p-5 h-9 shadow-lg bg-primary text-secondary mt-10">
            Finalizar pedido
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='inset-0 fixed bg-black/50' />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}>
            <Dialog.Content className='flex items-center fixed overflow-hidden inset-0  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-[80%] md:h-[70vh] h-[60vh] bg-secondary rounded-md flex-col justify-center outline-none'>
              <div className='w-full flex flex-col m-5 items-center mt-10'>
                {
                  farewell ?
                    <div className='flex flex-col items-center'>
                      <h1 className='text-2xl font-bold'>Obrigado por pedir na Voors Pizzaria!</h1>
                      <p className='text-lg mt-5'>Seu pedido está sendo preparado e chegará em breve!</p>

                      <img className='mt-6' width={320} src={logo} />
                    </div>
                    :
                    <>
                      <h2 className="text-xl font-bold mb-10">Formas de pagamento:</h2>
                      <div className='flex'>
                        <div className='flex flex-col items-center w-32 md:h-44 md:w-52'>
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

                        <div className='flex flex-col items-center w-32 md:h-44 md:w-52'>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            onClick={() => setFarewell(true)}
                          >
                            <div className='w-24  flex flex-col items-center cursor-pointer transition-all' >
                              <img src={pix} />
                            </div>
                          </motion.button>
                          <p>Pix</p>
                        </div>

                        <div className='flex flex-col items-center w-32 md:h-44 md:w-52'>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            onClick={() => setFarewell(true)}
                          >
                            <div className='w-24  flex flex-col items-center cursor-pointer transition-all' >
                              <img src={motoboy} />
                            </div>
                          </motion.button>
                          <p>Pagar na entrega</p>
                        </div>

                      </div>

                    </>
                }
              </div>

              <Dialog.Close className='absolute right-0 top-0 p-1.5 text-slate-400 '>
                <Cross2Icon className='size-5' />
              </Dialog.Close>
            </Dialog.Content>

          </motion.div>
        </Dialog.Portal>
      </Dialog.Root>
    </motion.div>
  )
}