import {
  Boxes,
  Camera,
  ChartNoAxesColumn,
  CreditCard,
  LayoutDashboard,
  Package,
  QrCode,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react';
import { LogoLockup } from './components/LogoLockup';
import { SidebarButton } from './components/SidebarButton';
import { UserLogoutArea } from './components/UserLogoutArea';

export const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'Clientes' },
  { icon: CreditCard, label: 'Membresias' },
  { icon: Camera, label: 'Validacion' },
  { icon: QrCode, label: 'Acceso QR' },
  { icon: Package, label: 'Productos' },
  { icon: Boxes, label: 'Inventario' },
  { icon: Wallet, label: 'Caja' },
  { icon: ChartNoAxesColumn, label: 'Reportes' },
  { icon: ShieldCheck, label: 'Usuarios' },
];

type AppSidebarProps = {
  activePage: string;
  onPageChange: (page: string) => void;
};

export function AppSidebar({ activePage, onPageChange }: AppSidebarProps) {
  return (
    <aside className="flex h-full w-[255px] flex-col justify-between rounded-[25px] bg-[var(--surface)] transition-colors duration-200">
      <div className="flex flex-col items-center">
        <LogoLockup className="mt-[18px]" />
        <div className="mt-3 flex w-full flex-col items-center gap-[5px]">
          {sidebarItems.map(({ icon, label }) => (
            <SidebarButton
              active={activePage === label}
              icon={icon}
              key={label}
              onClick={() => onPageChange(label)}
            >
              {label}
            </SidebarButton>
          ))}
        </div>
      </div>
      <UserLogoutArea />
    </aside>
  );
}
