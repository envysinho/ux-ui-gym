import { useMemo, useState } from 'react';
import {
  CalendarDays,
  ChartNoAxesColumn,
  Check,
  Copy,
  CreditCard,
  Edit3,
  Filter,
  Infinity,
  MoreVertical,
  Plus,
  ReceiptText,
  RefreshCcw,
  Save,
  SlidersHorizontal,
  Tag,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react';

type PlanStatus = 'Activo' | 'Desactivado';

type Plan = {
  id: string;
  name: string;
  durationDays: number;
  price: number;
  status: PlanStatus;
  salesThisMonth: number;
  revenue: number;
  accent: string;
  description: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: 'plan-monthly',
    name: 'Mensual',
    durationDays: 30,
    price: 120,
    status: 'Activo',
    salesThisMonth: 87,
    revenue: 10440,
    accent: 'from-cyan-500 to-blue-500',
    description: 'Acceso ilimitado al gym, todas las areas y clases grupales.',
    featured: true,
  },
  {
    id: 'plan-biweekly',
    name: 'Quincenal',
    durationDays: 15,
    price: 70,
    status: 'Activo',
    salesThisMonth: 46,
    revenue: 3220,
    accent: 'from-emerald-500 to-teal-400',
    description: 'Plan corto para clientes nuevos o renovaciones flexibles.',
  },
  {
    id: 'plan-quarterly',
    name: 'Trimestral',
    durationDays: 90,
    price: 300,
    status: 'Activo',
    salesThisMonth: 29,
    revenue: 8700,
    accent: 'from-violet-500 to-indigo-500',
    description: 'Mejor precio para clientes constantes durante tres meses.',
  },
  {
    id: 'plan-student',
    name: 'Promo estudiante',
    durationDays: 30,
    price: 95,
    status: 'Activo',
    salesThisMonth: 38,
    revenue: 3610,
    accent: 'from-amber-400 to-yellow-500',
    description: 'Promocion mensual para estudiantes con documento vigente.',
  },
  {
    id: 'plan-semester',
    name: 'Semestral',
    durationDays: 180,
    price: 540,
    status: 'Activo',
    salesThisMonth: 18,
    revenue: 9720,
    accent: 'from-sky-500 to-cyan-400',
    description: 'Plan de permanencia para clientes de alto compromiso.',
  },
  {
    id: 'plan-day',
    name: 'Dia libre',
    durationDays: 1,
    price: 15,
    status: 'Desactivado',
    salesThisMonth: 5,
    revenue: 75,
    accent: 'from-zinc-500 to-neutral-400',
    description: 'Acceso por un dia, usado para visitas puntuales.',
  },
];

const kpis = [
  {
    icon: CalendarDays,
    label: 'Planes activos',
    value: '5',
    helper: 'de 6 totales',
    tone: 'from-cyan-500 to-blue-500',
  },
  {
    icon: ChartNoAxesColumn,
    label: 'Mas vendido',
    value: 'Mensual',
    helper: '35% del total',
    tone: 'from-lime-500 to-emerald-400',
  },
  {
    icon: CreditCard,
    label: 'Ticket promedio',
    value: 'S/ 118',
    helper: 'este mes',
    tone: 'from-sky-500 to-cyan-400',
  },
  {
    icon: Tag,
    label: 'Promos activas',
    value: '2',
    helper: 'vigentes ahora',
    tone: 'from-amber-400 to-orange-500',
  },
];

const commercialRules = [
  { icon: Infinity, label: 'Sin limite de ingresos' },
  { icon: CalendarDays, label: 'Valido desde compra' },
  { icon: RefreshCcw, label: 'Renovable' },
  { icon: CreditCard, label: 'Yape / Efectivo / Mixto' },
];

function formatSoles(value: number) {
  return `S/ ${value.toLocaleString('en-US')}`;
}

