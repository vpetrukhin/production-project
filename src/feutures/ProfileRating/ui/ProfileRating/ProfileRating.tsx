import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entity/Rating';
import { getUserInfo } from '@/entity/User';
import { useGetProfileRatingQuery, useRateProfileMutation } from '../../api/ProfileRaringApi';

interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

export const ProfileRating = (props: ProfileRatingProps) => {
    const { profileId } = props;
    const {t} = useTranslation('profile');

    const user = useSelector(getUserInfo);

    const { data } = useGetProfileRatingQuery({
        userId: user?.id || '',
        profileId: profileId,
    });
    const [rateProfile] = useRateProfileMutation();

    const onAccept = (rating: number, feedback?: string) => {
        try {
            rateProfile({
                rate: rating,
                feedback,
                profileId,
                userId: user?.id || '',
            });
        } catch (e) {
            console.log(e);
        }
    };

    const onCancel = (rating: number) => {
        try {
            rateProfile({
                rate: rating,
                profileId,
                userId: user?.id || '',
            });
        } catch (e) {
            console.log(e);
        }
    };

    const rate = data?.[0];

    return (
        <RatingCard
            title={t('kak-vam-etot-profil')}
            feedbackTitle={t('vash-kommentarii')}
            hasFeedback
            rate={rate?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
};