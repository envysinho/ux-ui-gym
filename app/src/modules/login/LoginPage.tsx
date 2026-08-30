export function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative aspect-square w-[min(700px,calc(100vw-32px))] rounded-[70px] bg-zinc-900">
        <div className="absolute left-17 top-12 inline-block">
          <span className="font-[Makcasa] text-[160px] leading-none text-white">
            mclub
          </span>
          <span className="absolute bottom-[37px] left-[calc(100%+28px)] origin-bottom-left -rotate-90 font-[Inter] text-[35px] font-bold leading-none text-white">
            gym
          </span>
        </div>
      </div>
    </main>
  );
}
