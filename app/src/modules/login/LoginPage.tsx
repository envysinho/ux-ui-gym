import { ArrowRight } from 'lucide-react';

export function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative aspect-square w-[min(700px,calc(100vw-32px))] rounded-[70px] bg-[#181818]">
        <div className="absolute inset-x-0 top-12">
          <div className="ml-17">
            <div className="relative inline-block">
              <span className="font-[Makcasa] text-[160px] leading-none text-white">
                mclub
              </span>
              <span className="absolute bottom-[37px] left-[calc(100%+28px)] origin-bottom-left -rotate-90 font-[Inter] text-[35px] font-bold leading-none text-white">
                gym
              </span>
            </div>
            <p className="-mt-3 font-[Inter] text-[52px] font-bold leading-[1.12] text-white/18 transition-colors duration-200 ease-out hover:text-white/30">
              Clientes, membresías
              <br />e inventario.
            </p>
          </div>
          <form className="mx-auto mt-7 flex w-[580px] flex-col items-center gap-4">
            <input
              aria-label="Usuario"
              className="h-[86px] w-full rounded-full bg-[#0d0d0d] px-8 text-center font-[Inter] text-[48px] font-bold leading-none text-white outline-none placeholder:text-[48px] placeholder:font-bold placeholder:text-[#5c5c5c] focus:ring-2 focus:ring-white/20"
              name="username"
              placeholder="usuario"
              type="text"
            />
            <input
              aria-label="Contraseña"
              className="h-[86px] w-full rounded-full bg-[#0d0d0d] px-8 text-center font-[Inter] text-[48px] font-bold leading-none text-white outline-none placeholder:text-[48px] placeholder:font-bold placeholder:text-[#5c5c5c] focus:ring-2 focus:ring-white/20"
              name="password"
              placeholder="contraseña"
              type="password"
            />
            <button
              aria-label="Ingresar"
              className="mt-5 flex size-[100px] items-center justify-center rounded-full bg-white text-[#181818] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 focus:ring-2 focus:ring-white/35 focus:outline-none"
              type="submit"
            >
              <ArrowRight aria-hidden="true" size={52} strokeWidth={3} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
