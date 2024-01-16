// src/theme.js
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    spacing: 4,
    palette: {
        mode: 'light',
        primary: {
            main: '#2196F3', // Deep Blue
        },
        secondary: {
            main: '#03A9F4', // Light Blue
            light: '#4FC3F7', // Sky Blue
            dark: '#0288D1', // Dark Blue
        },
        error: {
            main: '#E57373', // Salmon Pink
            light: '#FFCDD2', // Light Pink
        },
        success: {
            main: '#4CAF50', // Green
            light: '#C8E6C9', // Light Green
        },
        text: {
            primary: '#263238', // Dark Gray
            secondary: '#546E7A', // Blue Gray
            disabled: '#B0BEC5', // Light Blue Gray
        },
    }
});

theme = createTheme(theme, {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '100%',
                    borderRadius: theme.spacing(4),
                    boxShadow: 'none',
                    padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        boxShadow: 'none'
                    },
                    textTransform: 'none',
                    color: theme.palette.text.primary
                }
            },
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        border: '1px solid',
                        borderColor: theme.palette.secondary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.light
                        }
                    }
                },
                {
                    props: { variant: 'text' },
                    style: {
                        '&:hover': {
                            background: 'none'
                        }
                    }
                }
            ]
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                    padding: '0px',    
                    borderRadius: '16px'                
                }
            }
        },

        MuiSelect: {
            styleOverrides: {
              root: {
                borderRadius: '16px',
                disableElevation: true
              }
            }
          },
    }
});

export default theme;
