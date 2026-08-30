# Notas de trabajo

## Convencion de avance

- Conforme avance el proyecto, se deben crear los archivos necesarios dentro de
  las carpetas que correspondan segun la estructura del repositorio.
- Mantener la app web dentro de `app/`.
- Cuando aparezcan decisiones, pendientes o convenciones importantes, dejarlas
  registradas en un archivo Markdown dentro del repositorio para conservar
  trazabilidad.
- El proyecto usara Tailwind CSS para escalar la construccion visual de la app
  web. Los estilos globales base se mantienen en `app/src/styles.css`.
- No se implementara backend en este proyecto. La app sera un prototipo visual
  con datos mock/locales para luego adaptar las pantallas al sistema existente.
- No ejecutar validaciones automaticas como build, lint o typecheck despues de
  cada cambio, porque consumen tiempo. Ejecutarlas solo cuando se soliciten de
  forma explicita.
