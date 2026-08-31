import type { LucideIcon } from 'lucide-react';

type SidebarButtonProps = {
  active: boolean;
  children: string;
  icon: LucideIcon;
  onClick: () => void;
};

export function SidebarButton({
  active,
  children,
  icon: Icon,
  onClick,
}: SidebarButtonProps) {
  return (
    <button
      aria-current={active ? 'page' : undefined}
      className={`flex h-8 w-[calc(100%-20px)] items-center gap-[8px] rounded-[10px] border-0 px-[10px] text-[14px] leading-none font-semibold text-[var(--text-primary)] transition-colors duration-200 ${
        active ? 'bg-[var(--surface-active)]' : 'bg-[var(--surface-strong)]'
      }`}
      onClick={onClick}
      type="button"
    >
      <Icon aria-hidden="true" size={16} strokeWidth={2} />
      <span>{children}</span>
    </button>
  );
}