export function Memberships() {
  const [selectedPlanId, setSelectedPlanId] = useState(plans[0].id);
  const selectedPlan = useMemo(
    () => plans.find(({ id }) => id === selectedPlanId) ?? plans[0],
    [selectedPlanId],
  );

  return (
    <div className="mt-[18px] flex min-h-0 flex-1 flex-col overflow-hidden pl-[16px]">
      <div className="grid w-full grid-cols-4 gap-[20px]">
        {kpis.map(({ icon: Icon, label, value, helper, tone }) => (
          <section
            className="flex h-[120px] min-w-0 items-center gap-[18px] rounded-[20px] border border-white/5 bg-[var(--surface)] px-[22px] text-[var(--text-primary)] shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] transition-colors duration-200"
            key={label}
          >
            <div className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tone} text-white`}>
              <Icon aria-hidden="true" size={27} strokeWidth={2.3} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[13px] leading-none font-bold text-[var(--text-soft)] uppercase">
                {label}
              </p>
              <strong className="mt-[10px] block truncate text-[29px] leading-none font-bold">
                {value}
              </strong>
              <p className="mt-[12px] truncate text-[13px] leading-none font-semibold text-[var(--text-soft)]">
                {helper}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-[20px] grid min-h-0 flex-1 grid-cols-[minmax(640px,1fr)_minmax(360px,0.35fr)] gap-[20px]">
        <section className="flex min-h-0 flex-col rounded-[28px] border border-white/5 bg-[var(--surface)] p-[18px] text-[var(--text-primary)] transition-colors duration-200">
          <div className="flex items-center justify-between gap-[18px]">
            <div className="min-w-0">
              <h2 className="text-[18px] leading-none font-bold">Catalogo de planes</h2>
              <p className="mt-[8px] truncate text-[12px] font-semibold text-[var(--text-soft)]">
                Configura precios, duracion y disponibilidad comercial.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-[10px]">
              <button className="flex h-[40px] items-center gap-[8px] rounded-[12px] border border-white/10 bg-white/[0.03] px-[13px] text-[12px] font-bold text-[var(--text-soft)]" type="button">
                <SlidersHorizontal aria-hidden="true" size={16} strokeWidth={2.2} />
                Ordenar
              </button>
              <button className="flex h-[40px] items-center gap-[8px] rounded-[12px] border border-white/10 bg-white/[0.03] px-[13px] text-[12px] font-bold text-[var(--text-soft)]" type="button">
                <Filter aria-hidden="true" size={16} strokeWidth={2.2} />
                Filtros
              </button>
              <button className="flex h-[40px] items-center gap-[8px] rounded-[12px] bg-cyan-400 px-[15px] text-[12px] font-bold text-black shadow-[0_14px_30px_rgb(34_211_238/0.18)]" type="button">
                <Plus aria-hidden="true" size={17} strokeWidth={2.4} />
                Nuevo plan
              </button>
            </div>
          </div>

          <div className="mt-[18px] grid min-h-0 flex-1 grid-cols-3 gap-[14px] overflow-auto pr-[2px]">
            {plans.map((plan) => {
              const isSelected = selectedPlan.id === plan.id;
              const isActive = plan.status === 'Activo';

              return (
                <button
                  className={`flex min-h-[184px] min-w-0 flex-col rounded-[18px] border bg-white/[0.025] p-[16px] text-left transition ${
                    isSelected
                      ? 'border-cyan-300/75 shadow-[0_0_0_1px_rgb(34_211_238/0.2)]'
                      : 'border-white/8 hover:border-white/18'
                  }`}
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-[12px]">
                    <div className="flex min-w-0 items-center gap-[12px]">
                      <div className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br ${plan.accent} text-white`}>
                        <CalendarDays aria-hidden="true" size={24} strokeWidth={2.3} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-[18px] leading-none font-bold">{plan.name}</h3>
                        <p className="mt-[7px] truncate text-[12px] font-semibold text-[var(--text-soft)]">
                          {plan.durationDays} {plan.durationDays === 1 ? 'dia' : 'dias'}
                        </p>
                      </div>
                    </div>
                    <span className={`rounded-[8px] border px-[9px] py-[5px] text-[11px] font-bold ${
                      isActive
                        ? 'border-lime-400/25 bg-lime-400/10 text-lime-300'
                        : 'border-white/10 bg-white/7 text-[var(--text-muted)]'
                    }`}>
                      {plan.status}
                    </span>
                  </div>

                  <strong className="mt-[16px] block text-right text-[27px] leading-none font-bold">
                    {formatSoles(plan.price)}
                  </strong>

                  <div className="mt-[18px] grid grid-cols-2 border-y border-white/7 py-[13px]">
                    <div className="min-w-0 border-r border-white/8 text-center">
                      <p className="truncate text-[11px] font-semibold text-[var(--text-soft)]">Ventas este mes</p>
                      <strong className="mt-[6px] block truncate text-[17px] text-cyan-300">
                        {plan.salesThisMonth}
                      </strong>
                    </div>
                    <div className="min-w-0 text-center">
                      <p className="truncate text-[11px] font-semibold text-[var(--text-soft)]">Ingresos</p>
                      <strong className="mt-[6px] block truncate text-[17px] text-cyan-300">
                        {formatSoles(plan.revenue)}
                      </strong>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-[13px] text-[var(--text-soft)]">
                    <Edit3 aria-hidden="true" size={18} strokeWidth={2.2} />
                    <Copy aria-hidden="true" size={18} strokeWidth={2.2} />
                    {isActive ? (
                      <ToggleRight aria-hidden="true" className="text-lime-400" size={30} strokeWidth={2.1} />
                    ) : (
                      <ToggleLeft aria-hidden="true" size={30} strokeWidth={2.1} />
                    )}
                    <MoreVertical aria-hidden="true" size={18} strokeWidth={2.2} />
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-[14px] text-center text-[12px] font-semibold text-[var(--text-soft)]">
            Mostrando 1 a {plans.length} de {plans.length} planes
          </p>
        </section>

        <aside className="grid min-h-0 grid-rows-[minmax(0,1fr)_auto] gap-[14px]">
          <section className="flex min-h-0 flex-col rounded-[28px] border border-white/5 bg-[var(--surface)] p-[18px] text-[var(--text-primary)] transition-colors duration-200">
            <div className="flex items-center justify-between border-b border-white/7 pb-[14px]">
              <h2 className="text-[18px] leading-none font-bold">Editar plan</h2>
              <button className="text-[var(--text-soft)]" type="button">
                <MoreVertical aria-hidden="true" size={18} strokeWidth={2.2} />
              </button>
            </div>

            <div className="mt-[16px] flex items-center justify-between gap-[14px]">
              <div className="flex min-w-0 items-center gap-[12px]">
                <div className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br ${selectedPlan.accent} text-white`}>
                  <CalendarDays aria-hidden="true" size={24} strokeWidth={2.3} />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-[17px] font-bold">{selectedPlan.name}</h3>
                  <p className="mt-[5px] truncate text-[12px] font-semibold text-[var(--text-soft)]">
                    {selectedPlan.durationDays} dias | {formatSoles(selectedPlan.price)}
                  </p>
                </div>
              </div>
              <span className={`rounded-[8px] border px-[9px] py-[5px] text-[11px] font-bold ${
                selectedPlan.status === 'Activo'
                  ? 'border-lime-400/25 bg-lime-400/10 text-lime-300'
                  : 'border-white/10 bg-white/7 text-[var(--text-muted)]'
              }`}>
                {selectedPlan.status}
              </span>
            </div>

            <div className="mt-[18px] space-y-[13px]">
              <label className="block">
                <span className="text-[12px] font-bold text-[var(--text-soft)]">Nombre del plan</span>
                <span className="mt-[7px] block rounded-[10px] border border-white/10 bg-white/[0.03] px-[12px] py-[10px] text-[13px] font-semibold">
                  {selectedPlan.name}
                </span>
              </label>

              <div className="grid grid-cols-2 gap-[10px]">
                <label className="block">
                  <span className="text-[12px] font-bold text-[var(--text-soft)]">Duracion</span>
                  <span className="mt-[7px] block rounded-[10px] border border-white/10 bg-white/[0.03] px-[12px] py-[10px] text-[13px] font-semibold">
                    {selectedPlan.durationDays} dias
                  </span>
                </label>
                <label className="block">
                  <span className="text-[12px] font-bold text-[var(--text-soft)]">Precio</span>
                  <span className="mt-[7px] block rounded-[10px] border border-white/10 bg-white/[0.03] px-[12px] py-[10px] text-[13px] font-semibold">
                    {formatSoles(selectedPlan.price)}
                  </span>
                </label>
              </div>

              {[
                ['Estado', selectedPlan.status === 'Activo'],
                ['Acceso QR habilitado', true],
                ['Renovacion automatica', selectedPlan.featured === true],
              ].map(([label, enabled]) => (
                <div className="flex items-center justify-between gap-[14px]" key={String(label)}>
                  <span className="text-[13px] font-semibold text-[var(--text-soft)]">{label}</span>
                  <span className={`flex h-[24px] w-[42px] items-center rounded-full p-[3px] ${
                    enabled ? 'justify-end bg-cyan-400' : 'justify-start bg-white/12'
                  }`}>
                    <span className="h-[18px] w-[18px] rounded-full bg-white" />
                  </span>
                </div>
              ))}

              <label className="block">
                <span className="text-[12px] font-bold text-[var(--text-soft)]">Descripcion</span>
                <span className="mt-[7px] block min-h-[66px] rounded-[10px] border border-white/10 bg-white/[0.03] px-[12px] py-[10px] text-[13px] leading-[1.4] font-semibold">
                  {selectedPlan.description}
                </span>
              </label>
            </div>

            <div className="mt-auto grid grid-cols-[1fr_auto] gap-[10px] pt-[16px]">
              <button className="flex h-[42px] items-center justify-center gap-[8px] rounded-[12px] bg-cyan-400 text-[12px] font-bold text-black" type="button">
                <Save aria-hidden="true" size={16} strokeWidth={2.35} />
                Guardar cambios
              </button>
              <button className="rounded-[12px] border border-red-400/35 px-[13px] text-[12px] font-bold text-red-300" type="button">
                Desactivar
              </button>
            </div>
          </section>

          <section className="rounded-[24px] border border-white/5 bg-[var(--surface)] p-[18px] text-[var(--text-primary)] transition-colors duration-200">
            <h2 className="text-[17px] leading-none font-bold">Reglas comerciales</h2>
            <div className="mt-[14px] grid gap-[9px]">
              {commercialRules.map(({ icon: Icon, label }) => (
                <div className="flex items-center gap-[9px] rounded-[12px] bg-white/[0.04] px-[12px] py-[10px]" key={label}>
                  <Icon aria-hidden="true" className="shrink-0 text-lime-300" size={17} strokeWidth={2.2} />
                  <span className="truncate text-[12px] font-bold text-[var(--text-soft)]">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-[12px] flex items-center gap-[8px] rounded-[12px] border border-cyan-300/15 bg-cyan-300/8 px-[12px] py-[10px] text-[12px] font-semibold text-cyan-200">
              <ReceiptText aria-hidden="true" size={16} strokeWidth={2.2} />
              Los cambios aplican a nuevas ventas.
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
