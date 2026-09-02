import { useMemo, useState } from 'react';
import {
  Bell,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  Eye,
  MoreVertical,
  PenLine,
  Phone,
  QrCode,
  ReceiptText,
  RefreshCcw,
  SearchX,
  ShieldAlert,
  ShoppingCart,
  UserPlus,
  Users,
} from 'lucide-react';

type ClientStatus = 'Activo' | 'Por vencer' | 'Vencido' | 'Sin membresia' | 'Desactivado';

type Client = {
  id: string;
  initials: string;
  name: string;
  phone: string | null;
  documentId: string;
  plan: string | null;
  expiresAt: string | null;
  lastVisit: string | null;
  status: ClientStatus;
  daysLeft: number | null;
  enabled: boolean;
  visits: string[];
  movements: Array<{
    label: string;
    detail: string;
    amount?: string;
  }>;
};

const clients: Client[] = [
  {
    id: 'c-001',
    initials: 'JP',
    name: 'Juan Perez',
    phone: '+51 912 345 678',
    documentId: 'DNI 71876543',
    plan: 'Mensual',
    expiresAt: '04 sep 2026',
    lastVisit: 'Hoy, 08:45 AM',
    status: 'Activo',
    daysLeft: 122,
    enabled: true,
    visits: ['Hoy, 08:45 AM', 'Ayer, 07:12 PM', '02 sep, 06:33 PM', '30 ago, 07:01 AM'],
    movements: [
      { label: 'Venta: Batido proteina 1kg', detail: 'Hoy, 08:47 AM', amount: 'S/ 95' },
      { label: 'Pago membresia Mensual', detail: '04 may, 09:02 AM', amount: 'S/ 120' },
      { label: 'Check-in', detail: 'Hoy, 08:45 AM' },
    ],
  },
  {
    id: 'c-002',
    initials: 'LM',
    name: 'Laura Mendez',
    phone: '+51 923 456 789',
    documentId: 'DNI 70658912',
    plan: 'Trimestral',
    expiresAt: '08 sep 2026',
    lastVisit: 'Ayer, 07:12 PM',
    status: 'Por vencer',
    daysLeft: 6,
    enabled: true,
    visits: ['Ayer, 07:12 PM', '31 ago, 06:48 PM', '29 ago, 08:08 AM'],
    movements: [
      { label: 'Renovacion trimestral', detail: '08 jun, 06:12 PM', amount: 'S/ 300' },
      { label: 'Recordatorio enviado', detail: 'Hoy, 09:10 AM' },
    ],
  },
  {
    id: 'c-003',
    initials: 'CR',
    name: 'Carlos Ramirez',
    phone: '+51 934 567 890',
    documentId: 'DNI 74321890',
    plan: 'Mensual',
    expiresAt: '15 ago 2026',
    lastVisit: '02 ago, 06:33 PM',
    status: 'Vencido',
    daysLeft: -18,
    enabled: true,
    visits: ['02 ago, 06:33 PM', '29 jul, 07:42 PM', '22 jul, 06:18 PM'],
    movements: [
      { label: 'Membresia vencida', detail: '15 ago, 11:59 PM' },
      { label: 'Pago membresia Mensual', detail: '15 jul, 08:33 AM', amount: 'S/ 120' },
    ],
  },
  {
    id: 'c-004',
    initials: 'AS',
    name: 'Ana Soto',
    phone: '+51 945 678 901',
    documentId: 'DNI 75890124',
    plan: 'Semestral',
    expiresAt: '12 oct 2026',
    lastVisit: 'Hoy, 07:05 AM',
    status: 'Activo',
    daysLeft: 40,
    enabled: true,
    visits: ['Hoy, 07:05 AM', '01 sep, 07:01 AM', '30 ago, 07:13 AM'],
    movements: [
      { label: 'Pago membresia Semestral', detail: '12 abr, 07:52 AM', amount: 'S/ 540' },
      { label: 'Check-in', detail: 'Hoy, 07:05 AM' },
    ],
  },
  {
    id: 'c-005',
    initials: 'DG',
    name: 'Diana Gonzalez',
    phone: null,
    documentId: 'DNI 76901235',
    plan: null,
    expiresAt: null,
    lastVisit: '10 abr, 11:20 AM',
    status: 'Sin membresia',
    daysLeft: null,
    enabled: true,
    visits: ['10 abr, 11:20 AM'],
    movements: [
      { label: 'Cliente creado', detail: '10 abr, 11:10 AM' },
      { label: 'Venta: Agua mineral', detail: '10 abr, 11:24 AM', amount: 'S/ 4' },
    ],
  },
  {
    id: 'c-006',
    initials: 'MR',
    name: 'Marco Ruiz',
    phone: '+51 967 890 123',
    documentId: 'DNI 70123456',
    plan: 'Mensual',
    expiresAt: '28 abr 2026',
    lastVisit: null,
    status: 'Desactivado',
    daysLeft: -127,
    enabled: false,
    visits: [],
    movements: [
      { label: 'Cliente desactivado', detail: '30 abr, 05:30 PM' },
      { label: 'Membresia cancelada', detail: '28 abr, 10:12 AM' },
    ],
  },
];

