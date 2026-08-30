# Nutre tu Alma

PWA de contemplación, lectura espiritual y arte sacro católico al óleo en formato 9:16.

## 📖 Gestión de Libros e Inventario

El inventario de libros y citas se encuentra en `lecturas-private/`:
- `lecturas-private/books-inventory.json`: Base de datos estructurada con el conteo de citas activas, en cola y pendientes.
- `lecturas-private/INVENTARIO-LIBROS.md`: Tabla visual del estado de cada obra.

### Actualizar Inventario Automáticamente
Al agregar cualquier nuevo libro en PDF a `lecturas-private/libros-fuente/`, ejecuta:
```bash
node lecturas-private/scripts/update-inventory.js
```
El script detectará automáticamente los nuevos libros, los registrará con 0 frases y actualizará el inventario.
