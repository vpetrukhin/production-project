import { Story } from '@storybook/react';
import { createReduxStore, StateSchema } from 'app/providers/Redux';
import { Provider } from 'react-redux';

export const StoreDecorator = (initialStore: DeepPartial<StateSchema> = {}) => (StoryComponent: Story) => {
    return (
        <Provider store={createReduxStore(initialStore as StateSchema)}>
            <StoryComponent />
        </Provider>
    );
};