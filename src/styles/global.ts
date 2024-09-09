import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            green: '#016600',
            maingreen: '#028001',
            darkGreen: '#014201',
            graymain: '#333333',
            lightGreen: '#98B38D',
            gray: '#ABACA6',
            fontgreen: '#BEDBC4',
            titlegray: '#2F2E41',
            cardgray: '#737373',
            white: '#FFFFFF',
            lightgray: '#BEBEBE',
            border: '#F0EFEF',
            lightfont: '#A3A3A3',
            softgray: '#B6B6B6',
            extrasoftgray: '#BABABA',
            grayfont: '#656565',
            grayhigh: '#393939',
            mediumGray: '#BFBFBF',
            placeholder: '#DCDCDC',
            hiperlightgray: '#D7D7D7',
            input: '#CCC',
            background: ' #F9F9F9;',
        },
        fonts: {
            poppins: 'Poppins, sans-serif',
        },
    },
})
