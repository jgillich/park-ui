export const rootLayout = `import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './global.css'

const body = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={body.variable}>{props.children}</body>
    </html>
  )
}
`

export const copyButton = `import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { button, type ButtonVariantProps } from 'styled-system/recipes'

export type ButtonProps = ButtonVariantProps & ComponentProps<'button'>
export const Button = styled('button', button)
`

export const useButton = `import { Button } from "~/components/button"
 
const App = () => (
  <Button>Click me</Button>
)
`

export const pandaConfig = `import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', '@park-ui/presets'],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system'
})
`
