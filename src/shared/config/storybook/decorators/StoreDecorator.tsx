import { Story } from '@storybook/react';
import { createReduxStore } from 'app/providers/Redux';
import { Provider } from 'react-redux';

export const StoreDecorator = (StoryComponent: Story) => (
    <Provider store={createReduxStore({})}>
        <StoryComponent />
    </Provider>
);