import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

export const ThemeDecorator = (theme: Theme) => (Story: any) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
