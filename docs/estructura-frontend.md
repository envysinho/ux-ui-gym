# Estructura frontend

Esta guia define como ordenar paginas, modulos y componentes para mantener el
proyecto facil de navegar mientras crece.

## Reglas generales

- Las carpetas van en minusculas.
- Si el nombre tiene mas de una palabra, usar kebab-case: `app-sidebar`.
- Los componentes React van en PascalCase: `AppSidebar.tsx`.
- Los archivos que arman una pantalla o bloque completo deben tener el mismo
  nombre del componente principal.
- Los componentes internos viven cerca del bloque que los usa.
- No crear componentes globales si solo pertenecen a un modulo o bloque.

## Pages

`src/pages/` contiene paginas de entrada o layouts principales.

Ejemplo:

```txt
src/pages/
  AppPage.tsx
  LoginPage.tsx
```

`AppPage.tsx` es el layout principal despues del login. Ahi se arma la estructura
general de la app: sidebar, header, tema y modulo activo.

Las paginas no deben contener la logica visual completa de cada modulo. Deben
mostrar el modulo correspondiente.

## Modules

`src/modules/` contiene las pantallas funcionales de la aplicacion.

Ejemplo:

```txt
src/modules/
  dashboard/
    Dashboard.tsx
    components/
      DashboardMetricCard.tsx
      DashboardActivityList.tsx
```

Cada modulo debe tener un archivo principal:

```txt
src/modules/dashboard/Dashboard.tsx
```

Ese archivo arma la pantalla completa del modulo. Sus piezas internas viven en:

```txt
src/modules/dashboard/components/
```

## Components

`src/components/` contiene bloques reutilizables o piezas del layout general.

Ejemplo:

```txt
src/components/
  app-header/
    AppHeader.tsx
    components/

  app-sidebar/
    AppSidebar.tsx
    components/
      LogoLockup.tsx
      SidebarButton.tsx
      UserLogoutArea.tsx
```

`AppHeader.tsx` debe armar todo el header completo. Si luego se separan piezas
como busqueda, pildora de pagina o toggle de tema, deben vivir dentro de:

```txt
src/components/app-header/components/
```

`AppSidebar.tsx` debe armar todo el sidebar completo. Sus piezas internas viven
dentro de:

```txt
src/components/app-sidebar/components/
```

## Criterio para crear componentes

Crear un componente nuevo cuando:

- La pieza tiene responsabilidad visual clara.
- Se repite dentro del modulo o layout.
- El archivo principal empieza a crecer demasiado.
- La pieza necesita estado, props o variantes propias.

Mantenerlo dentro del archivo principal cuando:

- Es una estructura pequena.
- No se reutiliza.
- Separarlo haria mas dificil leer la pantalla.

## Flujo para agregar un modulo nuevo

1. Crear carpeta en `src/modules/nombre-modulo/`.
2. Crear el archivo principal en PascalCase: `NombreModulo.tsx`.
3. Crear `components/` solo cuando el modulo necesite piezas internas.
4. Conectar el modulo desde `src/pages/AppPage.tsx`.
5. Agregar el item correspondiente en `src/components/app-sidebar/AppSidebar.tsx`.

## Flujo para trabajar Dashboard

El dashboard se trabaja aqui:

```txt
src/modules/dashboard/Dashboard.tsx
```

Sus componentes internos se crean aqui:

```txt
src/modules/dashboard/components/
```

No poner contenido propio del dashboard dentro de `AppPage.tsx`. `AppPage.tsx`
solo debe decidir que modulo se muestra.
