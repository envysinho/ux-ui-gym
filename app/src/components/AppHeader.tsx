export function AppHeader() {
  return (
    <header className="flex h-[62px] w-full items-center gap-[10px]">
      <div className="h-[28px] w-[86px] shrink-0 rounded-[50px] bg-[#181818]" />
      <div className="h-[28px] min-w-0 flex-1 rounded-[50px] bg-[#181818]" />
      <button
        aria-label="Cambiar tema"
        className="h-[28px] w-[60px] shrink-0 rounded-[50px] border-0 bg-[#181818]"
        type="button"
      />
    </header>
  );
}