const filters = ['Todos', 'Activos', 'Por vencer', 'Vencidos', 'Sin membresia'] as const;

const statusStyles: Record<ClientStatus, string> = {
  Activo: 'border-lime-400/25 bg-lime-400/10 text-lime-300',
  'Por vencer': 'border-amber-400/25 bg-amber-400/10 text-amber-300',
  Vencido: 'border-red-400/25 bg-red-400/10 text-red-300',
  'Sin membresia': 'border-white/10 bg-white/7 text-[var(--text-soft)]',
  Desactivado: 'border-white/10 bg-white/7 text-[var(--text-muted)]',
};

const kpis = [
  {
    icon: Users,
    label: 'Clientes activos',
    value: '842',
    helper: '+5.2% este mes',
    tone: 'from-lime-500 to-emerald-400',
  },
  {
    icon: CalendarClock,
    label: 'Por vencer',
    value: '18',
    helper: 'en 7 dias',
    tone: 'from-amber-400 to-orange-500',
  },
  {
    icon: ShieldAlert,
    label: 'Vencidos',
    value: '36',
    helper: 'requieren accion',
    tone: 'from-red-500 to-rose-400',
  },
  {
    icon: SearchX,
    label: 'Sin membresia',
    value: '54',
    helper: 'prospectos activos',
    tone: 'from-slate-500 to-zinc-400',
  },
];

function getFilteredClients(activeFilter: (typeof filters)[number]) {
  if (activeFilter === 'Todos') {
    return clients;
  }

  if (activeFilter === 'Activos') {
    return clients.filter(({ status }) => status === 'Activo');
  }

  if (activeFilter === 'Vencidos') {
    return clients.filter(({ status }) => status === 'Vencido');
  }

  return clients.filter(({ status }) => status === activeFilter);
}

