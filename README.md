# Ludus Gym · Prototipo de gestión

Prototipo navegable y sencillo para presentar el avance del proyecto **Ludus Gym**, una aplicación de gestión integral de gimnasio (vista socio + vista administrador).

Está construido con **HTML, CSS y JavaScript puro**: no requiere instalación, compilación ni dependencias. Es una maqueta interactiva con datos de demostración, pensada para mostrar flujos y diseño, no para uso en producción.

## Cómo verlo

Opción 1: abre `index.html` directamente en tu navegador.

Opción 2 (recomendada), sirve la carpeta localmente:

```bash
cd ludus-gym-prototipo
python -m http.server 8000
# visitar http://localhost:8000
```

## Qué incluye

El prototipo cubre los **8 flujos** de los diseños originales, accesibles desde el menú lateral o la barra inferior del teléfono:

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
- Navegación por las 8 pantallas desde el menú lateral y la navegación inferior.
- Registro de pesos, hidratación `+250 ml`, progreso de rutina y reserva/cancelación de clases.
- Selección de plan y método de pago, cálculo de cambio y activación de socio que lleva al recibo.
- Pestañas del expediente, búsqueda de socios, suspensión de acceso, modal de credencial QR y notificaciones (`toast`).
- Diseño responsive: marco de teléfono en escritorio y pantalla completa en móvil.

## Estructura

```
ludus-gym-prototipo/
├── index.html            # Estructura del prototipo
├── assets/
│   ├── styles.css        # Sistema de diseño "Kinetic Obsidian"
│   └── app.js            # Pantallas, estado e interacciones
└── referencia/
    ├── DESIGN.md         # Sistema de diseño original
    └── pantallas/        # Los 8 diseños originales (HTML + captura PNG)
```

## Sistema de diseño

Se adapta el sistema **Kinetic Obsidian** incluido en el material original: fondos carbono (`#0D0F12`), acentos lima (`#CCFF00`), naranja (`#FF5500`) y verde menta (`#10B981`), tipografías Montserrat/Inter, tarjetas de cristal y glows sutiles.

> Nota: los datos (socio #0249, folio #REC-2024-08925, montos, fechas) son de demostración y provienen de los diseños de referencia.

## Próximos pasos sugeridos

1. Conectar un backend y autenticación (socio / admin).
2. Persistir socios, pagos, reservas y rutinas en base de datos.
3. Integrar un QR real y la sincronización con torniquetes.
4. Generación de recibos PDF y envío por WhatsApp.
5. Panel de reportes y control de inventario en tiempo real.
