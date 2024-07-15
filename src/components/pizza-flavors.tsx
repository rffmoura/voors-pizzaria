import * as Tabs from '@radix-ui/react-tabs';
import calabresa from '../assets/images/calabresa.png';
import marguerita from '../assets/images/marguerita.png';
import portuguesa from '../assets/images/portuguesa.png';
import { motion } from "framer-motion"
import useOrder from '../context/hooks/useOrder';
import clsx from 'clsx';

export function PizzaFlavors() {
  const { setFlavor, flavor } = useOrder();

  const handlePizzaSelection = (event: string) => {
    setFlavor(event)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <Tabs.Root onValueChange={handlePizzaSelection} className='w-full flex justify-center flex-col items-center'>
        <Tabs.List className="flex flex-col items-center" aria-label="Pizza sizes">
          <h1 data-testid="flavors-title" className='text-2xl font-bold'>Selecione o sabor da sua pizza</h1>
          <div className='flex md:gap-3 justify-center mt-6'>
            <div className='flex flex-col items-center w-32 md:w-52'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: flavor === "calabresa" ? 1.3 : 1 }}
              >
                <Tabs.Trigger data-testid="flavors-button" className='w-24 md:w-48 flex flex-col items-center cursor-pointer transition-all' value="calabresa">
                  <img src={calabresa} />
                </Tabs.Trigger>
              </motion.button>
              <p data-testid="flavors-calabresa" className={clsx('text-lg font-semibold text-tertiary', flavor === 'calabresa' && 'bg-primary text-white transition-all px-2 rounded-md')}>Calabresa</p>
            </div>
            <div className='flex flex-col items-center w-32 md:w-52'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: flavor === "marguerita" ? 1.3 : 1 }}
              >
                <Tabs.Trigger className='w-24 md:w-48 flex flex-col items-center cursor-pointer transition-all' value="marguerita">
                  <img src={marguerita} />
                </Tabs.Trigger>
              </motion.button>
              <p data-testid="flavors-marguerita" className={clsx('text-lg font-semibold text-tertiary', flavor === 'marguerita' && 'bg-primary text-white transition-all px-2 rounded-md')}>Marguerita</p>
            </div>
            <div className='flex flex-col items-center w-32 md:w-52'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: flavor === "portuguesa" ? 1.3 : 1 }}
              >
                <Tabs.Trigger className='w-24 md:w-48 flex flex-col items-center cursor-pointer transition-all data-[state=active]:' value="portuguesa">
                  <img src={portuguesa} />
                </Tabs.Trigger>
              </motion.button>
              <p data-testid="flavors-portuguesa" className={clsx('text-lg font-semibold text-tertiary', flavor === 'portuguesa' && 'bg-primary text-white transition-all px-2 rounded-md')}>Portuguesa</p>
            </div>
          </div>
        </Tabs.List>
      </Tabs.Root>
    </motion.div>
  )
};