import React, {StrictMode} from 'react';
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js';
import { store } from 'core/Store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StrictMode><Provider store={store}>
    <App />
</Provider></StrictMode>);