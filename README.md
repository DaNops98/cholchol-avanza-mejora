# Chol Chol Avanza — Propuesta de mejora (proyecto académico)

Propuesta de rediseño del sitio web de la Ilustre Municipalidad de Chol Chol
(https://municholchol.cl), desarrollada como actividad académica de la
asignatura Desarrollo Frontend.

**Este no es el sitio oficial de la municipalidad.** Es una propuesta de
mejora sobre la página de inicio (Home), acompañada de un informe con
todos los errores detectados en el sitio original y las mejoras aplicadas
o recomendadas.

## Cómo ver el sitio

1. Clona o descarga este repositorio.
2. Abre `index.html` directamente en el navegador, o publícalo con GitHub
   Pages (Settings → Pages → Deploy from branch → `main` → `/root`).
3. No requiere instalación, servidor ni dependencias: es HTML, CSS y
   JavaScript puro.

## Estructura del proyecto

```
index.html          Página de inicio mejorada
css/estilos.css      Sistema de diseño (paleta, tipografía, layout, responsive)
js/main.js           Menú móvil accesible y año dinámico del footer
assets/              Ilustraciones propias en SVG (no se reutilizan fotografías
                     del sitio original, para evitar problemas de derechos)
```

## Resumen de las mejoras aplicadas

- **Accesibilidad:** texto alternativo en todas las imágenes, foco visible
  en todos los elementos interactivos, enlace de salto al contenido,
  jerarquía de encabezados correcta (nunca se usa un `<h3>` para datos que
  no son un título).
- **Consistencia de datos:** un solo teléfono, un solo correo y una sola
  forma de escribir "Chol Chol" en todo el sitio.
- **Arquitectura de la información:** los trámites más buscados (permiso de
  circulación, transparencia, solicitar información) están a un clic desde
  el inicio, en vez de perdidos entre banners sin etiquetar.
- **Diseño responsivo real:** probado en anchos de escritorio, tablet y
  celular.
- **Identidad visual propia:** paleta y tipografía inspiradas en el paisaje
  de la Araucanía y en la trapelacucha mapuche instalada en el frontis
  municipal, en vez de un tema genérico de plantilla.

El detalle completo de errores encontrados y su justificación está en el
informe (`informe_auditoria_cholchol.docx`), entregado junto con este
repositorio.

## Autoría

Proyecto desarrollado por [nombre y apellido de los integrantes] para la
asignatura Desarrollo Frontend, Instituto Profesional San Sebastián.
