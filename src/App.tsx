import { Suspense, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter/Counter';
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';


export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to="/about">About</Link>
            <Link to="/">Main</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>

            <Counter />
        </div>
    )
}
