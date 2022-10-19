import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/theme';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/Redux';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
    , document.getElementById('root'));