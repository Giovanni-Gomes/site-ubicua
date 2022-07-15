export const theme = {
  styles: {
    global: (props: any) => ({
      'html, body': {
        fontSize: 'sm',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        lineHeight: 'tall',
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'red',
      },
    }),
  },
}
