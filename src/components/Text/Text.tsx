// import React from 'react';
import { colors } from '../Tokens/colors';
import { fontSizes } from '../Tokens/font-sizes';
import { styled, variants } from '../styles/index';
import { fontWeights } from '../Tokens';

const TextStyle = styled('p', {
    fontFamily: '$default',
    color: '$gray600',
    fontWeight: '$regular',

    variants: {
        ...variants,
    },

    defaultVariants: {
        size: 'md',
        color: 'gray600',
        fontWeight: 'regular',
    },
});

export interface TextProps {
    /**
     * Font size of the text
     */
    size?: keyof typeof fontSizes;
    /**
     * Font Weight pf the Text
     */
    fontWeight?: keyof typeof fontWeights;
    /**
    * Color of the text
    */
    color?: keyof typeof colors;
    /**
     * Text contents
     */
    label: string;
}

/**
 * Primary UI component for displaying text
 */
export const Text = ({
    size = 'md',
    color = 'gray600',
    fontWeight = 'regular',
    label,
    ...props
}: TextProps) => {
    return (
        <TextStyle
            size={size}
            color={color}
            fontWeight={fontWeight}
            {...props}
        >
            {label}
        </TextStyle>
    );
};

