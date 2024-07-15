import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { motion } from "framer-motion"
import bacon from '../assets/images/bacon.png'
import noOnion from '../assets/images/no-onion.png'
import border from '../assets/images/border.png'
import * as Switch from '@radix-ui/react-switch';
import { toast } from 'sonner';
import useOrder from '../context/hooks/useOrder';

export function PizzaAdicionals() {
  const { setAdicionals } = useOrder();

  const [switchStates, setSwitchStates] = useState<{
    [key: string]: boolean;
  }>({
    bacon: false,
    noOnion: false,
    border: false,
  });

  const isAnySwitchActive = Object.values(switchStates).some(value => value);

  const handleSwitchChange = (switchName: string) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [switchName]: !prevStates[switchName],
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    toast.success('Pedido atualizado com sucesso!');
    setAdicionals(switchStates);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1, y: 80 }}
      transition={{ duration: 0.3 }}
      className='flex flex-col items-center mt-6 justify-center'
    >
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button data-testid="adicionals-button" className="inline-flex items-center justify-center rounded-md w-96 p-5 h-9 shadow-lg bg-primary text-secondary">
            Personalizar pizza
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='inset-0 fixed bg-black/50' />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}>
            <Dialog.Content className='fixed overflow-hidden inset-0  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-[80%] md:h-[70vh] h-[60vh] bg-secondary rounded-md flex flex-col justify-center outline-none'>
              <form onSubmit={handleSubmit}>
                <div className='md:px-7 px-4 flex justify-between items-center'>
                  <div className='flex items-center gap-5'>
                    <img src={bacon} className='w-[120px] md:w-[200px]' />
                    <div>
                      <label htmlFor='bacon' data-testid="adicionals-extra-bacon" className='text-center text-xl font-bold'>Extra bacon</label>
                      <p className='text-tertiary'>+ R$ 3,00</p>
                    </div>
                  </div>
                  <Switch.Root id="bacon" onCheckedChange={() => handleSwitchChange('bacon')} checked={switchStates.bacon} className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 bg-primary/50 data-[state=checked]:bg-primary">
                    <Switch.Thumb className={`inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${switchStates.bacon ? 'translate-x-5' : 'translate-x-0'}`} />
                  </Switch.Root>
                </div>

                <div className='md:px-7 px-4 flex justify-between items-center'>
                  <div className='flex items-center gap-5'>
                    <img src={noOnion} className='w-[120px] md:w-[200px]' />
                    <label htmlFor='noOnion' data-testid="adicionals-no-onion" className='text-center text-xl font-bold'>Sem cebola</label>
                  </div>
                  <Switch.Root id="noOnion" onCheckedChange={() => handleSwitchChange('noOnion')} checked={switchStates.noOnion} className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 bg-primary/50 data-[state=checked]:bg-primary">
                    <Switch.Thumb className={`inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${switchStates.noOnion ? 'translate-x-5' : 'translate-x-0'}`} />
                  </Switch.Root>
                </div>

                <div className='md:px-7 px-4 flex justify-between items-center'>
                  <div className='flex items-center gap-5'>
                    <img src={border} className='w-[120px] md:w-[200px]' />
                    <div>
                      <label htmlFor='border' data-testid="adicionals-border" className='text-center text-xl font-bold'>Borda recheada</label>
                      <p className='text-tertiary'>+ R$ 5,00</p>
                    </div>
                  </div>
                  <Switch.Root id="border" onCheckedChange={() => handleSwitchChange('border')} checked={switchStates.border} className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 bg-primary/50 data-[state=checked]:bg-primary">
                    <Switch.Thumb className={`inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${switchStates.border ? 'translate-x-5' : 'translate-x-0'}`} />
                  </Switch.Root>
                </div>

                <Dialog.Close className='absolute right-0 top-0 p-1.5 text-slate-400 '>
                  <Cross2Icon className='size-5' />
                </Dialog.Close>
                <div className='flex w-full justify-center mt-10 md:mt-6'>
                  <button type='submit' disabled={!isAnySwitchActive} className="inline-flex items-center justify-center rounded-md px-4 leading-none h-9 shadow-lg bg-primary text-secondary disabled:bg-primary/40 transition-all">
                    Atualizar pedido
                  </button>
                </div>
              </form>
            </Dialog.Content>

          </motion.div>
        </Dialog.Portal>
      </Dialog.Root>
    </motion.div>
  )
}