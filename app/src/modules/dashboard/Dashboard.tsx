export function Dashboard() {
  return (
    <div className="mt-[18px] min-h-0 flex-1 pl-[16px]">
      <div className="grid w-full grid-cols-4 gap-[20px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            aria-hidden="true"
            className="h-[120px] rounded-[20px] bg-[var(--surface-strong)] transition-colors duration-200"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
