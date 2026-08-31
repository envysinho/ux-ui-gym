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
import { LogoLockup } from './LogoLockup';
import { UserLogoutArea } from './UserLogoutArea';

export const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'Clientes' },
  { icon: CreditCard, label: 'Membresías' },
  { icon: Camera, label: 'Validación' },
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
    <aside className="flex h-full w-[255px] flex-col justify-between rounded-[25px] bg-[#181818]">
      <div className="flex flex-col items-center">
        <LogoLockup className="mt-[18px]" />
        <div className="mt-3 flex w-full flex-col items-center gap-[5px]">
          {sidebarItems.map(({ icon: Icon, label }) => (
            <button
              aria-current={activePage === label ? 'page' : undefined}
              className={`flex h-8 w-[calc(100%-20px)] items-center gap-[8px] rounded-[10px] border-0 px-[10px] text-[14px] leading-none font-semibold text-white ${
                activePage === label ? 'bg-[#2a2a2a]' : 'bg-[#0d0d0d]'
              }`}
              key={label}
              onClick={() => onPageChange(label)}
              type="button"
            >
              <Icon aria-hidden="true" size={16} strokeWidth={2} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
      <UserLogoutArea />
    </aside>
  );
}
