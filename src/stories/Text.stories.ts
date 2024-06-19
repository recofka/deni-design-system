// import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text/Text';
import { colors } from '../components/Tokens/colors';
import { fontSizes } from '../components/Tokens/font-sizes';

const meta = {
    title: 'Typography/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select', options: Object.keys(fontSizes) },
        },
        color: {
            control: { type: 'select', options: Object.keys(colors) },
        },
    },
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        label: 'Hello, World!',
    }
}

export const Bold: Story = {
    args: {
        label: 'Hello, World in bold!',
        fontWeight: 'bold',
    }
}
