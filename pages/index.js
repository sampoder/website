import { Heading, Container, Box, Text } from 'theme-ui'

export default props => (
  <Box as="main" pb={4} {...props}>
    <Box
      sx={{
        background: [
          'linear-gradient(90deg, rgba(96,69,236,1) 0%, rgba(116,89,249,1) 100%, rgba(134,112,247,0.038252801120448154) 100%)',
          'linear-gradient(90deg, rgba(96,69,236,1) 0%, rgba(116,89,249,1) 51%, rgba(134,112,247,0.038252801120448154) 100%), url("/design-bc5e9dda-e9a5-4ff3-9536-f78df446cecc.png")',
        ],
        backgroundSize: '',
        backgroundPosition: ['top right', 'top right'],
        backgroundRepeat: ['no-repeat!important', 'no-repeat!important'],
      }}
    >
      <Container py={5}>
        <Box
          as="img"
          src="https://github.com/sampoder.png"
          sx={{
            width: '40%',
            borderRadius: '8px',
            marginBottom: '18px',
            display: ['block', 'none'],
          }}
        />
        <Heading sx={{ marginLeft: ['0px', '16px'], maxWidth: '90%' }}>
          My name is Sam and
        </Heading>
        <Box>
          <Heading
            as="h1"
            sx={{
              fontSize: ['3em', '8em'],
              textTransform: 'uppercase',
              fontWeight: '800',
            }}
          >
            I like to
          </Heading>
          <Heading
            as="h1"
            sx={{ fontSize: ['3.2em', '8em'], textTransform: 'uppercase' }}
          >
            <Text
              as="span"
              sx={{
                WebkitTextStroke: 'currentColor',
                WebkitTextStrokeWidth: ['2px', '3px'],
                WebkitTextFillColor: 'transparent',
              }}
            >
              make
            </Text>{' '}
            stuff
          </Heading>
        </Box>
        <Heading
          sx={{
            marginLeft: ['0px', '16px'],
            fontWeight: '600',
            maxWidth: '76%',
          }}
        >
          Here's what I've been up to recently{' '}
          <Text
            sx={{
              fontSize: '0.6em',
              verticalAlign: 'middle',
              display: 'inline-block',
              marginBottom: '4px',
            }}
          >
            ▼
          </Text>
        </Heading>
      </Container>
    </Box>
  </Box>
)
