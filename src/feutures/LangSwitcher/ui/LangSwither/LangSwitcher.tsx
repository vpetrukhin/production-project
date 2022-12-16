import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';


interface LangSwitcherProps {
    className?: string;
    short?: boolean
}
export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };


    return (
        <Button theme={'inverted_clear'} onClick={toggleLang} className={classNames('', {}, [className])}>
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
};