import { useState } from 'react';
import { AppPage } from './pages/AppPage';
import { LoginPage } from './pages/LoginPage';

const MOCK_SESSION_KEY = 'mclub_mock_session';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem(MOCK_SESSION_KEY) === 'active',
  );

  const handleLogin = () => {
    localStorage.setItem(MOCK_SESSION_KEY, 'active');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem(MOCK_SESSION_KEY);
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <AppPage onLogout={handleLogout} />;
  }

  return <LoginPage onLogin={handleLogin} />;
}
