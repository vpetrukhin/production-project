import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Button } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import LangRu from './langRu.svg';
import LangEn from './langEn.svg';

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
                <Icon
                    Svg={i18n.language === 'ru' ? LangRu : LangEn}
                    clickable
                    onClick={toggleLang}
                />
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
