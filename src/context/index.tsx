import OrderValueProvider from "./OrderContext/order-context";
import { ReactNode } from "react";

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <OrderValueProvider>
      {children}
    </OrderValueProvider>
  )
}