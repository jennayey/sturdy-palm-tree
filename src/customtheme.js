// import GothamBlack from './fonts/GothamPro-Black.woff2';
// const gothamBlack = {
//   fontFamily: 'GothamBlack',
//   fontStyle: 'bold',
//   fontDisplay: 'swap',
//   fontWeight: '600',
//   src: `
//     local('GothamBlack'),
//     local('GothamBlack-Regular'),
//     url(${GothamBlack}) format('ttf')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
//  };

 const customtheme = {
      palette: {
    type: 'light',
    primary: {
      main: '#005db9',
    },
    secondary: {
      main: '#00af43',
    },
    text: {
      primary: 'rgba(43,39,39,0.91)',
      hint: 'rgba(0,0,0,0.38)'
    },
    background: {
      default: '#eff8fa',
    },
    
  },
  typography: {
    fontFamily: ['GothamBlack', "GothamMedium", "GothamRegular",],
    h1: {
     fontFamily: 'GothamMedium',
    },
    h2: {
      fontFamily: 'GothamMedium',    
    },
    h5: {
      fontFamily: 'GothamMedium',
    },
    h6: {
      fontFamily: 'GothamMedium',
      
    },

    body1: {
      fontFamily: 'GothamRegular',
      fontWeight: '500',
      fontSize: '16px'
    },
    body2:{
      fontFamily: 'GothamMedium',
    
    },
    span: {
      fontFamily: "GothamRegular"
    },
    overline: {
      fontFamily: "GothamMedium",
      fontWeight: '500',
      fontSize: ".9em"

    },
    caption: {
      fontFamily: "GothamMedium",
      fontSize: ".9em"
    },
    subtitle1:  {
      fontFamily: "GothamMedium",
    },
  
    fontWeightBold: 700,
  },
};

export default customtheme;
