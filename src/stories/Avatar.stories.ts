import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../components/Avatar/Avatar';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
        size: {
            control: 'select', options: ['small', 'medium', 'large',],
        },
        border: {
            control: {
                type: 'boolean',
            },
        },
    },
    args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        src: 'https://github.com/recofka.png',
        size: 'small',
    }
};

export const Medium: Story = {
    args: {
        src: 'https://github.com/recofka.png',
        size: 'medium',
    }
};

export const Large: Story = {
    args: {
        src: 'https://github.com/recofka.png',
        size: 'large',
    }
};

export const WithFallback: Story = {
    args: {
        src: 'https://via.placeholder.com/150',
        size: 'small',
    },
}