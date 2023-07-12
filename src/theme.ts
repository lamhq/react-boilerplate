import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    h1: {
      fontSize: '1.3125rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.375rem',
      marginBottom: '1.5625rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.25rem',
    },
    h4: {
      fontSize: '1.0625rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.75rem',
    },
  },
  palette: {
    success: {
      main: 'rgb(76, 175, 80)',
    },
    primary: {
      main: '#296BE3',
    },
    secondary: {
      main: '#e0e0e0',
    },
  },
  spacing: 8,
});
