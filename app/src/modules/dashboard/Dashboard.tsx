export function Dashboard() {
  return (
    <div className="mt-[18px] flex min-h-0 flex-1 flex-col pl-[16px]">
      <div className="grid w-full grid-cols-4 gap-[20px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            aria-hidden="true"
            className="h-[120px] rounded-[20px] bg-[var(--surface)] transition-colors duration-200"
            key={index}
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="mt-[20px] min-h-[420px] flex-1 rounded-[36px] bg-[var(--surface)] transition-colors duration-200"
      />
    </div>
  );
}
