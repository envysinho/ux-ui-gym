export function Memberships() {
  return (
    <div className="mt-[18px] flex min-h-0 flex-1 gap-[20px] pl-[16px]">
      <section className="flex min-h-0 min-w-0 flex-[1.15_1_0] flex-col">
        <ul
          aria-hidden="true"
          className="flex min-h-0 flex-1 flex-col gap-[20px] overflow-y-auto pr-[4px]"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              className="min-h-[116px] flex-1 rounded-[20px] bg-[var(--surface)] transition-colors duration-200"
              key={index}
            />
          ))}
        </ul>
      </section>
      <section
        aria-hidden="true"
        className="min-h-0 min-w-[360px] flex-[0.85_1_0] rounded-[36px] bg-[var(--surface)] transition-colors duration-200"
      />
    </div>
  );
}
