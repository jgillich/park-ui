import { Portal } from '@ark-ui/react'
import { Settings2Icon, Undo2Icon, XIcon } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { HStack, Stack } from 'styled-system/jsx'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { Button } from '../ui/button'
import { Drawer } from '../ui/drawer'
import { AccentColorPicker } from './accent-color-picker'
import { BorderRadiusSlider } from './border-radius-slider'
import { FontFamilySelect } from './font-family-select'
import { GrayColorPicker } from './gray-color-picker'
import { ThemeConfigDialog } from './theme-config-dialog'

interface Props {
  isHero?: boolean
  placement?: 'left' | 'right'
  panda?: JSX.Element
  tailwind?: JSX.Element
}

export const ThemeDrawer = (props: PropsWithChildren<Props>) => {
  const { placement = 'left', isHero, panda, tailwind } = props
  const { reset } = useThemeGenerator()
  return (
    <Drawer.Root placement={placement}>
      <Drawer.Trigger asChild>
        <Button variant="outline" size={isHero ? { base: 'xl', md: '2xl' } : 'md'}>
          <Settings2Icon />
          Make it yours
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Container>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Make it yours</Drawer.Title>
              <Drawer.Description>
                Customize the theme and copy the configuration to your project.
              </Drawer.Description>
              <Drawer.CloseTrigger asChild>
                <Button
                  aria-label="Close Sidebar"
                  variant="ghost"
                  position="absolute"
                  top="3"
                  right="4"
                  px="0"
                >
                  <XIcon />
                </Button>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <Stack flex="1" gap="5">
                <FontFamilySelect />
                <GrayColorPicker />
                <AccentColorPicker />
                <BorderRadiusSlider />
              </Stack>
            </Drawer.Body>
            <Drawer.Footer>
              <HStack gap="3">
                <Button variant="outline" onClick={reset}>
                  <Undo2Icon />
                  Reset
                </Button>
                <ThemeConfigDialog panda={panda} tailwind={tailwind} />
              </HStack>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Container>
      </Portal>
    </Drawer.Root>
  )
}
