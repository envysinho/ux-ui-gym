import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppHeader } from '../components/app-header/AppHeader';
import { AppSidebar, sidebarItems } from '../components/app-sidebar/AppSidebar';
import { Clients } from '../modules/clients/Clients';
import { Dashboard } from '../modules/dashboard/Dashboard';
import { Inventory } from '../modules/inventory/Inventory';
import { Memberships } from '../modules/memberships/Memberships';
import { Products } from '../modules/products/Products';

type AppPageProps = {
  onLogout: () => void;
};

const moduleScrollTransition = {
  duration: 0.68,
  ease: [0.16, 1, 0.3, 1],
} as const;

const moduleMotionVariants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? '100%' : '-100%',
  }),
  center: {
    x: '0%',
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? '-100%' : '100%',
  }),
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

  if (activePage === 'Productos') {
    return <Products />;
  }

  if (activePage === 'Inventario') {
    return <Inventory />;
  }

  return <div className="min-h-0 flex-1" />;
}

export function AppPage({ onLogout }: AppPageProps) {
  const [activePage, setActivePage] = useState(sidebarItems[0].label);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handlePageChange = (nextPage: string) => {
    if (nextPage === activePage) {
      return;
    }

    const currentIndex = sidebarItems.findIndex(({ label }) => label === activePage);
    const nextIndex = sidebarItems.findIndex(({ label }) => label === nextPage);
    setScrollDirection(nextIndex > currentIndex ? 1 : -1);
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
          <AnimatePresence custom={scrollDirection} initial={false} mode="popLayout">
            <motion.div
              animate="center"
              className="absolute inset-0 flex flex-col"
              custom={scrollDirection}
              exit="exit"
              initial="enter"
              key={activePage}
              transition={moduleScrollTransition}
              variants={moduleMotionVariants}
            >
              {renderActiveModule(activePage)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
