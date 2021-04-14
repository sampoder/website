import { Heading, Container, Box, Text } from 'theme-ui'
import Scrapbook from '../components/scrapbook'
import Tooltip from 'react-tooltip-lite'

const App = props => (
  <Box as="main" pb={4} {...props} className="background">
    <Box
      sx={{
        background: [
          'linear-gradient(90deg, rgba(96,69,236,1) 0%, rgba(116,89,249,1) 100%, rgba(134,112,247,0.038252801120448154) 100%)',
          'linear-gradient(90deg, rgba(96,69,236,1) 0%, rgba(116,89,249,1) 51%, rgba(134,112,247,0.038252801120448154) 100%), url("/design-bc5e9dda-e9a5-4ff3-9536-f78df446cecc.png"), black',
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
    <Container py={4}>
      <Scrapbook
        posts={props.initialData.posts}
        hideReactions={true}
        profile
      />
    </Container>
    <style>
      {`
      :root {
        color-scheme: dark dark;
        --fonts-scrapbook-body: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, sans-serif;
        --fonts-scrapbook-display: system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, sans-serif;
        --fonts-scrapbook-mono: monospace;
  
        --colors-scrapbook-darker: #151613;
        --colors-scrapbook-dark: #20201d;
        --colors-scrapbook-darkless: #2b2b27;
        --colors-scrapbook-black: #151613;
        --colors-scrapbook-slate: #3b413a;
        --colors-scrapbook-muted: #777f76;
        --colors-scrapbook-smoke: #d5d8d5;
        --colors-scrapbook-snow: #f5f5f4;
        --colors-scrapbook-white: #ffffff;
        --colors-scrapbook-pink: #ff62dc;
        --colors-scrapbook-orange: #ff5b00;
        --colors-scrapbook-yellow: #f7ff00;
        --colors-scrapbook-green: #28ff00;
        --colors-scrapbook-cyan: #00ffff;
        --colors-scrapbook-blue: #00a4ff;
        --colors-scrapbook-purple: #c210ff;
        --colors-scrapbook-red: #ec3750;
  
        --colors-scrapbook-text: var(--colors-scrapbook-black);
        --colors-scrapbook-background: var(--colors-scrapbook-snow);
        --colors-scrapbook-sheet: var(--colors-scrapbook-white);
        --colors-scrapbook-elevated: var(--colors-scrapbook-white);
        --colors-scrapbook-sunken: var(--colors-scrapbook-smoke);
        --colors-scrapbook-progress: var(--colors-scrapbook-red);
      }
  
      @media (prefers-color-scheme: dark) {
        :root {
          --colors-scrapbook-text: var(--colors-scrapbook-white);
          --colors-scrapbook-background: var(--colors-scrapbook-darker);
          --colors-scrapbook-sheet: var(--colors-scrapbook-darkless);
          --colors-scrapbook-elevated: var(--colors-scrapbook-darkless);
          --colors-scrapbook-sunken: var(--colors-scrapbook-darker);
        }
      }
      .background{
        background: var(--colors-scrapbook-background);
      }
      `}
    </style>
  </Box>
)

export const getStaticProps = async ({ params }) => {
  const initialData = await fetch(
    `https://scrapbook.hackclub.com/api/users/sampoder`,
  ).then(r => r.json())
  return { props: { initialData }, revalidate: 1 }
}

export default App
