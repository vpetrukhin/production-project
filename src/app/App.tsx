import './styles/index.scss';
import { useTheme } from 'app/providers/theme/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar/NavBar';
import { SideBar } from 'widgets/SideBar';


export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <div className='page-content'>
                <SideBar />
                <AppRouter />
            </div>
            
        </div>
    )
}
