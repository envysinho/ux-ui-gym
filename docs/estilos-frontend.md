# Guia de estilos frontend

## Tailwind

Usamos Tailwind para construir rapido la estructura visual de piezas pequenas y
estados directos dentro del JSX.

- Layout simple: `flex`, `grid`, `items-center`, `justify-between`.
- Spacing y medidas puntuales: `mt-6`, `h-10`, `w-[255px]`.
- Color y bordes directos: `bg-[#181818]`, `rounded-[25px]`.
- Estados simples: `hover:`, `focus:`, `disabled:`.
- Ajustes que pertenecen solo a un elemento y se leen bien en una clase.

## CSS normal

Usamos CSS normal cuando el estilo necesita una regla propia, se reutiliza entre
varios lugares, o requiere comportamiento responsivo mas claro que en Tailwind.

- Media queries y ajustes por breakpoint.
- Componentes reutilizables compartidos entre paginas.
- Piezas con muchas clases o estilos que ensucian demasiado el JSX.
- Estilos con selectores internos, pseudo-elementos o variantes complejas.
- Animaciones/keyframes, fuentes, resets y reglas globales.
- Pantallas con composicion muy especifica, como la login page.

## Criterio practico

Si el estilo es pequeno, local y facil de leer, va con Tailwind. Si se repite,
crece, tiene media queries o hace que el JSX se vuelva pesado, va a CSS normal.
