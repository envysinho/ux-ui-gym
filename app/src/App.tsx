import { useState } from 'react';
import { DashboardPage } from './pages/DashboardPage';
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

  if (isLoggedIn) {
    return <DashboardPage />;
  }

  return <LoginPage onLogin={handleLogin} />;
}
