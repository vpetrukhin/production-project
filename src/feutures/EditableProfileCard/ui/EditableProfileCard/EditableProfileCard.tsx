import { getProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, ProfileCard } from 'entity/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { className } = props;
    const {t} = useTranslation();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    // TODO: Реализовать режим редактирования

    return (
        <ProfileCard
            className={className}
            data={data}
            error={error}
            isLoading={isLoading}
            readonly={readonly}
        />
    );
};