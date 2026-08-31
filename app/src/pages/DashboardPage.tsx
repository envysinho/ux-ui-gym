import { useState } from 'react';
import { AppHeader } from '../components/AppHeader';
import { AppSidebar, sidebarItems } from '../components/AppSidebar';

export function DashboardPage() {
  const [activePage, setActivePage] = useState(sidebarItems[0].label);

  return (
    <main className="flex min-h-screen bg-black">
      <div className="m-[32px_0_32px_32px]">
        <AppSidebar activePage={activePage} onPageChange={setActivePage} />
      </div>
      <section className="m-[32px_32px_32px_10px] flex min-w-0 flex-1 flex-col">
        <AppHeader currentPage={activePage} />
        <div className="min-h-0 flex-1" />
      </section>
    </main>
  );
}
