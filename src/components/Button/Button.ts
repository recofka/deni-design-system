import { styled, variants } from '../styles/index';
import { keyframes } from '@stitches/react';

const bubbleColor = variants.color.pink700.color;
const topBubbles = keyframes({
    '0%': {
        backgroundPosition: '5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%',
    },
    '50%': {
        backgroundPosition: '0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%',
    },
    '100%': {
        backgroundPosition: '0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%',
        backgroundSize: '0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%',
    },
});

const bottomBubbles = keyframes({
    '0%': {
        backgroundPosition: '10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%',
    },
    '50%': {
        backgroundPosition: '0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%',
    },
    '100%': {
        backgroundPosition: '0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%',
        backgroundSize: '0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%',
    },
});

export const ButtonStyle = styled('button', {
    fontFamily: variants.font.default.fontFamily,
    fontWeight: variants.fontWeight.regular.fontWeight,
    border: '2px solid transparent',
    borderRadius: '0.75rem',
    letterSpacing: '0.9px',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    position: 'relative',
    transition: 'transform ease-in 0.1s, box-shadow ease-in 0.25s',

    '&:focus': {
        outline: '0',
    },

    '&:before, &:after': {
        position: 'absolute',
        content: '',
        display: 'block',
        width: '140%',
        height: '100%',
        left: '-20%',
        zIndex: -1000,
        transition: 'all ease-in-out 0.5s',
        backgroundRepeat: 'no-repeat',
    },

    '&:before': {
        display: 'none',
        top: '-75%',
        backgroundImage: `
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, transparent 20%, ${bubbleColor} 20%, transparent 30%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, ${bubbleColor} 15%, transparent 20%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%)
      `,
        backgroundSize: `
        10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 38% 38%
      `,
        backgroundPosition: `
        0% 80%, -5% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 85% 30%, -12% 56%, 92% -7%, 34% 66%
      `,
    },

    '&:after': {
        display: 'none',
        bottom: '-75%',
        backgroundImage: `
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, ${bubbleColor} 15%, transparent 20%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%),
        radial-gradient(circle, ${bubbleColor} 20%, transparent 20%)
      `,
        backgroundSize: `
        15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%
      `,
    },

    '&:active': {
        transform: 'scale(0.9)',
        backgroundColor: `darken(${bubbleColor}, 5%)`,
    },

    '&.animate': {
        '&:before': {
            display: 'block',
            animation: `${topBubbles} ease-in-out 0.75s forwards`,
        },

        '&:after': {
            display: 'block',
            animation: `${bottomBubbles} ease-in-out 0.75s forwards`,
        },
    },

    variants: {
        size: variants.button.size,
        variant: variants.button.variant,
    },

    defaultVariants: {
        size: 'medium',
        variant: 'primary',
    },
});