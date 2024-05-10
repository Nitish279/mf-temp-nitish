import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { BrowserRouter } from 'react-router-dom';
import ('bootstrap/dist/css/bootstrap.min.css');
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import ErrorBoundary from './src/ErrorBoundary/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <ErrorBoundary fallback={"KaBooooom...Something Went Wrong!!!"}>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>
);
