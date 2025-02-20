import { ChevronDownIcon } from 'lucide-react'
import { Icon } from '../icon/snippet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  type AccordionProps,
} from './snippet'

export const Demo = (props: AccordionProps) => {
  const items = ['React', 'Solid', 'Vue']
  return (
    <Accordion defaultValue={['React']} multiple {...props}>
      {items.map((item, id) => (
        <AccordionItem key={id} value={item}>
          {({ isOpen }) => (
            <>
              <AccordionTrigger>
                {item}
                <AccordionIcon isOpen={isOpen} />
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  Pudding donut gummies chupa chups oat cake marzipan biscuit tart. Dessert macaroon
                  ice cream bonbon jelly. Jelly topping tiramisu halvah lollipop.
                </div>
              </AccordionContent>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const AccordionIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
  }
  return (
    <Icon style={iconStyles}>
      <ChevronDownIcon />
    </Icon>
  )
}