export function Clients() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('Todos');
  const [selectedClientId, setSelectedClientId] = useState(clients[0].id);

  const filteredClients = useMemo(() => getFilteredClients(activeFilter), [activeFilter]);
  const selectedClient =
    clients.find(({ id }) => id === selectedClientId) ?? filteredClients[0] ?? clients[0];

  return (
    <div className="mt-[18px] flex min-h-0 flex-1 flex-col overflow-hidden pl-[16px]">
      <div className="grid w-full grid-cols-4 gap-[20px]">
        {kpis.map(({ icon: Icon, label, value, helper, tone }) => (
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
              <p className="mt-[12px] truncate text-[13px] leading-none font-semibold text-[var(--text-soft)]">
                {helper}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-[20px] grid min-h-0 flex-1 grid-cols-[minmax(680px,1.24fr)_minmax(390px,0.76fr)] gap-[20px]">
        <section className="flex min-h-0 flex-col rounded-[28px] border border-white/5 bg-[var(--surface)] p-[18px] text-[var(--text-primary)] transition-colors duration-200">
          <div className="flex items-start justify-between gap-[18px]">
            <div className="min-w-0">
              <h2 className="text-[18px] leading-none font-bold">Directorio de clientes</h2>
              <div className="mt-[22px] flex flex-wrap gap-[10px]">
                {filters.map((filter) => (
                  <button
                    className={`rounded-[12px] px-[12px] py-[8px] text-[12px] font-bold transition ${
                      activeFilter === filter
                        ? 'bg-cyan-400 text-black'
                        : 'bg-white/[0.03] text-[var(--text-soft)] hover:bg-white/7'
                    }`}
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="flex h-[44px] shrink-0 items-center gap-[8px] rounded-[14px] bg-cyan-400 px-[16px] text-[13px] font-bold text-black shadow-[0_14px_30px_rgb(34_211_238/0.2)]"
              type="button"
            >
              <UserPlus aria-hidden="true" size={17} strokeWidth={2.4} />
              Nuevo cliente
            </button>
          </div>

          <div className="mt-[18px] min-h-0 flex-1 overflow-hidden rounded-[18px] border border-white/7">
            <div className="grid grid-cols-[minmax(180px,1.25fr)_120px_minmax(92px,0.7fr)_112px_126px_104px_96px] items-center gap-[12px] border-b border-white/7 bg-white/[0.03] px-[14px] py-[13px] text-[11px] font-bold text-[var(--text-soft)]">
              <span>Cliente</span>
              <span>Telefono</span>
              <span>Plan</span>
              <span>Vencimiento</span>
              <span>Ultima visita</span>
              <span>Estado</span>
              <span className="text-right">Acciones</span>
            </div>
            <div className="min-h-0 overflow-auto">
              {filteredClients.map((client) => (
                <button
                  className={`grid w-full grid-cols-[minmax(180px,1.25fr)_120px_minmax(92px,0.7fr)_112px_126px_104px_96px] items-center gap-[12px] border-b border-white/7 px-[14px] py-[13px] text-left transition last:border-b-0 ${
                    selectedClient.id === client.id ? 'bg-white/[0.07]' : 'hover:bg-white/[0.035]'
                  }`}
                  key={client.id}
                  onClick={() => setSelectedClientId(client.id)}
                  type="button"
                >
                  <span className="flex min-w-0 items-center gap-[12px]">
                    <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-cyan-400/12 text-[13px] font-bold text-cyan-300">
                      {client.initials}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[13px] font-bold text-[var(--text-primary)]">
                        {client.name}
                      </span>
                      <span className="mt-[3px] block truncate text-[11px] font-semibold text-[var(--text-muted)]">
                        {client.documentId}
                      </span>
                    </span>
                  </span>
                  <span className="truncate text-[12px] font-semibold text-[var(--text-soft)]">
                    {client.phone ?? 'Sin telefono'}
                  </span>
                  <span className="truncate text-[12px] font-semibold text-[var(--text-primary)]">
                    {client.plan ?? '-'}
                  </span>
                  <span className="truncate text-[12px] font-semibold text-[var(--text-soft)]">
                    {client.expiresAt ?? '-'}
                  </span>
                  <span className="truncate text-[12px] font-semibold text-[var(--text-soft)]">
                    {client.lastVisit ?? '-'}
                  </span>
                  <span className={`w-fit rounded-[8px] border px-[8px] py-[5px] text-[11px] font-bold ${statusStyles[client.status]}`}>
                    {client.status}
                  </span>
                  <span className="flex justify-end gap-[8px] text-[var(--text-soft)]">
                    <Eye aria-hidden="true" size={17} strokeWidth={2.1} />
                    <PenLine aria-hidden="true" size={17} strokeWidth={2.1} />
                    <MoreVertical aria-hidden="true" size={17} strokeWidth={2.1} />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-[14px] flex items-center justify-between gap-[18px] text-[12px] font-semibold text-[var(--text-soft)]">
            <span>
              Mostrando {filteredClients.length} de {clients.length} clientes
            </span>
            <div className="flex items-center gap-[8px]">
              <button className="h-[36px] w-[36px] rounded-[10px] border border-white/10 bg-white/[0.03]" type="button">
                1
              </button>
              <button className="rounded-[10px] border border-white/10 bg-white/[0.03] px-[12px] py-[10px]" type="button">
                10 por pagina
              </button>
            </div>
          </div>
        </section>

        <aside className="flex min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/5 bg-[var(--surface)] p-[20px] text-[var(--text-primary)] transition-colors duration-200">
          <div className="flex items-start justify-between gap-[16px]">
            <div className="flex min-w-0 items-center gap-[14px]">
              <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border border-lime-400/45 bg-lime-400/12 text-[24px] font-bold text-lime-300">
                {selectedClient.initials}
              </div>
              <div className="min-w-0">
                <h2 className="truncate text-[20px] leading-tight font-bold">{selectedClient.name}</h2>
                <p className="mt-[7px] flex items-center gap-[7px] truncate text-[12px] font-semibold text-[var(--text-soft)]">
                  <Phone aria-hidden="true" size={14} strokeWidth={2.2} />
                  {selectedClient.phone ?? 'Sin telefono registrado'}
                </p>
                <p className="mt-[5px] truncate text-[12px] font-semibold text-[var(--text-soft)]">
                  {selectedClient.documentId}
                </p>
              </div>
            </div>
            <span className={`shrink-0 rounded-[8px] border px-[9px] py-[5px] text-[11px] font-bold ${statusStyles[selectedClient.status]}`}>
              {selectedClient.status}
            </span>
          </div>

          <div className="mt-[22px] grid grid-cols-[minmax(0,1fr)_116px] gap-[16px] border-t border-white/7 pt-[18px]">
            <div>
              <p className="flex items-center gap-[8px] text-[14px] font-bold text-lime-300">
                <CheckCircle2 aria-hidden="true" size={17} strokeWidth={2.2} />
                {selectedClient.status === 'Activo' || selectedClient.status === 'Por vencer'
                  ? 'Membresia activa'
                  : 'Membresia no activa'}
              </p>
              <dl className="mt-[16px] grid grid-cols-[105px_minmax(0,1fr)] gap-y-[11px] text-[13px]">
                <dt className="font-semibold text-[var(--text-soft)]">Plan</dt>
                <dd className="truncate font-bold">{selectedClient.plan ?? '-'}</dd>
                <dt className="font-semibold text-[var(--text-soft)]">Vence</dt>
                <dd className="truncate font-bold">{selectedClient.expiresAt ?? '-'}</dd>
                <dt className="font-semibold text-[var(--text-soft)]">Dias restantes</dt>
                <dd className="truncate font-bold">
                  {selectedClient.daysLeft === null ? '-' : `${selectedClient.daysLeft} dias`}
                </dd>
                <dt className="font-semibold text-[var(--text-soft)]">Ultima visita</dt>
                <dd className="truncate font-bold">{selectedClient.lastVisit ?? '-'}</dd>
              </dl>
            </div>

            <div className="rounded-[16px] border border-white/8 bg-white/[0.03] p-[12px] text-center">
              <QrCode aria-hidden="true" className="mx-auto text-[var(--text-primary)]" size={64} strokeWidth={1.7} />
              <p className="mt-[10px] text-[11px] font-bold text-[var(--text-soft)]">QR / Acceso</p>
              <p className={`mt-[8px] rounded-[8px] px-[8px] py-[6px] text-[11px] font-bold ${selectedClient.enabled ? 'bg-lime-400/10 text-lime-300' : 'bg-red-400/10 text-red-300'}`}>
                {selectedClient.enabled ? 'Habilitado' : 'Bloqueado'}
              </p>
            </div>
          </div>

          <div className="mt-[18px] grid grid-cols-3 gap-[10px]">
            {[
              { icon: RefreshCcw, label: 'Renovar', active: true },
              { icon: Bell, label: 'Recordatorio', active: false },
              { icon: ShoppingCart, label: 'Venta', active: false },
            ].map(({ icon: Icon, label, active }) => (
              <button
                className={`flex h-[42px] items-center justify-center gap-[8px] rounded-[12px] text-[12px] font-bold ${
                  active
                    ? 'bg-cyan-400 text-black'
                    : 'border border-white/10 bg-white/[0.03] text-[var(--text-primary)]'
                }`}
                key={label}
                type="button"
              >
                <Icon aria-hidden="true" size={15} strokeWidth={2.35} />
                {label}
              </button>
            ))}
          </div>

          <div className="mt-[18px] grid min-h-0 flex-1 grid-cols-2 gap-[18px] border-t border-white/7 pt-[18px]">
            <section className="min-w-0">
              <h3 className="text-[14px] font-bold">Ultimas visitas</h3>
              <div className="mt-[14px] space-y-[13px]">
                {selectedClient.visits.length > 0 ? (
                  selectedClient.visits.map((visit) => (
                    <p className="flex items-center gap-[9px] truncate text-[12px] font-semibold text-[var(--text-soft)]" key={visit}>
                      <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-lime-400" />
                      {visit}
                    </p>
                  ))
                ) : (
                  <p className="text-[12px] font-semibold text-[var(--text-muted)]">Sin visitas registradas</p>
                )}
              </div>
            </section>

            <section className="min-w-0 border-l border-white/7 pl-[18px]">
              <h3 className="text-[14px] font-bold">Movimientos recientes</h3>
              <div className="mt-[14px] space-y-[14px]">
                {selectedClient.movements.map(({ label, detail, amount }) => (
                  <div className="flex gap-[10px]" key={`${label}-${detail}`}>
                    <ReceiptText aria-hidden="true" className="mt-[1px] shrink-0 text-cyan-300" size={16} strokeWidth={2.2} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12px] font-bold">{label}</p>
                      <p className="mt-[3px] truncate text-[11px] font-semibold text-[var(--text-soft)]">{detail}</p>
                    </div>
                    {amount ? <span className="shrink-0 text-[12px] font-bold">{amount}</span> : null}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
}
