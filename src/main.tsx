import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import initI18n from './i18n.ts';

initI18n()
  .then(() =>
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  )
  .catch(() => console.log('Failed to load app'));
