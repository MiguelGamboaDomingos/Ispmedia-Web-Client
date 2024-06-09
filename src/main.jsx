import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { DarkModeContextProvider } from './context/darkModeContext.jsx';
import { AuthContextProvider } from './context/authContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
