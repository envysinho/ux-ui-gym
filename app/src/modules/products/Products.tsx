import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  BadgeDollarSign,
  Box,
  Boxes,
  CreditCard,
  Edit3,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  SlidersHorizontal,
  ToggleLeft,
  ToggleRight,
  Wallet,
} from 'lucide-react';

type ProductStatus = 'Activo' | 'Bajo' | 'Agotado' | 'Desactivado';
type ProductCategory = 'Suplementos' | 'Bebidas' | 'Snacks' | 'Accesorios';

type Product = {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  stock: number;
  enabled: boolean;
  soldToday: number;
  salesToday: number;
  lastEntry: string;
  accent: string;
};

const products: Product[] = [
  {
    id: 'product-whey',
    name: 'Proteina Whey 1kg',
    description: 'Suplemento de proteina',
    category: 'Suplementos',
    price: 95,
    stock: 3,
    enabled: true,
    soldToday: 2,
    salesToday: 190,
    lastEntry: '15/05/2026 - 10 unidades',
    accent: 'from-zinc-700 to-neutral-500',
  },
  {
    id: 'product-bar',
    name: 'Barra energetica',
    description: 'Snack pre-entreno',
    category: 'Snacks',
    price: 7,
    stock: 7,
    enabled: true,
    soldToday: 3,
    salesToday: 21,
    lastEntry: '20/05/2026 - 24 unidades',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    id: 'product-water',
    name: 'Agua mineral',
    description: 'Bebida sin gas',
    category: 'Bebidas',
    price: 4,
    stock: 42,
    enabled: true,
    soldToday: 6,
    salesToday: 24,
    lastEntry: '26/08/2026 - 60 unidades',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'product-shaker',
    name: 'Shaker 700ml',
    description: 'Accesorio',
    category: 'Accesorios',
    price: 25,
    stock: 9,
    enabled: true,
    soldToday: 1,
    salesToday: 25,
    lastEntry: '12/08/2026 - 18 unidades',
    accent: 'from-slate-600 to-zinc-500',
  },
  {
    id: 'product-gloves',
    name: 'Guantes training',
    description: 'Accesorio',
    category: 'Accesorios',
    price: 45,
    stock: 0,
    enabled: true,
    soldToday: 0,
    salesToday: 0,
    lastEntry: '02/08/2026 - 8 unidades',
    accent: 'from-zinc-700 to-stone-500',
  },
  {
    id: 'product-towel',
    name: 'Toalla mclub',
    description: 'Accesorio',
    category: 'Accesorios',
    price: 30,
    stock: 16,
    enabled: true,
    soldToday: 2,
    salesToday: 60,
    lastEntry: '18/08/2026 - 20 unidades',
    accent: 'from-neutral-700 to-zinc-500',
  },
  {
    id: 'product-creatine',
    name: 'Creatina 300g',
    description: 'Suplemento',
    category: 'Suplementos',
    price: 110,
    stock: 12,
    enabled: true,
    soldToday: 1,
    salesToday: 110,
    lastEntry: '21/08/2026 - 12 unidades',
    accent: 'from-lime-600 to-emerald-500',
  },
  {
    id: 'product-wrap',
    name: 'Cinta wrist wrap',
    description: 'Accesorio',
    category: 'Accesorios',
    price: 35,
    stock: 0,
    enabled: false,
    soldToday: 0,
    salesToday: 0,
    lastEntry: 'Sin entradas recientes',
    accent: 'from-zinc-600 to-neutral-500',
  },
];

const filters = ['Todos', 'Suplementos', 'Bebidas', 'Snacks', 'Accesorios', 'Desactivados'] as const;

const kpis = [
  {
    icon: Package,
    label: 'Productos activos',
    value: '28',
    helper: 'habilitados y en stock',
    tone: 'from-lime-500 to-emerald-400',
  },
  {
    icon: AlertTriangle,
    label: 'Stock bajo',
    value: '6',
    helper: 'requieren atencion',
    tone: 'from-amber-400 to-orange-500',
  },
  {
    icon: Box,
    label: 'Agotados',
    value: '3',
    helper: 'sin stock disponible',
    tone: 'from-red-500 to-rose-400',
  },
  {
    icon: BadgeDollarSign,
    label: 'Ventas hoy',
    value: 'S/ 485',
    helper: '4 ventas realizadas',
    tone: 'from-cyan-500 to-blue-500',
  },
];

const paymentMethods = [
  { icon: Wallet, label: 'Efectivo' },
  { icon: CreditCard, label: 'Yape' },
  { icon: CreditCard, label: 'Mixto' },
];

function getStatus(product: Product): ProductStatus {
  if (!product.enabled) {
    return 'Desactivado';
  }

  if (product.stock === 0) {
    return 'Agotado';
  }

  if (product.stock <= 10) {
    return 'Bajo';
  }

  return 'Activo';
}

