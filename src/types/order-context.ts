export interface OrderContextProps {
  size: string;
  flavor: string;
  value: number;
  timeToPrepare: number;
  adicionals: { [key: string]: boolean };
  setTimeToPrepare: (newValue: number) => void;
  setValue: (newValue: number) => void;
  setSize: (newValue: string) => void;
  setFlavor: (newValue: string) => void;
  setAdicionals: (newValue: { [key: string]: boolean }) => void;
}