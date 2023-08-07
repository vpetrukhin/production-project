import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}
export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <Button
                    theme={'inverted_clear'}
                    onClick={toggleLang}
                    className={classNames('', {}, [className])}
                >
                    {short ? t('Короткий язык') : t('Язык')}
                </Button>
            }
            off={
                <Button
                    theme={'inverted_clear'}
                    onClick={toggleLang}
                    className={classNames('', {}, [className])}
                >
                    {short ? t('Короткий язык') : t('Язык')}
                </Button>
            }
        />
    );
};
