import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { Profile } from 'entity/Profile';
import { ProfileReducer } from '../../model/slice/ProfileSlice';
import { ComponentRender, ComponentRenderOptions } from 'shared/config/tests/ComponentRender';
import { EditableProfileCard } from './EditableProfileCard';

const mockProfile: Profile = {
    age: 22,
    avatar: 'link',
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.RUB,
    first: 'admin',
    lastname: 'admin',
    id: '1',
    username: 'admin'
};

const options: ComponentRenderOptions = {
    initialState: {
        profile: {
            readonly: true,
            data: mockProfile,
            form: mockProfile,
            isLoading: false
        },
        user: {
            userInfo: { id :'1', username: 'admin', avatar: '' }
        }
    },
    asyncReducers: {
        profile: ProfileReducer
    }
};

describe('Tests for EditableProfileCard', () => {
    test('edit mode activate', async () => {
        ComponentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.editButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.saveButton')).toBeInTheDocument();
    });
    test('values should be reset by cancel', async () => {
        ComponentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.editButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.cancelButton'));

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
    });
});