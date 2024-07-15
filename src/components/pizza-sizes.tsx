import * as Tabs from '@radix-ui/react-tabs';
import useOrder from '../context/hooks/useOrder';

export default function PizzaSizes() {
  const { setSize, size } = useOrder();

  const handlePizzaSelection = (event: string) => {
    setSize(event)
  }

  return (
    <Tabs.Root value={size} onValueChange={handlePizzaSelection} className='w-full flex justify-center flex-col items-center'>
      <Tabs.List aria-label="Pizza sizes">
        <h1 data-testid="sizes-title" className="text-2xl font-bold">Selecione o tamanho da sua pizza</h1>
        <div className='flex gap-3 justify-center mt-6'>
          <Tabs.Trigger data-testid="sizes-small" className='w-12 h-12 rounded-full border border-primary flex items-center justify-center cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-secondary transition-all' value="small">P</Tabs.Trigger>
          <Tabs.Trigger data-testid="sizes-medium" className='w-12 h-12 rounded-full border border-primary flex items-center justify-center cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-secondary transition-all' value="medium">M</Tabs.Trigger>
          <Tabs.Trigger data-testid="sizes-large" className='w-12 h-12 rounded-full border border-primary flex items-center justify-center cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-secondary transition-all' value="large">G</Tabs.Trigger>
        </div>
      </Tabs.List>
      <div className='mt-4 transition-all'>
        <Tabs.Content data-testid="sizes-slices-small" value="small" className='text-center text-lg font-semibold text-tertiary'>6 fatias</Tabs.Content>
        <Tabs.Content data-testid="sizes-slices-medium" value="medium" className='text-center text-lg font-semibold text-tertiary'>8 fatias</Tabs.Content>
        <Tabs.Content data-testid="sizes-slices-large" value="large" className='text-center text-lg font-semibold text-tertiary'>12 fatias</Tabs.Content>
      </div>
    </Tabs.Root>
  )
}