import {
  CalendarClock,
  ChartNoAxesColumn,
  Check,
  CircleDollarSign,
  QrCode,
  ShoppingCart,
  UserPlus,
  Users,
  Wallet,
} from 'lucide-react';

const kpis = [
  {
    icon: Users,
    label: 'Clientes activos',
    value: '842',
    change: '+5.2%',
    helper: 'vs ayer',
    tone: 'from-sky-500 to-cyan-400',
  },
  {
    icon: CircleDollarSign,
    label: 'Ingresos hoy',
    value: '$3,420',
    change: '+12.8%',
    helper: 'vs ayer',
    tone: 'from-lime-500 to-emerald-400',
  },
  {
    icon: Check,
    label: 'Check-ins hoy',
    value: '126',
    change: '+8.6%',
    helper: 'vs ayer',
    tone: 'from-cyan-500 to-blue-500',
  },
  {
    icon: CalendarClock,
    label: 'Membresias por vencer',
    value: '18',
    change: '-3',
    helper: 'vs ayer',
    tone: 'from-amber-400 to-orange-500',
  },
];

const weeklyRevenue = [
  { day: 'Lun', amount: 2450, visits: 65 },
  { day: 'Mar', amount: 3160, visits: 75 },
  { day: 'Mie', amount: 2980, visits: 67 },
  { day: 'Jue', amount: 3870, visits: 104 },
  { day: 'Vie', amount: 4560, visits: 118 },
  { day: 'Sab', amount: 5210, visits: 146 },
  { day: 'Dom', amount: 3420, visits: 112 },
];

const recentAccess = [
  { initials: 'JP', name: 'Juan Perez', time: 'Hoy, 08:45 AM', status: 'Permitido', tone: 'text-lime-400' },
  { initials: 'LM', name: 'Laura Mendez', time: 'Hoy, 08:32 AM', status: 'Permitido', tone: 'text-lime-400' },
  { initials: 'CR', name: 'Carlos Ramirez', time: 'Hoy, 07:58 AM', status: 'Permitido', tone: 'text-lime-400' },
  { initials: 'AS', name: 'Ana Soto', time: 'Hoy, 07:41 AM', status: 'Invitado', tone: 'text-amber-400' },
  { initials: 'DG', name: 'Diana Gonzalez', time: 'Hoy, 06:55 AM', status: 'Denegado', tone: 'text-red-400' },
];

const quickActions = [
  { icon: ShoppingCart, title: 'Registrar venta', subtitle: 'Nueva venta rapida' },
  { icon: QrCode, title: 'Validar acceso', subtitle: 'Escanear QR' },
  { icon: UserPlus, title: 'Nuevo cliente', subtitle: 'Registrar cliente' },
  { icon: Wallet, title: 'Corte de caja', subtitle: 'Cerrar turno' },
];

const inventoryAlerts = [
  { product: 'Proteina Whey 1kg', stock: 3, minimum: 5, level: 'Critico', tone: 'bg-red-500/15 text-red-300' },
  { product: 'Barra energetica', stock: 7, minimum: 10, level: 'Bajo', tone: 'bg-amber-500/15 text-amber-300' },
  { product: 'Shaker 700ml', stock: 9, minimum: 15, level: 'Bajo', tone: 'bg-amber-500/15 text-amber-300' },
];

const maxAmount = Math.max(...weeklyRevenue.map(({ amount }) => amount));

function formatCurrency(value: number) {
  return `$${value.toLocaleString('en-US')}`;
}

