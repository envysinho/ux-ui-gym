type LogoLockupProps = {
  className?: string;
  size?: 'sidebar';
};

export function LogoLockup({ className = '', size = 'sidebar' }: LogoLockupProps) {
  return (
    <div
      className={`logo-lockup logo-lockup--${size} non-selectable ${className}`.trim()}
      onCopy={(event) => event.preventDefault()}
      onMouseDown={(event) => event.preventDefault()}
      onSelect={(event) => event.preventDefault()}
    >
      <span className="logo-lockup-name">mclub</span>
      <span className="logo-lockup-tag">gym</span>
    </div>
  );
}
