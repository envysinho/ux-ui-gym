import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';

type AppHeaderProps = {
  currentPage: string;
};

export function AppHeader({ currentPage }: AppHeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="flex w-full items-center gap-[10px]">
      <motion.div
        className="flex h-[40px] min-w-[9px] shrink-0 items-center rounded-[50px] bg-[#181818] px-[22px] text-[14px] leading-none font-bold whitespace-nowrap text-white"
        layout
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {currentPage}
      </motion.div>
      <motion.div
        className="relative h-[40px] min-w-[280px] max-w-[820px] flex-1 rounded-[50px] bg-[#181818]"
        layout
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        <input
          aria-label="Buscar"
          className="relative z-10 h-full w-full rounded-[50px] bg-transparent pr-[56px] pl-[22px] text-[14px] leading-none font-bold text-transparent caret-white outline-none"
          onChange={(event) => setSearchQuery(event.target.value)}
          type="text"
          value={searchQuery}
        />
        <div
          aria-hidden="true"
          className="non-selectable pointer-events-none absolute inset-0 flex items-center pr-[56px] pl-[22px] text-[14px] leading-none font-bold"
        >
          {searchQuery.length === 0 ? (
            <span className="min-w-0 truncate text-[#5c5c5c]">
              Busca cliente, membresia, productos...
            </span>
          ) : (
            <span className="flex min-w-0 max-w-full overflow-hidden text-white">
              {Array.from(searchQuery).map((character, index) => (
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
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[22px] z-20 -translate-y-1/2 text-[#5c5c5c]"
          size={18}
          strokeWidth={2.25}
        />
      </motion.div>
      <motion.button
        aria-label="Cambiar tema"
        className="ml-auto h-[40px] w-[70px] shrink-0 rounded-[50px] border-0 bg-[#181818]"
        layout
        transition={{ duration: 0.22, ease: 'easeOut' }}
        type="button"
      />
    </header>
  );
}
