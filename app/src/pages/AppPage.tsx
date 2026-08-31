import { useState } from 'react';
import { AppHeader } from '../components/app-header/AppHeader';
import { AppSidebar, sidebarItems } from '../components/app-sidebar/AppSidebar';
import { Dashboard } from '../modules/dashboard/Dashboard';

type AppPageProps = {
  onLogout: () => void;
};

export function AppPage({ onLogout }: AppPageProps) {
  const [activePage, setActivePage] = useState(sidebarItems[0].label);
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <main
      className={`flex min-h-screen ${isLightTheme ? 'theme-light' : 'theme-dark'} bg-[var(--app-bg)] transition-colors duration-200`}
    >
      <div className="m-[32px_0_32px_32px]">
        <AppSidebar
          activePage={activePage}
          onLogout={onLogout}
          onPageChange={setActivePage}
        />
      </div>
      <section className="m-[32px_32px_32px_10px] flex min-w-0 flex-1 flex-col">
        <div className="pl-[16px]">
          <AppHeader
            currentPage={activePage}
            isLightTheme={isLightTheme}
            onThemeToggle={() => setIsLightTheme((currentTheme) => !currentTheme)}
          />
        </div>
        {activePage === 'Dashboard' ? (
          <Dashboard />
        ) : (
          <div className="min-h-0 flex-1" />
        )}
      </section>
    </main>
  );
}
