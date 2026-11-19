# Ludus Gym · Terminal web (PC + móvil)

Prototipo navegable de **Ludus Gym**, una aplicación de gestión de gimnasio (vista socio + vista administrador). Es una **PWA**: una sola base de código funciona como app de escritorio y como app instalable en el teléfono.

Hecho con **HTML, CSS y JavaScript puro**: sin frameworks, sin compilación y sin dependencias de instalación. Incluye datos ficticios de demostración; no es un sistema de producción.

**Demo publicada:** https://rub803030.github.io/ludus-gym-prototipo/

## Abrir y ejecutar

### En la web (PC o móvil)

Entra a la demo publicada o sirve la carpeta localmente:

```bash
cd ludus-gym-prototipo
python -m http.server 8000
# http://localhost:8000
```

Abrir `index.html` directamente también funciona para la interfaz, pero la **instalación y el modo offline requieren HTTP/HTTPS**.

### Instalar como app de escritorio

1. Abre la demo en **Chrome, Edge o Brave**.
2. Haz clic en el botón **«Instalar app»** de la barra superior (aparece cuando el navegador lo permite), o en el menú del navegador → *Instalar página como aplicación*.
3. Se abre una ventana propia, sin barras de navegación, con el icono de Ludus Gym.

### Instalar en Android

1. Abre la demo en **Chrome** desde el teléfono.
2. Menú de Chrome → **«Añadir a pantalla de inicio» / «Instalar aplicación»**.
3. Confirma. El icono abre la app a pantalla completa.

### Instalar en iPhone / iPad

1. Abre la demo en **Safari**.
2. Botón **Compartir** → **«Añadir a pantalla de inicio»**.
3. Confirma el nombre `Ludus Gym`.

La app funciona **sin conexión** después de la primera carga: un service worker guarda la shell (HTML, CSS, JS, manifiesto e iconos). El QR es decorativo y determinista para la demo; no es un código escaneable real.

> No se necesitó Android Studio: la PWA cubre el caso de uso con un solo código y se puede empaquetar después con Capacitor/Cordova si se requiere un APK firmado para Google Play.

## Qué incluye

La app cubre los **8 flujos** de los diseños originales. En escritorio se navega desde el menú lateral; en móvil, desde la barra inferior fija.

### Vista Socio
| Pantalla | Contenido principal |
|---|---|
| Inicio / QR | Pase de acceso QR, estado de membresía, asistencias, racha y próxima clase. |
| Rutina y pesos | Rutina del día, bloques de ejercicios, registro de pesos y progreso. |
| Nutrición | Meta calórica, macronutrientes, hidratación y timing de comidas. |
| Reservas Hyrox | Clases, cupos, reservas activas y normativa del box. |

### Vista Admin
| Pantalla | Contenido principal |
|---|---|
| Panel y cobranza | KPIs, cobro rápido, alertas de vencimientos e inventario. |
| Registro y cobro | Alta de socio, selección de plan, método de pago y activación. |
| Expediente | Consulta y edición de datos, membresía, asignaciones y asistencias. |
| Recibo y QR | Confirmación de cobro, credencial QR, recibo y envío por WhatsApp. |

## Interacciones de la demo

- Cambio entre **Vista Socio** y **Vista Admin** desde la barra superior.
- Navegación por las 8 pantallas desde el menú lateral (PC) y el dock inferior (móvil).
- Registro de pesos, hidratación `+250 ml`, progreso de rutina y reserva/cancelación de clases.
- Selección de plan y método de pago, cálculo de cambio y activación de socio que lleva al recibo.
- Pestañas del expediente, búsqueda de socios, suspensión de acceso, diálogo nativo de credencial QR y notificaciones (`toast`).
- Accesos directos de la PWA a *Acceso* y *Cobranza* desde el icono pulsado largo / clic derecho.

## Estructura

```
ludus-gym-prototipo/
├── index.html               # Shell de la app
├── manifest.webmanifest     # Identidad PWA, iconos y shortcuts
├── sw.js                    # Service worker para funcionamiento offline
├── icons/                   # Iconos 192, 512 y maskable
├── assets/
│   ├── styles.css           # Sistema "Terminal" + layouts PC/móvil
│   └── app.js               # Vistas, estado e interacciones
└── referencia/
    ├── DESIGN.md            # Sistema de diseño original
    └── pantallas/           # Los 8 diseños originales (HTML + PNG)
```

## Sistema de diseño

Revisión **Terminal / edición 2026** del sistema original. Superficies con temperatura (`#0e1113` → `#232a2f`), bordes de 1 px con bajo contraste y un único acento funcional (`#c7f04a`). El verde y el naranja quedan reducidos a señales semánticas, sin halos. Tipografía con tres registros: `Space Grotesk` para títulos y métricas, `Inter` para cuerpo e `IBM Plex Mono` para metadatos, IDs y cifras tabulares. Layout asimétrico sobre retícula de 4 px, tres radios de esquina y transiciones de 150 ms con `cubic-bezier`.

**Escritorio:** grilla de 12 columnas, paneles de 3/4/5/7/8 columnas y rail lateral fijo. **Móvil:** ancho completo, una columna, dock fijo con área segura (`env(safe-area-inset-bottom)`) y container queries para el reflow.

Incluye estados reales: foco visible, hover/active, botones deshabilitados por monto insuficiente, skeleton de arranque, búsqueda sin resultados con acción, `aria-current`, `aria-pressed`, `role="tab"` y soporte para `prefers-reduced-motion`.

> Nota: los datos (socio #0249, folio #REC-2024-08925, montos, fechas) son de demostración y provienen de los diseños de referencia.

## Próximos pasos sugeridos

1. Conectar un backend y autenticación (socio / admin).
2. Persistir socios, pagos, reservas y rutinas en base de datos.
3. Integrar un QR real y la sincronización con torniquetes.
4. Generación de recibos PDF y envío por WhatsApp.
5. Empaquetar como APK nativo con Capacitor si se requiere distribución en Google Play.
