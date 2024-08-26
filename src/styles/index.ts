import { globalCss } from './global'

export const globalStyles = globalCss({
    '*': {
        margin: '0px',
        padding: '0rem',
        boxSizing: 'border-box',
        fontFamily: '$poppins',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '8px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#028001',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#BEBEBE',
            borderRadius: '4px',
        },
    },
    'body, input, textarea, button, select': {
        '&::-webkit-scrollbar': {
            width: '2px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#ffffff',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#BEBEBE',
            borderRadius: '4px',
        },
    },
    body: {
        backgroundColor: '$white',
    },
    img: {
        display: 'block',
        maxWidth: '100%',
    },
})
