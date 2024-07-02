import { styled, variants } from '../styles/index';

const hoverColor = variants.color.celestian900.color;

export const AvatarContainer = styled('div', {
    position: 'relative',

    '&::before': {
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        width: '100%',
        height: '100%',
        top: '2px',
        left: '5px',
        borderRadius: 'inherit',
        background: `repeating-linear-gradient(45deg, ${hoverColor}, ${hoverColor} 2px, transparent 2px, transparent 6px)`,
        transition: 'all 0.3s ease',
    },

    '&:hover::before': {
        top: '5px',
        left: '10px',
    },
});

export const AvatarStyle = styled('img', {
    borderRadius: '5px',
    display: 'inline-block',

    variants: {
        size: variants.avatar.size,

        border: {
            false: {
                border: 'none',
            },
        },
    },

    defaultVariants: {
        size: 'small',
    },
});
