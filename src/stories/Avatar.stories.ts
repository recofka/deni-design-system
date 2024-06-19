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
            control: {
                type: 'number',
            },
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
        size: 50,
    }
};

export const Medium: Story = {
    args: {
        src: 'https://github.com/recofka.png',
        size: 100,
    }
};

export const Large: Story = {
    args: {
        src: 'https://github.com/recofka.png',
        size: 150,
    }
};

export const WithFallback: Story = {
    args: {
        src: 'https://via.placeholder.com/150',
        size: 150,
    },
}