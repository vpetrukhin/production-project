import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';

// Тестовый компонент, который выбрасывает ошибку 
export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={() => setError(true)} >{'Throw error'}</Button>
    );
};