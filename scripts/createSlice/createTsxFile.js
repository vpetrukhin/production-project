const createFile = require('./helpers/createFile');

const createTsxFile = async (dir, slice) => {
    const tsxFileTemplate = 
    `
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './${slice}.module.scss';

interface ${slice}Props {
    className?: string;
}

export const ${slice} = (props: ${slice}Props) => {
    const { className } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.${slice}, {}, [className])}></div>
    );
};`;

    createFile(dir, `${slice}.tsx`, tsxFileTemplate);
};

module.exports = createTsxFile;