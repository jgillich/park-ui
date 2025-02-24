import { Splitter, SplitterPanel, SplitterResizeTrigger, type SplitterProps } from './snippet'

export const Demo = (props: SplitterProps) => {
  return (
    <>
      <Splitter
        size={[
          { id: 'a', size: 50 },
          { id: 'b', size: 50 },
        ]}
        {...props}
      >
        <SplitterPanel id="a">A</SplitterPanel>
        <SplitterResizeTrigger id="a:b" />
        <SplitterPanel id="b">B</SplitterPanel>
      </Splitter>
    </>
  )
}
