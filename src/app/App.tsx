import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/theme/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';


export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to="/about">About</Link>
            <Link to="/">Main</Link>
            <AppRouter />
        </div>
    )
}
