# Flujos UX

Estos flujos describen comportamiento visual esperado. No incluyen endpoints,
DTOs, servicios ni logica backend.

## Login visual

1. El usuario ingresa usuario y contraseña.
2. La pantalla muestra estado de envio.
3. Si falla, aparece un mensaje de error.
4. Si funciona en mock, navega segun rol.

Estados a cubrir: formulario vacio, enviando, error, usuario `ACCESS`.

## Venta rapida

1. El operador abre una accion de nueva venta desde Inicio.
2. Elige venta de membresia o producto.
3. Para membresia, selecciona cliente existente o crea cliente basico.
4. Selecciona plan o producto.
5. Elige metodo de pago: efectivo, Yape o mixto.
6. Si es mixto, ingresa montos por Yape y efectivo.
7. Confirma y se muestra resultado visual.

Validaciones visuales:

- Debe existir cliente para vender membresia.
- Debe existir plan o producto seleccionado.
- En pago mixto, la suma debe coincidir con el total.
- Producto sin stock no debe venderse.

## Renovacion de membresia

1. El operador entra a Clientes o Membresias.
2. Selecciona renovar sobre un cliente con membresia o historial.
3. Se abre un flujo enfocado con datos del cliente.
4. El sistema sugiere mantener el plan actual.
5. El operador puede cambiar de plan.
6. La app sugiere fecha de inicio y fecha fin.
7. El operador confirma que el cliente acepto renovar.
8. Selecciona metodo de pago.
9. Confirma y la membresia queda visualmente renovada o programada.

Informacion visible:

- Nombre completo.
- Telefono si existe.
- Plan actual.
- Fecha de vencimiento.
- Estado de membresia.
- Nuevo plan.
- Inicio y fin sugeridos.
- Resumen de cobro.
- Confirmacion manual.
- Metodo de pago.

Reglas visuales:

- Si la membresia esta activa, la nueva vigencia inicia al dia siguiente del
  vencimiento actual.
- Si esta vencida o no tiene membresia activa, inicia hoy.
- Al cambiar de plan, se recalcula la fecha fin segun duracion del plan.

## Recordatorio de vencimiento

1. El operador ve clientes con membresia por vencer.
2. Abre accion de recordatorio.
3. La app muestra texto sugerido para WhatsApp.
4. El operador confirma envio visual o copia mensaje.

Estados: sin telefono, sin membresia activa, vencimiento lejano, por vencer.

## Validacion QR

1. El usuario escanea QR o ingresa token manual.
2. La pantalla muestra cargando.
3. Resultado valido: nombre, plan, vigencia y estado activo.
4. Resultado invalido: mensaje claro y accion para intentar otra vez.

El modo continuo debe volver rapido al escaneo despues de cada resultado.

## Inventario

1. El administrador revisa resumen mensual de stock.
2. Puede registrar entrada o ajuste.
3. En entrada, puede asociar costo de compra y metodo de pago.
4. La pantalla muestra stock esperado, stock actual y diferencia.

Estados importantes: stock cuadrado, diferencia de stock, producto agotado,
producto con stock bajo.

## Caja

1. El operador abre caja con monto inicial.
2. Registra ingresos y egresos visuales.
3. Revisa saldo esperado.
4. Cierra caja con monto contado.
5. La app muestra diferencia si existe.

Estados: caja cerrada, caja abierta, cierre con diferencia, error de monto.

## Reportes

1. El usuario autorizado selecciona periodo.
2. Ve ingresos por membresias, renovaciones y productos.
3. Ve egresos y saldo neto.
4. Puede revisar movimientos con responsable cuando el rol lo permita.

Estados: sin datos, cargando, error, periodo con actividad.

