import { motion } from 'framer-motion';
import { Moon, Search, Sun } from 'lucide-react';
import { useState } from 'react';

type AppHeaderProps = {
  currentPage: string;
  isLightTheme: boolean;
  onThemeToggle: () => void;
};

export function AppHeader({
  currentPage,
  isLightTheme,
  onThemeToggle,
}: AppHeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="flex w-full items-center gap-[10px]">
      <motion.div
        className="flex h-[40px] min-w-[9px] shrink-0 items-center rounded-[50px] bg-[var(--surface)] px-[22px] text-[14px] leading-none font-bold whitespace-nowrap text-[var(--text-primary)] transition-colors duration-200"
        layout
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {currentPage}
      </motion.div>
      <motion.div
        className="relative h-[40px] min-w-[280px] max-w-[820px] flex-1 rounded-[50px] bg-[var(--surface)] transition-colors duration-200"
        layout
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        <input
          aria-label="Buscar"
          className="relative z-10 h-full w-full rounded-[50px] bg-transparent pr-[56px] pl-[22px] text-[14px] leading-none font-bold text-transparent caret-[var(--text-primary)] outline-none"
          onChange={(event) => setSearchQuery(event.target.value)}
          type="text"
          value={searchQuery}
        />
        <div
          aria-hidden="true"
          className="non-selectable pointer-events-none absolute inset-0 flex items-center pr-[56px] pl-[22px] text-[14px] leading-none font-bold"
        >
          {searchQuery.length === 0 ? (
            <span className="min-w-0 truncate text-[var(--text-muted)]">
              Busca cliente, membresia, productos...
            </span>
          ) : (
            <span className="flex min-w-0 max-w-full overflow-hidden text-[var(--text-primary)]">
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
          className="pointer-events-none absolute top-1/2 right-[22px] z-20 -translate-y-1/2 text-[var(--text-muted)]"
          size={18}
          strokeWidth={2.25}
        />
      </motion.div>
      <motion.button
        aria-label={isLightTheme ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
        aria-pressed={isLightTheme}
        className="relative ml-auto flex h-[40px] w-[70px] shrink-0 items-center justify-between rounded-[50px] border-0 bg-[var(--surface)] px-[8px] text-[var(--text-muted)] transition-colors duration-200"
        layout
        onClick={onThemeToggle}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        type="button"
      >
        <motion.span
          className="absolute top-[6px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[var(--switch-thumb)] text-[var(--switch-thumb-text)]"
          animate={{ x: isLightTheme ? 26 : 0 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          {isLightTheme ? (
            <Sun aria-hidden="true" size={15} strokeWidth={2.5} />
          ) : (
            <Moon aria-hidden="true" size={15} strokeWidth={2.5} />
          )}
        </motion.span>
        <Moon
          aria-hidden="true"
          className={isLightTheme ? 'translate-x-[3px]' : ''}
          size={15}
          strokeWidth={2.25}
        />
        <Sun
          aria-hidden="true"
          className={!isLightTheme ? '-translate-x-[3px]' : ''}
          size={15}
          strokeWidth={2.25}
        />
      </motion.button>
    </header>
  );
}
