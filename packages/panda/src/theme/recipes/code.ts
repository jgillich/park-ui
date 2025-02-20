import { defineRecipe } from '@pandacss/dev'

export const code = defineRecipe({
  className: 'code',
  base: {
    alignItems: 'center',
    bg: 'bg.subtle',
    borderRadius: 'l2',
    color: 'fg.muted',
    display: 'inline-flex',
    fontFamily: 'var(--fonts-code)',
    fontWeight: 'medium',
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        borderWidth: '1px',
      },
      ghost: {},
    },
    size: {
      sm: {
        height: '5',
        px: '0.5',
        textStyle: 'xs',
      },
      md: {
        height: '6',
        px: '1',
        textStyle: 'sm',
      },
      lg: {
        height: '7',
        px: '1.5',
        textStyle: 'md',
      },
    },
  },
})
