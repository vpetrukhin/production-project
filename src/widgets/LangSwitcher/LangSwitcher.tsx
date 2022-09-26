import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';


interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };


    return (
        <Button onClick={toggleLang} className={classNames('', {}, [className])}>
            {t('Язык')}
        </Button>
    );
};