function getStatusClass(status: ProductStatus) {
  const classes: Record<ProductStatus, string> = {
    Activo: 'border-lime-400/25 bg-lime-400/10 text-lime-300',
    Bajo: 'border-amber-400/25 bg-amber-400/10 text-amber-300',
    Agotado: 'border-red-400/25 bg-red-400/10 text-red-300',
    Desactivado: 'border-white/10 bg-white/7 text-[var(--text-muted)]',
  };

  return classes[status];
}

function formatSoles(value: number) {
  return `S/ ${value.toLocaleString('en-US')}`;
}

function getFilteredProducts(activeFilter: (typeof filters)[number]) {
  if (activeFilter === 'Todos') {
    return products;
  }

  if (activeFilter === 'Desactivados') {
    return products.filter((product) => !product.enabled);
  }

  return products.filter((product) => product.category === activeFilter);
}

export function Products() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('Todos');
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [quantity, setQuantity] = useState(1);

  const filteredProducts = useMemo(() => getFilteredProducts(activeFilter), [activeFilter]);
  const selectedProduct =
    products.find(({ id }) => id === selectedProductId) ?? filteredProducts[0] ?? products[0];
  const selectedStatus = getStatus(selectedProduct);
  const total = selectedProduct.price * quantity;

  return (
    <div className="mt-[18px] flex min-h-0 flex-1 flex-col overflow-hidden pl-[16px]">
      <div className="grid w-full grid-cols-4 gap-[20px]">
        {kpis.map(({ icon: Icon, label, value, helper, tone }) => (
          <section
            className="flex h-[110px] min-w-0 items-center gap-[18px] rounded-[20px] border border-white/5 bg-[var(--surface)] px-[22px] text-[var(--text-primary)] shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] transition-colors duration-200"
            key={label}
          >
            <div className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tone} text-white`}>
              <Icon aria-hidden="true" size={27} strokeWidth={2.3} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[13px] leading-none font-bold text-[var(--text-soft)]">
                {label}
              </p>
              <strong className="mt-[9px] block truncate text-[29px] leading-none font-bold">
                {value}
              </strong>
              <p className="mt-[11px] truncate text-[12px] leading-none font-semibold text-[var(--text-soft)]">
                {helper}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-[20px] grid min-h-0 flex-1 grid-cols-[minmax(690px,1fr)_minmax(390px,0.42fr)] gap-[20px]">
        <section className="flex min-h-0 flex-col rounded-[28px] border border-white/5 bg-[var(--surface)] p-[18px] text-[var(--text-primary)] transition-colors duration-200">
          <div className="flex items-start justify-between gap-[18px]">
            <div className="min-w-0">
              <h2 className="text-[18px] leading-none font-bold">Catalogo de productos</h2>
              <div className="mt-[20px] flex flex-wrap gap-[10px]">
                {filters.map((filter) => (
                  <button
                    className={`rounded-[11px] border px-[12px] py-[8px] text-[12px] font-bold transition ${
                      activeFilter === filter
                        ? 'border-cyan-300 bg-cyan-400/12 text-cyan-300'
                        : 'border-white/10 bg-white/[0.03] text-[var(--text-soft)] hover:bg-white/7'
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
            <div className="flex shrink-0 items-center gap-[10px]">
              <button className="flex h-[42px] items-center gap-[8px] rounded-[12px] bg-cyan-400 px-[14px] text-[12px] font-bold text-black shadow-[0_14px_30px_rgb(34_211_238/0.18)]" type="button">
                <Plus aria-hidden="true" size={17} strokeWidth={2.4} />
                Nuevo producto
              </button>
              <button className="flex h-[42px] items-center gap-[8px] rounded-[12px] border border-cyan-300/45 bg-cyan-300/8 px-[14px] text-[12px] font-bold text-cyan-200" type="button">
                <ShoppingCart aria-hidden="true" size={17} strokeWidth={2.4} />
                Registrar venta
              </button>
            </div>
          </div>

          <div className="mt-[20px] grid min-h-0 flex-1 grid-cols-4 gap-[12px] overflow-auto pr-[2px]">
            {filteredProducts.map((product) => {
              const status = getStatus(product);
              const isSelected = selectedProduct.id === product.id;

              return (
                <button
                  className={`flex min-h-[190px] min-w-0 flex-col rounded-[16px] border bg-white/[0.025] p-[14px] text-left transition ${
                    isSelected
                      ? 'border-cyan-300/80 shadow-[0_0_0_1px_rgb(34_211_238/0.2)]'
                      : 'border-white/8 hover:border-white/18'
                  }`}
                  key={product.id}
                  onClick={() => {
                    setSelectedProductId(product.id);
                    setQuantity(1);
                  }}
                  type="button"
                >
                  <div className="flex items-start gap-[12px]">
                    <div className={`flex h-[70px] w-[62px] shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br ${product.accent} text-white`}>
                      <Package aria-hidden="true" size={31} strokeWidth={2.1} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-[14px] font-bold">{product.name}</h3>
                      <p className="mt-[7px] truncate text-[12px] font-semibold text-[var(--text-soft)]">
                        {product.description}
                      </p>
                      <strong className="mt-[11px] block truncate text-[19px] leading-none text-cyan-300">
                        {formatSoles(product.price)}
                      </strong>
                    </div>
                  </div>

                  <div className="mt-auto border-t border-white/7 pt-[12px]">
                    <div className="flex items-center justify-between gap-[10px]">
                      <p className="truncate text-[12px] font-semibold text-[var(--text-soft)]">
                        Stock: <span className={status === 'Activo' ? 'text-lime-300' : status === 'Agotado' ? 'text-red-300' : 'text-amber-300'}>{product.stock}</span>
                      </p>
                      <span className={`rounded-[8px] border px-[8px] py-[5px] text-[11px] font-bold ${getStatusClass(status)}`}>
                        {status}
                      </span>
                    </div>
                    <div className="mt-[12px] grid grid-cols-2 gap-[10px] border-t border-white/7 pt-[11px] text-[11px] font-semibold text-[var(--text-soft)]">
                      <span>Vendidos: {product.soldToday}</span>
                      <span className="text-right">{formatSoles(product.salesToday)}</span>
                    </div>
                    <div className="mt-[12px] flex items-center justify-between text-[var(--text-soft)]">
                      <span className="flex items-center gap-[8px] text-[12px] font-semibold">
                        <Edit3 aria-hidden="true" size={16} strokeWidth={2.2} />
                        Editar
                      </span>
                      <span className="flex items-center gap-[8px] text-[12px] font-semibold">
                        <Boxes aria-hidden="true" size={16} strokeWidth={2.2} />
                        Stock
                      </span>
                      {product.enabled ? (
                        <ToggleRight aria-hidden="true" className="text-cyan-300" size={28} strokeWidth={2.1} />
                      ) : (
                        <ToggleLeft aria-hidden="true" size={28} strokeWidth={2.1} />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-[14px] flex items-center justify-between gap-[18px] text-[12px] font-semibold text-[var(--text-soft)]">
            <span>
              Mostrando 1 a {filteredProducts.length} de {products.length} productos
            </span>
            <div className="flex items-center gap-[8px]">
              {[1, 2, 3].map((page) => (
                <button
                  className={`h-[34px] w-[34px] rounded-[10px] border text-[12px] font-bold ${
                    page === 1
                      ? 'border-cyan-300 bg-cyan-400/12 text-cyan-300'
                      : 'border-white/10 bg-white/[0.03] text-[var(--text-soft)]'
                  }`}
                  key={page}
                  type="button"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </section>

        <aside className="flex min-h-0 flex-col overflow-hidden rounded-[28px] border border-white/5 bg-[var(--surface)] p-[18px] text-[var(--text-primary)] transition-colors duration-200">
          <div className="flex items-start gap-[16px] border-b border-white/7 pb-[18px]">
            <div className={`flex h-[100px] w-[92px] shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br ${selectedProduct.accent} text-white`}>
              <Package aria-hidden="true" size={44} strokeWidth={2.1} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-[12px]">
                <h2 className="min-w-0 truncate text-[18px] font-bold">{selectedProduct.name}</h2>
                <span className={`shrink-0 rounded-[8px] border px-[8px] py-[5px] text-[11px] font-bold ${getStatusClass(selectedStatus)}`}>
                  {selectedStatus}
                </span>
              </div>
              <strong className="mt-[10px] block text-[26px] leading-none font-bold">
                {formatSoles(selectedProduct.price)}
              </strong>
              <p className="mt-[11px] text-[13px] font-semibold text-[var(--text-soft)]">
                Stock actual: <span className="font-bold text-amber-300">{selectedProduct.stock}</span> unidades
              </p>
              <p className="mt-[11px] line-clamp-2 text-[12px] leading-[1.45] font-semibold text-[var(--text-soft)]">
                {selectedProduct.description} para venta directa en recepcion.
              </p>
            </div>
          </div>

          <section className="border-b border-white/7 py-[18px]">
            <h3 className="flex items-center gap-[8px] text-[15px] font-bold">
              <ShoppingCart aria-hidden="true" className="text-cyan-300" size={18} strokeWidth={2.3} />
              Venta rapida
            </h3>
            <div className="mt-[16px] grid grid-cols-[116px_minmax(0,1fr)] gap-[14px]">
              <div>
                <p className="text-[12px] font-bold text-[var(--text-soft)]">Cantidad</p>
                <div className="mt-[8px] grid h-[38px] grid-cols-3 overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.03]">
                  <button
                    className="flex items-center justify-center border-r border-white/10"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    type="button"
                  >
                    <Minus aria-hidden="true" size={15} strokeWidth={2.4} />
                  </button>
                  <span className="flex items-center justify-center text-[13px] font-bold">{quantity}</span>
                  <button
                    className="flex items-center justify-center border-l border-white/10"
                    onClick={() => setQuantity((current) => Math.min(selectedProduct.stock || 1, current + 1))}
                    type="button"
                  >
                    <Plus aria-hidden="true" size={15} strokeWidth={2.4} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[12px] font-bold text-[var(--text-soft)]">Metodo de pago</p>
                <div className="mt-[8px] grid h-[38px] grid-cols-3 overflow-hidden rounded-[10px] border border-white/10 bg-white/[0.03]">
                  {paymentMethods.map(({ icon: Icon, label }, index) => (
                    <button
                      className={`flex items-center justify-center gap-[6px] text-[11px] font-bold ${
                        index === 0 ? 'bg-cyan-400/12 text-cyan-300' : 'text-[var(--text-soft)]'
                      }`}
                      key={label}
                      type="button"
                    >
                      <Icon aria-hidden="true" size={14} strokeWidth={2.2} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-[16px] flex items-center justify-between rounded-[12px] border border-white/8 bg-white/[0.03] px-[13px] py-[12px]">
              <span className="text-[13px] font-bold text-[var(--text-soft)]">Total a cobrar</span>
              <strong className="text-[24px] leading-none text-cyan-300">{formatSoles(total)}</strong>
            </div>
            <button
              className="mt-[12px] flex h-[42px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-cyan-400 text-[12px] font-bold text-black disabled:bg-white/10 disabled:text-[var(--text-muted)]"
              disabled={selectedProduct.stock === 0 || !selectedProduct.enabled}
              type="button"
            >
              <ShoppingCart aria-hidden="true" size={16} strokeWidth={2.35} />
              Cobrar venta
            </button>
          </section>

          <section className="flex min-h-0 flex-1 flex-col pt-[18px]">
            <h3 className="flex items-center gap-[8px] text-[15px] font-bold">
              <Box aria-hidden="true" className="text-cyan-300" size={18} strokeWidth={2.3} />
              Stock
            </h3>
            <div className={`mt-[14px] rounded-[12px] border px-[13px] py-[12px] ${
              selectedStatus === 'Activo'
                ? 'border-lime-300/18 bg-lime-300/8'
                : selectedStatus === 'Agotado'
                  ? 'border-red-300/25 bg-red-300/10'
                  : 'border-amber-300/25 bg-amber-300/10'
            }`}>
              <p className={`flex items-center gap-[8px] text-[13px] font-bold ${
                selectedStatus === 'Activo'
                  ? 'text-lime-300'
                  : selectedStatus === 'Agotado'
                    ? 'text-red-300'
                    : 'text-amber-300'
              }`}>
                <AlertTriangle aria-hidden="true" size={16} strokeWidth={2.25} />
                {selectedStatus === 'Activo'
                  ? 'Stock disponible para venta'
                  : selectedStatus === 'Agotado'
                    ? 'Producto agotado'
                    : `Stock bajo: quedan ${selectedProduct.stock} unidades`}
              </p>
              <p className="mt-[7px] text-[12px] font-semibold text-[var(--text-soft)]">
                {selectedStatus === 'Activo'
                  ? 'No requiere accion inmediata.'
                  : 'Considera registrar una entrada pronto.'}
              </p>
            </div>
            <div className="mt-[12px] grid grid-cols-2 gap-[10px]">
              <button className="flex h-[50px] items-center justify-center gap-[8px] rounded-[12px] border border-cyan-300/35 bg-cyan-300/8 text-[12px] font-bold text-cyan-200" type="button">
                <Plus aria-hidden="true" size={16} strokeWidth={2.35} />
                Registrar entrada
              </button>
              <button className="flex h-[50px] items-center justify-center gap-[8px] rounded-[12px] border border-cyan-300/35 bg-cyan-300/8 text-[12px] font-bold text-cyan-200" type="button">
                <SlidersHorizontal aria-hidden="true" size={16} strokeWidth={2.35} />
                Ajustar stock
              </button>
            </div>
            <p className="mt-auto truncate pt-[14px] text-[12px] font-semibold text-[var(--text-muted)]">
              Ultima entrada: {selectedProduct.lastEntry}
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
