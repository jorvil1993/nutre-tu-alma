# NUTRE TU ALMA

PWA de contemplación católica con lecturas breves, preguntas de meditación y pinturas sacras al óleo en formato 9:16.

- **Repositorio:** https://github.com/jorvil1993/nutre-tu-alma.git
- **Rama principal:** `main`

---

## 📁 Estructura del Proyecto

- `index.html`, `app.js`, `styles.css`, `sw.js`: Aplicación web y motor de flujo rítmico.
- `content-registry.json`: Registro formal de temas numerados.
- `assets/images/`: Galería de pinturas sacras al óleo (formato 9:16).
- `lecturas-private/`: Recursos editoriales, fuentes y herramientas (ignorado en git).
  - `libros-fuente/`: Libros y obras en PDF desde donde se extraen los pasajes.
  - `books-inventory.json`: Base de datos de libros, conteo de citas activas y pendientes.
  - `INVENTARIO-LIBROS.md`: Tabla legible del estado de cada libro.
  - `scripts/update-inventory.js`: Escáner automático de libros nuevos e inventario.

---

## 📚 Protocolo de Gestión de Libros e Inventario

> ⚠️ **REGLA OBLIGATORIA PARA CUALQUIER AGENTE O DESARROLLADOR:**
> 1. Al abrir el proyecto o al agregar un **nuevo libro PDF** en `lecturas-private/libros-fuente/`, se debe ejecutar:
>    ```bash
>    node lecturas-private/scripts/update-inventory.js
>    ```
> 2. Este comando detecta automáticamente los libros nuevos, los registra con conteo `0` en `books-inventory.json` y actualiza `INVENTARIO-LIBROS.md`.
> 3. Para saber qué libros tienen pocas frases o están pendientes de extracción (0 frases), consultar `lecturas-private/INVENTARIO-LIBROS.md` antes de proponer nuevos pasajes.
