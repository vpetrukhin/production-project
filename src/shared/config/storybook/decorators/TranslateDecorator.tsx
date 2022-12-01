import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/lib/i18n/i18nForTests';

export const TranslateDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18n}>
        <StoryComponent />
    </I18nextProvider>
);