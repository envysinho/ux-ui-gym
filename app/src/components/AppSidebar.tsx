export function AppSidebar() {
  return (
    <aside className="m-[32px_0_32px_32px] flex w-[255px] flex-col rounded-[25px] bg-[#181818]">
      <div className="flex flex-col items-center">
        <div
          className="non-selectable relative mt-[18px] inline-block h-fit"
          onCopy={(event) => event.preventDefault()}
          onMouseDown={(event) => event.preventDefault()}
          onSelect={(event) => event.preventDefault()}
        >
          <span className="font-[Makcasa] text-[41px] leading-none text-white">
            mclub
          </span>
          <span className="absolute bottom-[9px] left-[calc(100%+7px)] origin-bottom-left -rotate-90 text-[9px] leading-none font-bold text-white">
            gym
          </span>
        </div>
        <button
          className="mt-6 h-10 w-[calc(100%-28px)] rounded-xl border-0 bg-[#0d0d0d]"
          type="button"
        />
      </div>
    </aside>
  );
}
