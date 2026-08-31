type AppHeaderProps = {
  currentPage: string;
};

export function AppHeader({ currentPage }: AppHeaderProps) {
  return (
    <header className="flex w-full items-center gap-[10px]">
      <div className="flex h-[40px] w-[145px] shrink-0 items-center rounded-[50px] bg-[#181818] px-[18px] text-[14px] leading-none font-bold text-white">
        {currentPage}
      </div>
      <div className="h-[40px] min-w-[280px] max-w-[820px] flex-1 rounded-[50px] bg-[#181818]" />
      <button
        aria-label="Cambiar tema"
        className="ml-auto h-[40px] w-[70px] shrink-0 rounded-[50px] border-0 bg-[#181818]"
        type="button"
      />
    </header>
  );
}
