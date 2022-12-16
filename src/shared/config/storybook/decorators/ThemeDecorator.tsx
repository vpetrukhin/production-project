import { Story } from '@storybook/react';
import { Theme } from '@/shared/lib/context/themeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);