import { useCopyToClipboard } from '@uidotdev/usehooks'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './ui'

type Props = { content: string }

export const CopyToClipboardButton = (props: Props) => {
  const { content } = props
  const [_, copyToClipboard] = useCopyToClipboard()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (visible) return
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [visible])

  const handleClick = () => {
    copyToClipboard(content)
    setVisible(false)
  }

  return (
    <Button
      variant="ghost"
      size="xs"
      color="gray.dark.11"
      bg="gray.dark.3"
      borderColor="gray.dark.5"
      borderWidth="1px"
      _hover={{ bg: 'gray.dark.4' }}
      px="0"
      {...props}
      aria-label="Copy code to clipboard"
      onClick={handleClick}
    >
      {visible ? <CopyIcon /> : <CheckIcon />}
    </Button>
  )
}
