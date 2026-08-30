# Producto

## Objetivo

Crear una app movil visual para administrar un gimnasio desde operaciones
diarias: clientes, membresias, ventas, inventario, caja, reportes y acceso QR.

El prototipo debe permitir validar UX/UI antes de conectar servicios reales.
Todas las pantallas deben funcionar con datos mock representativos.

## Usuarios principales

- Recepcion u operador: registra ventas, clientes, renovaciones y validaciones.
- Administrador: revisa reportes, caja, inventario y usuarios.
- Acceso QR: valida ingreso de miembros de forma rapida y enfocada.

## Modulos base

- Dashboard: resumen operativo, indicadores y movimientos recientes.
- Clientes: listado, busqueda, creacion, edicion y estado de membresia.
- Membresias: planes, asignaciones, renovaciones y vigencias.
- Validacion: revision puntual de membresia mediante token o QR.
- Acceso QR: modo continuo para validar ingresos.
- Productos: catalogo, precio, descripcion y stock.
- Inventario: entradas, ajustes, diferencias y movimientos de stock.
- Caja: apertura, cierre, ingresos, egresos y saldo esperado.
- Reportes: ingresos, egresos, ventas y actividad por periodo.
- Usuarios: gestion visual de cuentas, estado y rol.

## Principios del prototipo

- Priorizar pantallas moviles reales, no una adaptacion literal del sistema web.
- Mostrar flujos completos aunque las acciones solo actualicen estado local/mock.
- Cubrir estados de carga, vacio, error, exito y permisos.
- Usar informacion cercana al negocio real: soles, Yape, efectivo, membresias,
  stock y vencimientos.
- Evitar documentacion o implementacion de backend hasta que se defina la API.

## Referencia funcional

El sistema web de referencia describe los modulos base como: dashboard,
clientes y membresias, productos, inventario, caja, reportes, usuarios,
validacion y acceso QR.

