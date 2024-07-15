export interface IOrder {
  size: string;
  flavor: string;
  value: number;
  timeToPrepare: number;
  adicionals: { [key: string]: boolean };
}

export interface OrderContextProps {
  size: string;
  flavor: string;
  value: number;
  timeToPrepare: number;
  adicionals: { [key: string]: boolean };
  orders: IOrder[],
  isNewOrder: boolean;
  setTimeToPrepare: (newValue: number) => void;
  setValue: (newValue: number) => void;
  setSize: (newValue: string) => void;
  setFlavor: (newValue: string) => void;
  setAdicionals: (newValue: { [key: string]: boolean }) => void;
  addToOrder: (order: IOrder) => void;
  setStartOver: (newValue: boolean) => void;
  calculateTotalValue: (orders: IOrder[]) => number;
  calculateTotalTimeToPrepare: (orders: IOrder[]) => number;
  setIsNewOrder: (newValue: boolean) => void;
}