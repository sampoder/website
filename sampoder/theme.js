export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Bonkers", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#fff',
    background: '#000',
    primary: '#33e',
  },
  layout: {
    container: {
      maxWidth: ['layout', null, 'layoutPlus'],
      width: '100%',
      mx: 'auto',
      px: 3
    },
    wide: {
      variant: 'layout.container',
      maxWidth: ['layout', null, 'wide']
    },
    copy: {
      variant: 'layout.container',
      maxWidth: ['copy', null, 'copyPlus']
    },
    narrow: {
      variant: 'layout.container',
      maxWidth: ['narrow', null, 'narrowPlus']
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: '#68a17f'
    },
    neonSecondary: {
      fontSize: '3em',
      color: '#37deed',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      textShadow: '0 0 95px #37deed',
      margin: '30px',
      padding: '30px',
      paddingBottom: '05px',
      marginBottom: '05px',
      marginLeft: '0px',
      float: 'left',
      border: '5px #37deed solid',
      borderRadius: '9px'
    },
    neonSingapore: {
      fontSize: '3em',
      backgroundImage: 'linear-gradient(#EF3340, #EF3340)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: '30px',
      padding: '30px',
      paddingBottom: '07px',
      paddingTop: '0px',
      marginBottom: '05px',
      marginLeft: '0px',
      float: 'left',
      border: '5px #EF3340 solid',
      borderRadius: '9px'
    },
    neonAustralia: {
      fontSize: '3em',
      backgroundImage: 'linear-gradient(#00843D, #00843D)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: '30px',
      padding: '30px',
      paddingBottom: '07px',
      paddingTop: '0px',
      marginBottom: '05px',
      marginLeft: '0px',
      float: 'left',
      border: '5px #00843D solid',
      borderRadius: '9px'
    },
    neonMain: {
      fontSize: '7em',
      backgroundImage: 'linear-gradient(to right, #E1554C, #FFA526, #FFD426, #26DF7B, #268EFF, #716FDC)',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      margin: '30px',
      padding: '30px',
      paddingBottom: '05px',
      marginBottom: '05px',
      marginLeft: '0px',
      float: 'left',
      border: '5px #4a8fff solid',
      borderRadius: '9px'
    }
  },
}