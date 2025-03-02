import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ColorModeContextProvider } from './context/colorModeContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <App />
    </ColorModeContextProvider>
  </React.StrictMode>
);
