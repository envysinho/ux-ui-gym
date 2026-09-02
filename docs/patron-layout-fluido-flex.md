# Patron de layout fluido con Flexbox

Esta guia documenta el flujo de trabajo usado para construir layouts responsivos
como el modulo de membresias. El objetivo es evitar cambios que se vean bien en
un tamano de pantalla, pero se rompan al cambiar el viewport, usar F11 o trabajar
con ventanas mas pequenas.

## Objetivo

Crear pantallas que llenen el espacio disponible del layout principal y que sus
paneles crezcan o se reduzcan de forma natural.

El patron recomendado es:

- Usar `flex` para distribuir zonas principales.
- Usar `flex-1` o factores `flex-[x_1_0]` para repartir ancho o alto.
- Mantener `gap` fijo para separaciones visuales.
- Evitar alturas fijas en contenedores principales.
- Usar scroll interno solo en listas que pueden crecer.

## Estructura base

Para una pantalla con lista izquierda y panel derecho:

```tsx
<div className="mt-[18px] flex min-h-0 flex-1 gap-[20px] pl-[16px]">
  <section className="flex min-h-0 min-w-0 flex-[1.15_1_0] flex-col">
    <ul className="flex min-h-0 flex-1 flex-col gap-[20px] overflow-y-auto">
      {items.map((item) => (
        <li className="min-h-[116px] flex-1" key={item.id} />
      ))}
    </ul>
  </section>

  <section className="min-h-0 min-w-[360px] flex-[0.85_1_0]" />
</div>
```

## Reglas practicas

- El contenedor de modulo debe tener `min-h-0` y `flex-1` para ocupar el alto
  disponible dentro de `AppPage`.
- No usar `h-[...]` en el panel principal cuando debe crecer con la pantalla.
- No usar `pb-[...]` en el modulo si el contenido debe llegar al mismo tope
  inferior que la sidebar.
- Si una lista puede crecer, el scroll debe estar en la lista:
  `overflow-y-auto`.
- Los items de una lista fluida pueden usar `min-h-[...] flex-1` para crecer y
  llenar el alto disponible.
- Usar `shrink-0` solo cuando el elemento no debe comprimirse.

## Igualar proporciones entre modulos

Si otro modulo usa una proporcion como:

```tsx
grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]
```

En Flexbox se debe expresar con los mismos factores:

```tsx
<section className="flex-[1.15_1_0]" />
<section className="min-w-[360px] flex-[0.85_1_0]" />
```

No reemplazarlo por `basis-[42.5%]`. Aunque parezca equivalente, no calcula
igual cuando hay `gap`, minimos o restricciones responsivas.

## Cuando usar lista y no grid

Usar una lista (`ul` / `li`) cuando los elementos representan registros que se
muestran uno debajo de otro, por ejemplo membresias, clientes o movimientos.

Usar grid solo cuando la interfaz realmente necesita columnas simultaneas, por
ejemplo metricas superiores o tarjetas comparables en varias columnas.

## Checklist antes de cerrar un layout

- El modulo llena el alto disponible al cambiar el tamano de ventana.
- El borde inferior queda alineado con la sidebar cuando corresponde.
- Los paneles no usan alturas fijas innecesarias.
- La separacion entre zonas depende de `gap`, no de margenes sueltos.
- Las listas largas hacen scroll interno sin empujar al panel vecino.
- Si se busca paridad con otro modulo, se copian las mismas proporciones, no un
  porcentaje aproximado.
