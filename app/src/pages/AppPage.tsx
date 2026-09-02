import { useState } from 'react';
import { motion } from 'framer-motion';
import { AppHeader } from '../components/app-header/AppHeader';
import { AppSidebar, sidebarItems } from '../components/app-sidebar/AppSidebar';
import { Clients } from '../modules/clients/Clients';
import { Dashboard } from '../modules/dashboard/Dashboard';
import { Memberships } from '../modules/memberships/Memberships';

type AppPageProps = {
  onLogout: () => void;
};

const moduleScrollTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
} as const;

function renderActiveModule(activePage: string) {
  if (activePage === 'Dashboard') {
    return <Dashboard />;
  }

  if (activePage === 'Clientes') {
    return <Clients />;
  }

  if (activePage === 'Membresias') {
    return <Memberships />;
  }

  return <div className="min-h-0 flex-1" />;
}

export function AppPage({ onLogout }: AppPageProps) {
  const [activePage, setActivePage] = useState(sidebarItems[0].label);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const activePageIndex = sidebarItems.findIndex(
    ({ label }) => label === activePage,
  );

  const handlePageChange = (nextPage: string) => {
    setActivePage(nextPage);
  };

  return (
    <main
      className={`flex min-h-screen ${isLightTheme ? 'theme-light' : 'theme-dark'} bg-[var(--app-bg)] transition-colors duration-200`}
    >
      <div className="m-[32px_0_32px_32px]">
        <AppSidebar
          activePage={activePage}
          onLogout={onLogout}
          onPageChange={handlePageChange}
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
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <motion.div
            animate={{ y: `${activePageIndex * -100}%` }}
            className="absolute inset-0 flex flex-col"
            transition={moduleScrollTransition}
          >
            {sidebarItems.map(({ label }) => (
              <div
                aria-hidden={activePage !== label}
                className="flex h-full min-h-0 flex-none flex-col"
                key={label}
              >
                {renderActiveModule(label)}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
