import { AppHeader } from '../components/AppHeader';
import { AppSidebar } from '../components/AppSidebar';

export function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <AppSidebar />
      <section className="m-[19px_20px_32px_10px] flex min-w-0 flex-1 flex-col">
        <AppHeader />
      </section>
    </main>
  );
}
