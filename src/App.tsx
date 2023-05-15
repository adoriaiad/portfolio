import React from 'react';
import './App.css';
import AppThemeProvider from './contexts/AppTheme';
import Routes from './routes/Routes';
import LanguageProvider from './contexts/Localisation';

function App() {
  return (
    <AppThemeProvider>
      <LanguageProvider>
        <Routes />
      </LanguageProvider>
    </AppThemeProvider>
  );
}

export default App;
