import { useContext } from 'react';
import { OrderContext } from '../OrderContext/order-context';
import { OrderContextProps } from '../../types/order-context';

export default function useOrder(): OrderContextProps {
  const context = useContext(OrderContext);

  if (!context) throw new Error('useAuth must be used within a Provider');

  return context;
}