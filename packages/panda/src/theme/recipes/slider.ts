import { sliderAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const slider = defineSlotRecipe({
  className: 'slider',
  slots: sliderAnatomy.keys(),
  base: {
    root: {
      width: 'full',
    },
    control: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    track: {
      backgroundColor: 'bg.emphasized',
      borderRadius: 'l2',
      flex: '1',
    },
    range: {
      background: 'accent.default',
      borderRadius: 'l2',
    },
    thumb: {
      background: 'bg.default',
      borderColor: 'border.accent',
      borderRadius: 'full',
      borderWidth: '2px',
      boxShadow: 'sm',
      outline: 'none',
    },
    label: {
      color: 'fg.default',
      fontWeight: 'medium',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: {
        control: {
          py: '2',
        },
        range: {
          height: '2',
        },
        track: {
          height: '2',
        },
        thumb: {
          height: '6',
          width: '6',
        },
        marker: {
          mt: '2',
          textStyle: 'sm',
        },
        label: {
          textStyle: 'sm',
        },
      },
    },
  },
})
