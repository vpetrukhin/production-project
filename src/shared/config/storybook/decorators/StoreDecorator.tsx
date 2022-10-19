import { Story } from '@storybook/react';
import { createReduxStore, StateSchema } from 'app/providers/Redux';
import { ProfileReducer } from 'entity/Profile';
import { LoginReducer } from 'feutures/AuthByUserName/model/slices/LoginSlice';
import { Provider } from 'react-redux';

export const StoreDecorator = (initialStore: Partial<StateSchema> = {}) => (StoryComponent: Story) => {
    return (
        <Provider store={createReduxStore(initialStore, {
            login: LoginReducer,
            profile: ProfileReducer
        })}>
            <StoryComponent />
        </Provider>
    );
};