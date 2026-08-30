# Navegacion y roles

## Navegacion principal

La app movil debe organizarse por tareas frecuentes. La estructura exacta puede
cambiar durante el rediseño, pero debe cubrir estas areas funcionales:

- Inicio: resumen del dia, accesos rapidos y movimientos recientes.
- Clientes: busqueda, detalle, membresia actual y acciones.
- Membresias: planes, vigencias y renovaciones.
- Validar: escaneo o ingreso manual para comprobar una membresia.
- Productos: catalogo y venta rapida.
- Inventario: stock, entradas y ajustes.
- Caja: estado de caja, movimientos y cierre.
- Reportes: resumen diario/mensual.
- Usuarios: gestion de usuarios y permisos.

## Roles

Roles usados por la referencia funcional:

- `SUDO`: acceso completo.
- `ADMIN`: administracion operativa, reportes y usuarios no privilegiados.
- `USER`: operacion diaria limitada.
- `ACCESS`: modo enfocado en validacion QR.

## Visibilidad sugerida

| Pantalla | SUDO | ADMIN | USER | ACCESS |
| --- | --- | --- | --- | --- |
| Inicio | Si | Si | Si | No |
| Clientes | Si | Si | Si | No |
| Membresias | Si | Si | Si | No |
| Validar | Si | Si | Si | Si |
| Acceso QR continuo | Si | No | No | Si |
| Productos | Si | Si | Si | No |
| Inventario | Si | Si | No o lectura | No |
| Caja | Si | Si | Si | No |
| Reportes | Si | Si | No | No |
| Usuarios | Si | Si limitado | No | No |

## Consideraciones UX

- El rol `ACCESS` debe entrar directo al flujo de validacion, sin navegar por el
  resto del sistema.
- Las acciones no permitidas deben ocultarse o mostrarse deshabilitadas solo si
  eso ayuda a explicar el estado.
- En movil, las acciones frecuentes deben estar cerca del pulgar: registrar
  venta, renovar membresia, validar QR y buscar cliente.
- La busqueda global debe priorizar clientes y productos.

