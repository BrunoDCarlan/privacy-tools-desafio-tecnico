import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './index.css';
import { ThemeProvider } from './context/themecontext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Elemento root não encontrado no DOM');
}

ReactDOM
  .createRoot(rootElement)
  .render(
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );