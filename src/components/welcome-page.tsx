import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/images/logo-colored.png'

export function WelcomePage({ setShowWelcomePage }: { setShowWelcomePage: (value: boolean) => void }) {
  const [isExiting, setIsExiting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    },
    exit: {
      y: '-100vw',
      transition: { ease: 'easeInOut' }
    }
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const startOrder = () => {
    setIsExiting(true);
    setTimeout(() => setShowWelcomePage(false), 500);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isExiting ? "exit" : "visible"}
      exit="exit"
      className="flex flex-col items-center justify-center h-screen gap-7"
    >
      <motion.h1 data-testid="welcome-h1" className='text-4xl md:text-6xl font-bold' variants={childVariants}>Bem-vindo(a)!</motion.h1>
      <motion.p data-testid="welcome-p" className='text-2xl md:text-3xl font-semibold text-tertiary' variants={childVariants}>Clique aqui para iniciar seu pedido</motion.p>
      <motion.button
        data-testid="welcome-button"
        variants={childVariants}
        onClick={startOrder}
        className="mt-4 px-6 py-2 bg-primary text-secondary rounded-md text-lg font-semibold hover:bg-primary/80 transition-all"
      >
        Iniciar pedido
      </motion.button>
      <div className='mt-10'>
        <motion.img
          variants={childVariants}
          src={logo}
          alt="Logo da pizzaria"
          className="w-40 md:w-[400px]"
        />

      </div>

    </motion.div>
  );
}