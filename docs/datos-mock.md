# Datos mock

El prototipo debe incluir fixtures suficientes para probar pantallas completas,
no solo casos ideales.

## Enumeraciones

Estados de membresia:

- `ACTIVE`: Activa.
- `PENDING`: Programada.
- `EXPIRED`: Vencida.
- `CANCELLED`: Cancelada.

Tipos de movimiento:

- `MEMBERSHIP_SALE`: Venta de membresia.
- `MEMBERSHIP_RENEWAL`: Renovacion.
- `PRODUCT_SALE`: Venta de producto.

Tipos de movimiento de stock:

- `PURCHASE`: Entrada.
- `SALE`: Venta.
- `ADJUSTMENT`: Ajuste.

Categorias de egreso:

- `STOCK_PURCHASE`: Compra de stock.
- `SERVICES`: Servicios.
- `RENT`: Alquiler.
- `CLEANING`: Limpieza.
- `MAINTENANCE`: Mantenimiento.
- `WITHDRAWAL`: Retiro.
- `OTHER`: Otro.

Metodos de pago:

- `EFECTIVO`: Efectivo.
- `YAPE`: Yape.
- `MIXTO`: Mixto.

## Entidades visuales

### Cliente

Campos minimos:

- `id`
- `firstName`
- `lastName`
- `phone`
- `documentId`
- `enabled`
- `activeMembership`
- `lastVisitAt`

Casos necesarios:

- Cliente con membresia activa.
- Cliente con membresia por vencer.
- Cliente con membresia vencida.
- Cliente sin membresia.
- Cliente sin telefono.
- Cliente desactivado.

### Membresia

Campos minimos:

- `id`
- `clientId`
- `clientName`
- `planName`
- `status`
- `startDate`
- `endDate`
- `accessToken`
- `qrPayload`

Casos necesarios:

- Activa vigente.
- Programada futura.
- Vencida.
- Cancelada.
- Sin token QR.

### Plan

Campos minimos:

- `id`
- `name`
- `durationDays`
- `price`
- `enabled`

Casos necesarios:

- Plan mensual.
- Plan quincenal.
- Plan promocional.
- Plan desactivado.

### Producto

Campos minimos:

- `id`
- `name`
- `description`
- `price`
- `stock`
- `enabled`

Casos necesarios:

- Stock normal.
- Stock bajo.
- Agotado.
- Producto desactivado.

### Movimiento

Campos minimos:

- `id`
- `type`
- `description`
- `clientName`
- `amount`
- `paymentMethod`
- `yapeAmount`
- `cashAmount`
- `createdAt`
- `createdByName`

Casos necesarios:

- Venta de membresia en efectivo.
- Renovacion con Yape.
- Venta de producto con pago mixto.
- Movimiento eliminado o anulable segun permisos.

### Caja

Campos minimos:

- `id`
- `openedAt`
- `closedAt`
- `openingAmount`
- `expectedAmount`
- `countedAmount`
- `difference`
- `status`

Casos necesarios:

- Caja cerrada.
- Caja abierta sin movimientos.
- Caja abierta con movimientos.
- Caja cerrada con diferencia.

### Usuario

Campos minimos:

- `id`
- `username`
- `displayName`
- `role`
- `enabled`

Casos necesarios:

- SUDO activo.
- ADMIN activo.
- USER activo.
- ACCESS activo.
- Usuario desactivado.

## Formato regional

- Moneda: PEN, mostrado como soles.
- Fechas: formato Peru, legible para operador.
- Telefonos: permitir casos con y sin numero.
- Metodos de pago: efectivo, Yape y mixto como opciones de primer nivel.

