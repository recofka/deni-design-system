import {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    space,
} from '../Tokens/index'
import { createStitches, defaultThemeMap } from '@stitches/react'
import { darken } from 'polished';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space',
    },

    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        radii,
        space,
    },
})


export const variants = {
    size: {
        xxs: { fontSize: '$xxs' },
        xs: { fontSize: '$xs' },
        sm: { fontSize: '$sm' },
        md: { fontSize: '$md' },
        lg: { fontSize: '$lg' },
        xl: { fontSize: '$xl' },
        '2xl': { fontSize: '$2xl' },
        '4xl': { fontSize: '$4xl' },
        '5xl': { fontSize: '$5xl' },
        '6xl': { fontSize: '$6xl' },
        '7xl': { fontSize: '$7xl' },
        '8xl': { fontSize: '$8xl' },
        '9xl': { fontSize: '$9xl' },
    },
    color: {
        white: { color: '$white' },
        black: { color: '$black' },
        gray100: { color: '$gray100' },
        gray200: { color: '$gray200' },
        gray400: { color: '$gray400' },
        gray500: { color: '$gray500' },
        gray600: { color: '$gray600' },
        gray700: { color: '$gray700' },
        gray800: { color: '$gray800' },
        gray900: { color: '$gray900' },
        amaranth900: { color: '$amaranth900' },
        amaranth700: { color: '$amaranth700' },
        amaranth600: { color: '$amaranth600' },
        pink900: { color: '$pink900' },
        pink700: { color: '$pink700' },
        pink600: { color: '$pink600' },
        pink300: { color: '$pink300' },
        plum900: { color: '$plum900' },
        plum700: { color: '$plum700' },
        plum600: { color: '$plum600' },
        plum300: { color: '$plum300' },
        celestian900: { color: '$celestian900' },
        celestian700: { color: '$celestian700' },
        celestian600: { color: '$celestian600' },
        celestian300: { color: '$celestian300' },
        mint: { color: '$mint' },
    },
    fontWeight: {
        regular: { fontWeight: '$regular' },
        medium: { fontWeight: '$medium' },
        bold: { fontWeight: '$bold' },
    },
    font: {
        default: { fontFamily: '$default' },
        code: { fontFamily: '$code' },
    },
    radii: {
        px: { borderRadius: '$px' },
        xs: { borderRadius: '$xs' },
        sm: { borderRadius: '$sm' },
        md: { borderRadius: '$md' },
        lg: { borderRadius: '$lg' },
        full: { borderRadius: '$full' },
    },
    button: {
        size: {
            small: {
                fontSize: '$xs',
                padding: '10px 16px',
            },
            medium: {
                fontSize: '$sm',
                padding: '11px 20px',
            },
            large: {
                fontSize: '$lg',
                padding: '12px 24px',
            },
        },
        variant: {
            primary: {
                color: 'white',
                backgroundColor: '$plum700',
                '&:hover': {
                    backgroundColor: darken(0.1, '#482f54'), // $plum900:
                },
                $$bubbleColor: '$plum700',
            },
            secondary: {
                color: 'white',
                backgroundColor: '$amaranth900',
                '&:hover': {
                    backgroundColor: darken(0.1, '#ca5c80'),  // $amaranth900:
                },
                $$bubbleColor: '$amaranth700',
            },
        },
    },
    avatar: {
        size: {
            small: {
                border: `1px solid transparent`,
                width: '50px',
                height: '50px',
            },
            medium: {
                border: `1px solid transparent`,
                width: '80px',
                height: '80px',
            },
            large: {
                border: `1px solid transparent`,
                width: '120px',
                height: '120px',
            },
        },
    }
};
