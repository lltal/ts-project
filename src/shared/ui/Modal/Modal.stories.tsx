import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {OutlineDark} from "shared/ui/Button/Button.stories";

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'qwertyuiopasdfghjklzxcvbnm',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'qwertyuiopasdfghjklzxcvbnm',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
