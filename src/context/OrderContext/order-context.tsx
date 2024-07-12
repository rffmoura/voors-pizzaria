import React, { createContext, useEffect, useState } from 'react';
import { OrderContextProps } from '../../types/order-context';

const initialValue = {
  size: '',
  flavor: '',
  value: 0,
  timeToPrepare: 0,
  adicionals: {},
  setSize: () => { },
  setFlavor: () => { },
  setValue: () => { },
  setTimeToPrepare: () => { },
  setAdicionals: () => { },
}

export const OrderContext = createContext<OrderContextProps>(initialValue);

const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [size, setSize] = useState<string>('');
  const [flavor, setFlavor] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [timeToPrepare, setTimeToPrepare] = useState<number>(0);
  const [adicionals, setAdicionals] = useState<{ [key: string]: boolean }>({});

  // useEffect(() => {
  //   let newValue = 0;
  //   let newTimeToPrepare = 0;

  //   switch (size) {
  //     case 'small':
  //       newValue = 20.20;
  //       newTimeToPrepare = 15;
  //       break;
  //     case 'medium':
  //       newValue = 30.30;
  //       newTimeToPrepare = 20;
  //       break;
  //     case 'large':
  //       newValue = 40.00;
  //       newTimeToPrepare = 25;
  //       break;
  //     default:
  //       newValue = 0;
  //       newTimeToPrepare = 0;
  //   }

  //   if (flavor === 'portuguesa') {
  //     newTimeToPrepare += 5;
  //   }

  //   setValue(newValue);
  //   setTimeToPrepare(newTimeToPrepare);
  // }, [size, flavor]);

  useEffect(() => {
    let newValue = 0;
    let newTimeToPrepare = 0;

    switch (size) {
      case 'small':
        newValue = 20.20;
        newTimeToPrepare = 15;
        break;
      case 'medium':
        newValue = 30.30;
        newTimeToPrepare = 20;
        break;
      case 'large':
        newValue = 40.00;
        newTimeToPrepare = 25;
        break;
      default:
        newValue = 0;
        newTimeToPrepare = 0;
    }

    if (flavor === 'portuguesa') {
      newTimeToPrepare += 5;
    }

    if (adicionals['bacon']) {
      newValue += 3;
    }

    if (adicionals['border']) {
      newValue += 5;
      newTimeToPrepare += 5;
    }

    setValue(newValue);
    setTimeToPrepare(newTimeToPrepare);
  }, [size, flavor, adicionals]);

  const returnValue = {
    size,
    flavor,
    value,
    timeToPrepare,
    adicionals,
    setSize,
    setFlavor,
    setValue,
    setTimeToPrepare,
    setAdicionals
  }

  return (
    <OrderContext.Provider value={returnValue}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;