export function Dashboard() {
  return (
    <div className="mt-[18px] flex min-h-0 flex-1 flex-col overflow-hidden pl-[16px]">
      <div className="grid w-full grid-cols-4 gap-[20px]">
        {kpis.map(({ icon: Icon, label, value, change, helper, tone }) => (
          <section
            className="flex h-[120px] min-w-0 items-center gap-[18px] rounded-[20px] border border-white/5 bg-[var(--surface)] px-[22px] text-[var(--text-primary)] shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] transition-colors duration-200"
            key={label}
          >
            <div className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tone} text-white`}>
              <Icon aria-hidden="true" size={28} strokeWidth={2.35} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[14px] leading-none font-semibold text-[var(--text-soft)]">
                {label}
              </p>
              <strong className="mt-[10px] block truncate text-[30px] leading-none font-bold">
                {value}
              </strong>
              <p className="mt-[12px] text-[13px] leading-none font-semibold">
                <span className={change.startsWith('-') ? 'text-amber-300' : 'text-lime-400'}>
                  {change}
                </span>{' '}
                <span className="text-[var(--text-soft)]">{helper}</span>
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-[20px] grid min-h-0 flex-1 grid-cols-[minmax(460px,1.22fr)_minmax(300px,0.76fr)_minmax(360px,1fr)] gap-[20px]">
        <section className="flex min-h-0 flex-col rounded-[28px] border border-white/5 bg-[var(--surface)] p-[22px] text-[var(--text-primary)] transition-colors duration-200">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[18px] leading-none font-bold">Ingresos de la semana</h2>
            <button className="rounded-[12px] border border-white/10 bg-white/3 px-[14px] py-[9px] text-[12px] font-semibold text-[var(--text-soft)]" type="button">
              Esta semana
            </button>
          </div>

          <div className="mt-[24px] flex items-center gap-[18px] text-[12px] font-semibold text-[var(--text-soft)]">
            <span className="flex items-center gap-[8px]">
              <span className="h-[10px] w-[10px] rounded-full bg-cyan-400" />
              Ingresos (MXN)
            </span>
            <span className="flex items-center gap-[8px]">
              <span className="h-[10px] w-[10px] rounded-full bg-slate-500" />
              Check-ins
            </span>
          </div>

          <div className="mt-[20px] grid min-h-[240px] flex-1 grid-cols-[44px_minmax(0,1fr)] grid-rows-[1fr_28px]">
            <div className="flex flex-col justify-between pb-[28px] text-[11px] font-semibold text-[var(--text-soft)]">
              <span>$6,000</span>
              <span>$4,500</span>
              <span>$3,000</span>
              <span>$1,500</span>
              <span>$0</span>
            </div>
            <div className="relative flex items-end justify-between gap-[12px] border-b border-l border-white/10 px-[18px]">
              <div className="absolute inset-x-[18px] top-0 bottom-0 grid grid-rows-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <span className="border-t border-white/7" key={index} />
                ))}
              </div>
              {weeklyRevenue.map(({ day, amount, visits }) => (
                <div className="relative z-10 flex h-full flex-1 flex-col justify-end" key={day}>
                  <span className="mb-[8px] text-center text-[11px] font-semibold text-[var(--text-soft)]">
                    {formatCurrency(amount)}
                  </span>
                  <div
                    className="mx-auto w-full max-w-[26px] rounded-t-[4px] bg-gradient-to-t from-cyan-500 to-cyan-300/85"
                    style={{ height: `${Math.max(28, (amount / maxAmount) * 165)}px` }}
                  />
                  <span
                    className="absolute left-1/2 h-[9px] w-[9px] -translate-x-1/2 rounded-full border-2 border-[var(--surface)] bg-white"
                    style={{ bottom: `${Math.max(36, visits * 1.02)}px` }}
                  />
                </div>
              ))}
            </div>
            <div />
            <div className="grid grid-cols-7 gap-[12px] px-[18px] pt-[10px] text-center text-[11px] font-semibold text-[var(--text-soft)]">
              {weeklyRevenue.map(({ day }) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>

          <div className="mt-[18px] grid grid-cols-3 gap-[18px] border-t border-white/7 pt-[18px]">
            {[
              ['Total semana', '$25,650', '+10.4% vs semana anterior'],
              ['Transacciones', '862', '+9.1% vs semana anterior'],
              ['Ticket promedio', '$29.77', '+1.3% vs semana anterior'],
            ].map(([label, value, helper]) => (
              <div className="min-w-0" key={label}>
                <p className="truncate text-[12px] font-semibold text-[var(--text-soft)]">{label}</p>
                <strong className="mt-[6px] block truncate text-[24px] leading-none">{value}</strong>
                <p className="mt-[8px] truncate text-[11px] font-semibold text-lime-400">{helper}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex min-h-0 flex-col rounded-[28px] border border-white/5 bg-[var(--surface)] text-[var(--text-primary)] transition-colors duration-200">
          <div className="flex items-center justify-between border-b border-white/7 px-[18px] py-[18px]">
            <h2 className="text-[18px] leading-none font-bold">Accesos recientes</h2>
            <button className="text-[12px] font-bold text-cyan-400" type="button">Ver todos</button>
          </div>
          <div className="min-h-0 flex-1">
            {recentAccess.map(({ initials, name, time, status, tone }) => (
              <div className="flex items-center gap-[12px] border-b border-white/7 px-[18px] py-[13px]" key={`${name}-${time}`}>
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-white/10 text-[14px] font-bold">
                  {initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-bold">{name}</p>
                  <p className="mt-[4px] truncate text-[12px] font-semibold text-[var(--text-soft)]">{time}</p>
                </div>
                <span className={`shrink-0 text-[12px] font-bold ${tone}`}>{status}</span>
              </div>
            ))}
          </div>
          <button className="m-[16px] rounded-[14px] bg-cyan-400/10 py-[11px] text-[12px] font-bold text-cyan-300" type="button">
            Ver historial completo
          </button>
        </section>

        <aside className="grid min-h-0 grid-rows-[1fr_auto] gap-[20px]">
          <section className="rounded-[28px] border border-white/5 bg-[var(--surface)] p-[18px] text-[var(--text-primary)] transition-colors duration-200">
            <h2 className="text-[18px] leading-none font-bold">Acciones rapidas</h2>
            <div className="mt-[20px] grid grid-cols-2 gap-[14px]">
              {quickActions.map(({ icon: Icon, title, subtitle }) => (
                <button
                  className="flex h-[116px] flex-col items-center justify-center rounded-[16px] border border-white/8 bg-white/[0.03] text-center transition hover:border-cyan-300/45 hover:bg-cyan-300/8"
                  key={title}
                  type="button"
                >
                  <Icon aria-hidden="true" className="text-cyan-400" size={31} strokeWidth={2.15} />
                  <span className="mt-[14px] text-[14px] font-bold">{title}</span>
                  <span className="mt-[5px] text-[12px] font-semibold text-[var(--text-soft)]">{subtitle}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-white/5 bg-[var(--surface)] p-[18px] text-[var(--text-primary)] transition-colors duration-200">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[18px] leading-none font-bold">Alertas de inventario</h2>
              <button className="text-[12px] font-bold text-cyan-400" type="button">Ver todas</button>
            </div>
            <div className="mt-[14px]">
              {inventoryAlerts.map(({ product, stock, minimum, level, tone }) => (
                <div className="grid grid-cols-[minmax(0,1fr)_70px_76px_62px] items-center gap-[10px] border-b border-white/7 py-[11px] last:border-b-0" key={product}>
                  <span className="truncate text-[13px] font-bold">{product}</span>
                  <span className="text-[12px] font-semibold text-[var(--text-soft)]">Stock: {stock}</span>
                  <span className="text-[12px] font-semibold text-[var(--text-soft)]">Min: {minimum}</span>
                  <span className={`rounded-[8px] px-[8px] py-[5px] text-center text-[11px] font-bold ${tone}`}>{level}</span>
                </div>
              ))}
            </div>
            <button className="mt-[10px] flex w-full items-center justify-center gap-[8px] rounded-[14px] bg-white/[0.03] py-[11px] text-[12px] font-bold text-cyan-300" type="button">
              <ChartNoAxesColumn aria-hidden="true" size={16} strokeWidth={2.2} />
              Ir a inventario
            </button>
          </section>
        </aside>
      </div>
    </div>
  );
}
