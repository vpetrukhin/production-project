// import { useTranslation } from 'react-i18next';
import { EditableProfileCard, EditableProfileCardHeader } from 'feutures/EditableProfileCard';
import { ProfileReducer } from 'entity/Profile';
import { fetchProfileData } from 'entity/Profile/model/services/fetchProfileData/fetchProfileData';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule, ReducerList } from 'shared/lib/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';
// import cls from './ProfilePage.module.scss';


const reducers: ReducerList = {
    'profile': ProfileReducer
};
interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    // const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    useInitialEffect(() => {
        if (id) dispatch(fetchProfileData(id));
    });

    return (
        <DynamicModule reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                <EditableProfileCard />
            </Page>
        </DynamicModule>
    );
};

export default ProfilePage;

