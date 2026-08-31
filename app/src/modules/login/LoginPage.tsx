import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative aspect-square w-[min(700px,calc(100vw-32px))] rounded-[70px] bg-[#181818]">
        <div className="absolute inset-x-0 top-12">
          <div
            className="non-selectable ml-17 select-none"
            onCopy={(event) => event.preventDefault()}
            onMouseDown={(event) => event.preventDefault()}
            onSelect={(event) => event.preventDefault()}
          >
            <div className="relative inline-block">
              <span className="font-[Makcasa] text-[160px] leading-none text-white">
                mclub
              </span>
              <span className="absolute bottom-[37px] left-[calc(100%+28px)] origin-bottom-left -rotate-90 font-[Inter] text-[35px] font-bold leading-none text-white">
                gym
              </span>
            </div>
            <p className="-mt-3 font-[Inter] text-[52px] font-bold leading-[1.12] text-white/18">
              Clientes, membresías
              <br />e inventario.
            </p>
          </div>
          <form className="mx-auto mt-7 flex w-[580px] flex-col items-center gap-4">
            <div className="relative h-[86px] w-full rounded-full bg-[#0d0d0d] focus-within:ring-2 focus-within:ring-white/20">
              <input
                aria-label="Usuario"
                autoComplete="username"
                className="relative z-10 h-full w-full rounded-full bg-transparent px-8 text-center font-[Inter] text-[48px] font-bold leading-[1.2] text-transparent caret-white outline-none"
                name="username"
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                value={username}
              />
              <div
                aria-hidden="true"
                className="non-selectable pointer-events-none absolute inset-0 flex items-center justify-center px-8 font-[Inter] text-[48px] font-bold leading-[1.2]"
              >
                {username.length === 0 ? (
                  <span className="text-[#5c5c5c]">usuario</span>
                ) : (
                  <span className="flex max-w-full overflow-hidden py-2 text-white">
                    {Array.from(username).map((character, index) => (
                      <motion.span
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0.92, y: 6 }}
                        key={`${character}-${index}`}
                        transition={{
                          duration: 0.26,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {character === ' ' ? '\u00a0' : character}
                      </motion.span>
                    ))}
                  </span>
                )}
              </div>
            </div>
            <div className="relative h-[86px] w-full rounded-full bg-[#0d0d0d] focus-within:ring-2 focus-within:ring-white/20">
              <input
                aria-label="Contraseña"
                autoComplete="current-password"
                className="relative z-10 h-full w-full rounded-full bg-transparent px-8 text-center font-[Inter] text-[48px] font-bold leading-[1.2] text-transparent caret-white outline-none"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                value={password}
              />
              <div
                aria-hidden="true"
                className="non-selectable pointer-events-none absolute inset-0 flex items-center justify-center px-8 font-[Inter] text-[48px] font-bold leading-[1.2]"
              >
                {password.length === 0 ? (
                  <span className="text-[#5c5c5c]">contraseña</span>
                ) : (
                  <span className="flex max-w-full overflow-hidden py-2 text-white">
                    {Array.from(password).map((_, index) => (
                      <motion.span
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0.92, y: 6 }}
                        key={`password-${index}`}
                        transition={{
                          duration: 0.26,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {'\u2022'}
                      </motion.span>
                    ))}
                  </span>
                )}
              </div>
            </div>
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
