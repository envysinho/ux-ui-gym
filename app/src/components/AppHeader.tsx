import { motion } from 'framer-motion';

type AppHeaderProps = {
  currentPage: string;
};

export function AppHeader({ currentPage }: AppHeaderProps) {
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
        className="h-[40px] min-w-[280px] max-w-[820px] flex-1 rounded-[50px] bg-[#181818]"
        layout
        transition={{ duration: 0.22, ease: 'easeOut' }}
      />
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
