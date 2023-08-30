import React from 'react';
import './App.css';
import AppThemeProvider from './contexts/AppTheme';
import Routes from './routes/Routes';
import LanguageProvider from './contexts/Localisation';
import MenuNavigationProvider from './contexts/MenuNavigation';

function App() {
  return (
    <AppThemeProvider>
      <LanguageProvider>
        <MenuNavigationProvider>
          <Routes />
        </MenuNavigationProvider>
      </LanguageProvider>
    </AppThemeProvider>
  );
}

export default App;
