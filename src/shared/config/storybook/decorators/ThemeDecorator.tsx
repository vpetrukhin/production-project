import { Story } from '@storybook/react';
import { Theme } from '../../const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);