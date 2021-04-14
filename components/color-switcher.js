import { Box, Flex } from 'theme-ui'
import Icon from '@hackclub/icons'

const ColorSwitcher = props => {
  return (
    <Flex
      sx={{
        position: 'absolute',
        top: [2, 3],
        right: [2, 3],
        display: ['none!important', 'flex']
      }}
    >
      <Box
        as="a"
        href="https://twitter.com/sam_poder"
        sx={{
          color: 'primary',
          cursor: 'pointer',
          borderRadius: 'circle',
          transition: 'transform .125s ease-in-out',
          ':hover,:focus': {
            transform: 'scale(1.05)',
          },
        }}
        {...props}
      >
        <Icon glyph="twitter" size={42} />
      </Box>
      <Box
        as="a"
        href="https://github.com/sampoder"
        sx={{
          color: 'primary',
          cursor: 'pointer',
          borderRadius: 'circle',
          transition: 'transform .125s ease-in-out',
          ':hover,:focus': {
            transform: 'scale(1.05)',
          },
          marginLeft: '8px',
        }}
        {...props}
      >
        <Icon glyph="github" size={42} />
      </Box>
    </Flex>
  )
}

export default ColorSwitcher
