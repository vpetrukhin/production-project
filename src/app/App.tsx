import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from 'app/providers/theme/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar/NavBar';


export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <button onClick={toggleTheme}>toggle</button>
            <AppRouter />
        </div>
    )
}
