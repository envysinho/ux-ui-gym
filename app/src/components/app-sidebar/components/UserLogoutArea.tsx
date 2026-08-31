import { LogOut } from 'lucide-react';

type UserLogoutAreaProps = {
  onLogout: () => void;
};

export function UserLogoutArea({ onLogout }: UserLogoutAreaProps) {
  return (
    <div className="mb-4 flex w-[calc(100%-20px)] items-center gap-[10px] self-center">
      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[var(--surface-strong)] text-[18px] leading-none font-extralight text-[var(--text-primary)] transition-colors duration-200">
        SF
      </div>
      <div className="min-w-0 flex-1">
        <strong className="block truncate text-[15px] leading-[1.05] font-bold text-[var(--text-primary)] transition-colors duration-200">
          Sergio Fernandez
        </strong>
        <span className="block truncate text-[14px] leading-[1.15] font-normal text-[var(--text-soft)] transition-colors duration-200">
          @envysinho - sudo
        </span>
      </div>
      <div className="flex h-[42px] shrink-0 items-center">
        <button
          aria-label="Cerrar sesion"
          className="flex h-[38px] w-[38px] translate-y-[2px] items-center justify-center border-0 bg-transparent p-0 text-[var(--danger)] transition-colors duration-200"
          onClick={onLogout}
          type="button"
        >
          <LogOut aria-hidden="true" size={20} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
