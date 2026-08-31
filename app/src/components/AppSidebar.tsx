import { LogoLockup } from './LogoLockup';

const sidebarButtonSlots = Array.from({ length: 10 }, (_, index) => index);

export function AppSidebar() {
  return (
    <aside className="m-[32px_0_32px_32px] flex w-[255px] flex-col rounded-[25px] bg-[#181818]">
      <div className="flex flex-col items-center">
        <LogoLockup className="mt-[18px]" />
        <div className="mt-3 flex w-full flex-col items-center gap-[5px]">
          {sidebarButtonSlots.map((slot) => (
            <button
              aria-label={`Modulo ${slot + 1}`}
              className="h-8 w-[calc(100%-20px)] rounded-[10px] border-0 bg-[#0d0d0d]"
              key={slot}
              type="button"
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
