import {
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Phone,
  Plus,
  UserRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const clientStats = [
  { label: 'Clientes activos', value: '126' },
  { label: 'Por vencer', value: '18' },
  { label: 'Vencidos', value: '9' },
  { label: 'Sin membresia', value: '14' },
];

const clients = [
  {
    id: 'CLI-001',
    name: 'Andrea Salazar',
    phone: '987 456 210',
    plan: 'Plan mensual',
    status: 'Activa',
    statusTone: 'active',
    endDate: '28 Feb',
    lastVisit: 'Hoy, 7:20 am',
  },
  {
    id: 'CLI-002',
    name: 'Marco Rivas',
    phone: 'Sin telefono',
    plan: 'Plan quincenal',
    status: 'Por vencer',
    statusTone: 'warning',
    endDate: '02 Mar',
    lastVisit: 'Ayer, 6:10 pm',
  },
  {
    id: 'CLI-003',
    name: 'Camila Torres',
    phone: '921 654 330',
    plan: 'Sin plan actual',
    status: 'Vencida',
    statusTone: 'danger',
    endDate: '14 Feb',
    lastVisit: 'Hace 5 dias',
  },
  {
    id: 'CLI-004',
    name: 'Diego Mendoza',
    phone: '955 112 809',
    plan: 'Plan promocional',
    status: 'Programada',
    statusTone: 'pending',
    endDate: '18 Mar',
    lastVisit: 'Sin visitas',
  },
];

const statusStyles = {
  active: 'bg-[#1e3a2a] text-[#85f0a3]',
  warning: 'bg-[#3a3320] text-[#ffd57a]',
  danger: 'bg-[#3a2024] text-[#ff8b96]',
  pending: 'bg-[#202d3a] text-[#8cc8ff]',
};

export function Clients() {
  const selectedClient = clients[0];

  return (
    <div className="mt-[18px] flex min-h-0 flex-1 flex-col pl-[16px]">
      <div className="grid w-full grid-cols-4 gap-[20px]">
        {clientStats.map((stat) => (
          <div
            className="flex h-[120px] flex-col justify-between rounded-[20px] bg-[var(--surface)] p-[20px] transition-colors duration-200"
            key={stat.label}
          >
            <span className="text-[13px] leading-none font-bold text-[var(--text-muted)]">
              {stat.label}
            </span>
            <strong className="text-[34px] leading-none font-bold text-[var(--text-primary)]">
              {stat.value}
            </strong>
          </div>
        ))}
      </div>

      <div className="mt-[20px] grid min-h-[420px] flex-1 grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] gap-[20px]">
        <section className="min-h-0 rounded-[36px] bg-[var(--surface)] p-[24px] transition-colors duration-200">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="m-0 text-[22px] leading-none font-bold text-[var(--text-primary)]">
                Clientes
              </h2>
              <p className="mt-2 mb-0 text-[13px] font-semibold text-[var(--text-muted)]">
                Membresias, telefonos y ultima visita
              </p>
            </div>
            <button
              aria-label="Nuevo cliente"
              className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-0 bg-[var(--text-primary)] text-[var(--switch-thumb-text)]"
              type="button"
            >
              <Plus aria-hidden="true" size={21} strokeWidth={2.5} />
            </button>
          </div>

          <div className="mt-[24px] flex flex-col gap-[10px]">
            {clients.map((client) => (
              <button
                className="grid h-[76px] grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-[14px] rounded-[20px] border-0 bg-[var(--surface-strong)] px-[14px] text-left transition-colors duration-200"
                key={client.id}
                type="button"
              >
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[var(--surface-active)] text-[var(--text-primary)]">
                  <UserRound aria-hidden="true" size={19} strokeWidth={2.25} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-bold text-[var(--text-primary)]">
                    {client.name}
                  </span>
                  <span className="mt-1 block truncate text-[12px] font-semibold text-[var(--text-muted)]">
                    {client.plan} - vence {client.endDate}
                  </span>
                </span>
                <span
                  className={`rounded-full px-[10px] py-[6px] text-[11px] leading-none font-bold ${
                    statusStyles[client.statusTone as keyof typeof statusStyles]
                  }`}
                >
                  {client.status}
                </span>
              </button>
            ))}
          </div>
        </section>

        <aside className="min-h-0 rounded-[36px] bg-[var(--surface)] p-[24px] transition-colors duration-200">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-[14px]">
              <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[var(--surface-active)] text-[var(--text-primary)]">
                <UserRound aria-hidden="true" size={24} strokeWidth={2.25} />
              </span>
              <div className="min-w-0">
                <h2 className="m-0 truncate text-[22px] leading-tight font-bold text-[var(--text-primary)]">
                  {selectedClient.name}
                </h2>
                <p className="mt-1 mb-0 text-[13px] font-semibold text-[var(--text-muted)]">
                  {selectedClient.id}
                </p>
              </div>
            </div>

            <div className="mt-[28px] grid gap-[10px]">
              <ClientDetailRow
                icon={Phone}
                label="Telefono"
                value={selectedClient.phone}
              />
              <ClientDetailRow
                icon={CheckCircle2}
                label="Membresia"
                value={selectedClient.plan}
              />
              <ClientDetailRow
                icon={CalendarDays}
                label="Vencimiento"
                value={selectedClient.endDate}
              />
              <ClientDetailRow
                icon={Clock3}
                label="Ultima visita"
                value={selectedClient.lastVisit}
              />
            </div>

            <div className="mt-auto rounded-[24px] bg-[var(--surface-strong)] p-[18px]">
              <div className="flex items-start gap-[12px]">
                <CircleAlert
                  aria-hidden="true"
                  className="mt-[2px] shrink-0 text-[#ffd57a]"
                  size={20}
                  strokeWidth={2.25}
                />
                <div>
                  <p className="m-0 text-[14px] leading-snug font-bold text-[var(--text-primary)]">
                    Sugerencia de accion
                  </p>
                  <p className="mt-2 mb-0 text-[13px] leading-relaxed font-semibold text-[var(--text-muted)]">
                    Confirmar asistencia reciente y ofrecer renovacion anticipada
                    si paga por Yape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

type ClientDetailRowProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

function ClientDetailRow({
  icon: Icon,
  label,
  value,
}: ClientDetailRowProps) {
  return (
    <div className="flex h-[64px] items-center gap-[12px] rounded-[18px] bg-[var(--surface-strong)] px-[14px]">
      <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--surface-active)] text-[var(--text-primary)]">
        <Icon aria-hidden="true" size={17} strokeWidth={2.25} />
      </span>
      <div className="min-w-0">
        <span className="block text-[11px] leading-none font-bold text-[var(--text-muted)]">
          {label}
        </span>
        <span className="mt-[7px] block truncate text-[14px] leading-none font-bold text-[var(--text-primary)]">
          {value}
        </span>
      </div>
    </div>
  );
}
