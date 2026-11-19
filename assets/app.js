/* ==========================================================================
   LUDUS GYM · Prototipo navegable (sin frameworks)
   Datos de demostración tomados de los diseños originales de Stitch.
   ========================================================================== */

const ICONS = {
  qr: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM21 14v3M14 21h3M21 21h.01"/>',
  dumbbell: '<path d="M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8"/>',
  calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  utensils: '<path d="M3 2v7a3 3 0 0 0 6 0V2M6 2v20M17 2c-2 2-3 5-3 9h6c0-4-1-7-3-9ZM17 11v11"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  checkCircle: '<path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="m9 11 3 3L22 4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-5-4-6-4-11-2 2-3 3-3 5-1-1-2-3-2-5-3 3-5 6-5 11 0 4 3 7 7 7Z"/>',
  scale: '<path d="M12 4v16M6 20h12M4 8h16l2.5 7h-21L4 8ZM12 8v7"/>',
  trending: '<path d="M23 6 13.5 15.5 8.5 10.5 1 18"/><path d="M17 6h6v6"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-3 3-3-3 3-3Z"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>',
  receipt: '<path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3Z"/><path d="M9 8h6M9 12h6"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
  print: '<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  droplet: '<path d="M12 2.7 6.3 8.4a8 8 0 1 0 11.4 0L12 2.7Z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 6.7"/><path d="M20 4v7h-7"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'
};

function icon(name, cls = '') {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

const state = {
  role: 'socio',
  screen: 'socio-home',
  bright: false,
  water: 2.4,
  routineProgress: 25,
  weights: [70, 72.5, 71.5, 74, 73.5, 75, 76],
  bookingTab: 'hyrox',
  bookings: { b2: true },
  adminTab: 'datos',
  plan: 'mensual',
  payMethod: 'efectivo',
  switches: { whatsapp: true, qr: true },
  search: '',
  suspended: false,
  form: {
    name: 'Alejandro Morales Torres',
    phone: '+52 55 4192 8301',
    email: 'alejandro.morales@gmail.com',
    emergency: 'Elena Torres - 55 1289 4400',
    blood: 'O+',
    cash: '700'
  }
};

const PLANS = {
  mensual: { label: 'Mensualidad General', price: 650, desc: 'Acceso ilimitado pesas, functional & cardio 30 días' },
  dia: { label: 'Pase por Día', price: 70, desc: 'Entrada individual para entrenamiento hoy' },
  sesiones: { label: 'Paquete 10 Sesiones', price: 550, desc: 'Válido durante 60 días para visitas flexibles' }
};

/* QR decorativo determinista (no escaneable, suficiente para el prototipo) */
function qrSVG(seed) {
  const n = 25;
  let s = seed;
  const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
  const grid = Array.from({ length: n }, () => Array.from({ length: n }, () => rnd() > 0.48));

  const finder = (r0, c0) => {
    for (let i = -1; i <= 7; i++) {
      for (let j = -1; j <= 7; j++) {
        const r = r0 + i, c = c0 + j;
        if (r < 0 || c < 0 || r >= n || c >= n) continue;
        const inBox = i >= 0 && i <= 6 && j >= 0 && j <= 6;
        grid[r][c] = inBox && ((i === 0 || i === 6 || j === 0 || j === 6) || (i >= 2 && i <= 4 && j >= 2 && j <= 4));
      }
    }
  };
  finder(0, 0); finder(0, n - 7); finder(n - 7, 0);
  for (let i = 8; i < n - 8; i++) { grid[6][i] = i % 2 === 0; grid[i][6] = i % 2 === 0; }

  let rects = '';
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c]) rects += `<rect x="${c + 2}" y="${r + 2}" width="1" height="1"/>`;
    }
  }
  return `<svg viewBox="0 0 ${n + 4} ${n + 4}" fill="#0d0f12" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Código QR de acceso">${rects}</svg>`;
}

/* ---------- Piezas reutilizables ---------- */
function statusbar() {
  return `<div class="statusbar"><span>9:41</span><span class="statusbar__icons">${icon('zap')}${icon('bell')}</span></div>`;
}

function head(eyebrow, title, sub) {
  return `<header class="screen-head"><p class="eyebrow">${eyebrow}</p><h2 class="screen-title">${title}</h2><p class="screen-sub">${sub}</p></header>`;
}

const NAV = [
  { screen: 'socio-home', role: 'socio', label: 'Inicio/QR', icon: 'qr' },
  { screen: 'socio-routine', role: 'socio', label: 'Rutinas', icon: 'dumbbell' },
  { screen: 'socio-bookings', role: 'socio', label: 'Reservas', icon: 'calendar' },
  { screen: 'socio-nutrition', role: 'socio', label: 'Nutrición', icon: 'utensils' },
  { screen: 'admin-dashboard', role: 'admin', label: 'Admin', icon: 'shield' }
];

function bottomNav() {
  return `<nav class="bottom-nav" aria-label="Navegación principal">${NAV.map(item =>
    `<button type="button" class="${state.screen === item.screen ? 'active' : ''}" data-action="go" data-role="${item.role}" data-screen="${item.screen}">${icon(item.icon)}<span>${item.label}</span></button>`
  ).join('')}</nav>`;
}

function badge(text, kind = 'muted', dot = false) {
  return `<span class="badge badge--${kind}">${dot ? '<span class="dot"></span>' : ''}${text}</span>`;
}

function bar(pct, kind = '') {
  return `<div class="bar-track"><div class="bar-fill ${kind ? 'bar-fill--' + kind : ''}" style="width:${pct}%"></div></div>`;
}

function toast(message) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `${icon('checkCircle')}<span>${message}</span>`;
  document.getElementById('toasts').appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

/* ---------- PANTALLAS SOCIO ---------- */
function screenSocioHome() {
  return statusbar() + head('Socio #0249 · Sede Central', 'Pase de Acceso', 'Bienvenido Guerrero, Alejandro M.') + `
    <div class="row" style="margin-bottom:12px">
      <span class="badge badge--active" style="color:var(--emerald)"><span class="dot"></span>Torniquetes Online</span>
      <span class="card__label">Auto-refresh: 18s</span>
    </div>
    <div class="card card--volt" style="text-align:center">
      <p class="card__label" style="margin-bottom:12px">Acceso rápido RFID / QR</p>
      <div class="qr-frame" style="display:inline-block">${qrSVG(249)}</div>
      <p style="margin:16px 0 2px;font-family:var(--font-display);font-weight:800;letter-spacing:.14em">LUDUS</p>
      <p class="screen-sub" style="margin:0 0 14px">Coloca este código a 5cm del lector óptico del torniquete.</p>
      <div class="grid-2">
        <button class="btn btn--ghost" type="button" data-action="brightness">${icon('zap')}<span>${state.bright ? 'Brillo 100%' : 'Max. Brillo'}</span></button>
        <button class="btn btn--primary" type="button" data-action="qr-modal">${icon('qr')}<span>Código PIN</span></button>
      </div>
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Membresía</p><h3 class="card__title">VIP All-Access</h3></div>${badge('ACTIVA', 'active', true)}</div>
      <div class="row"><span class="row__label">Vigencia mensual</span><span class="row__value">25 Nov 2024</span></div>
      <div class="row"><span class="metric metric--sm">28 <span class="metric__unit">días restantes</span></span><span class="row__label">de ciclo</span></div>
      <div style="margin-top:10px">${bar(82, 'emerald')}</div>
      <p class="screen-sub" style="margin-top:6px">82% de ciclo completado · Renovado: 26 Oct</p>
    </div>
    <div class="grid-2" style="margin-top:12px">
      <div class="card card--plain"><p class="card__label">Asistencias · Nov</p><p class="metric" style="margin:8px 0 6px">18<span class="metric__unit">/25</span></p>${bar(72)}</div>
      <div class="card card--plain"><p class="card__label">Racha</p><p class="metric" style="margin:8px 0 6px">4<span class="metric__unit"> días</span></p><p class="screen-sub">Récord: 9 días</p></div>
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Último acceso registrado</p><h3 class="card__title">Hoy 07:15 AM</h3></div>${icon('checkCircle')}</div>
      <p class="screen-sub">Torniquete Principal A · Hoy Registrado</p>
    </div>
    <div class="card card--volt">
      <div class="card__head"><div><p class="card__label">Próxima actividad programada</p><h3 class="card__title">Hyrox Race Conditioning</h3></div>${badge('En 4 hrs', 'warn')}</div>
      <p class="screen-sub">HOY 18:00 HRS · Coach Irving Contreras · Box Arena 01</p>
      <p class="screen-sub">Cupo #14 Confirmado</p>
      <button class="btn btn--ghost btn--block btn--sm" type="button" data-action="go" data-role="socio" data-screen="socio-bookings" style="margin-top:12px">Ver mis reservas ${icon('arrowRight')}</button>
    </div>
    <div class="card">
      <p class="card__label" style="margin-bottom:8px">Gestión & Soporte</p>
      <div class="list-row"><span class="avatar">${icon('receipt')}</span><div class="list-row__main"><div class="list-row__title">Recibos</div><div class="list-row__sub">Historial de pagos y facturas</div></div><button class="btn btn--ghost btn--sm" type="button" data-action="go" data-role="admin" data-screen="admin-receipt">Ver</button></div>
      <div class="list-row"><span class="avatar">${icon('send')}</span><div class="list-row__main"><div class="list-row__title">Coach Irving</div><div class="list-row__sub">Chat de WhatsApp</div></div><button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Abriendo chat con Coach Irving…">Chat</button></div>
      <div class="list-row"><span class="avatar">${icon('qr')}</span><div class="list-row__main"><div class="list-row__title">Credencial</div><div class="list-row__sub">Guardar en Wallet</div></div><button class="btn btn--ghost btn--sm" type="button" data-action="qr-modal">Ver</button></div>
    </div>
    ${bottomNav()}`;
}

function screenSocioRoutine() {
  const days = [['LUN', '21'], ['MAR', '22'], ['HOY', '23'], ['JUE', '24'], ['VIE', '25'], ['SÁB', '26']];
  const maxW = Math.max(...state.weights);
  return statusbar() + head('Fase de fuerza · Hipertrofia', 'Día 3: Empuje & Core', 'Coach Irving C. · Pecho, deltoides anterior y tríceps') + `
    <div class="tabs">${days.map(([d, n], i) => `<button type="button" data-action="day" class="${i === 2 ? 'active' : ''}">${d} ${n}</button>`).join('')}</div>
    <div class="grid-2">
      <div class="card card--plain"><p class="card__label">Duración estimada</p><p class="metric" style="margin-top:8px">55<span class="metric__unit"> MIN</span></p></div>
      <div class="card card--plain"><p class="card__label">Esfuerzo RPE</p><p class="metric" style="margin-top:8px">8.5<span class="metric__unit"> /10</span></p></div>
      <div class="card card--plain"><p class="card__label">Volumen proyectado</p><p class="metric" style="margin-top:8px">3,240<span class="metric__unit"> KG</span></p></div>
      <div class="card card--plain"><p class="card__label">Descanso sugerido</p><p class="metric" style="margin-top:8px">90<span class="metric__unit"> SEG</span></p></div>
    </div>
    <div class="card" style="margin-top:12px">
      <div class="row"><p class="card__label">Progreso de la rutina</p><strong style="font-size:11px;color:var(--volt)">${state.routineProgress}%</strong></div>
      <div style="margin-top:8px">${bar(state.routineProgress)}</div>
      <p class="screen-sub" style="margin-top:6px">${state.routineProgress === 100 ? '4 de 4 completados' : state.routineProgress === 25 ? '1 de 4 completados' : '2 de 4 completados'}</p>
    </div>
    <div class="card" style="margin-top:12px">
      <div class="card__head"><div><p class="card__label">Bloques de trabajo</p><h3 class="card__title">4 ejercicios total</h3></div>${icon('dumbbell')}</div>
      <div class="exercise"><span class="exercise__num">01</span><div style="flex:1"><div class="row"><span class="exercise__name">Press de Banca Plano con Barra</span>${badge('COMPLETADO', 'active')}</div><p class="exercise__meta">Bloque A1 · 4 × 10 · Carga objetivo 70 kg</p><p class="exercise__meta" style="color:var(--volt)">Peso logrado: 72.5 kg · 10-10-10-9 reps</p></div></div>
      <div class="exercise" style="border-color:rgba(204,255,0,.4)"><span class="exercise__num">02</span><div style="flex:1"><div class="row"><span class="exercise__name">Press Militar con Mancuernas</span>${badge('EN CURSO', 'volt', true)}</div><p class="exercise__meta">Bloque A2 · 3 × 12 · 22 kg por mancuerna</p><div class="row" style="margin-top:8px"><span class="exercise__meta">Serie actual 2/3</span><span class="exercise__meta">S1: 22kg × 12 · S2: ACTIVA</span></div><div class="grid-2" style="margin-top:8px"><div class="field" style="margin:0"><label>Peso real (kg/lado)</label><input type="number" value="22" /></div><div class="field" style="margin:0"><label>Reps reales</label><input type="number" value="12" /></div></div></div></div>
      <div class="exercise"><span class="exercise__num">03</span><div style="flex:1"><div class="row"><span class="exercise__name">Fondos en Paralelas con Lastre</span>${badge('PENDIENTE', 'muted')}</div><p class="exercise__meta">Bloque B1 · 3 series al fallo técnico (+10 kg sugerido)</p></div></div>
      <div class="exercise"><span class="exercise__num">04</span><div style="flex:1"><div class="row"><span class="exercise__name">Rueda Ab + Plancha Isométrica</span>${badge('SUPER-SERIE', 'muted')}</div><p class="exercise__meta">Bloque C1 & C2 · 4 rondas · 12 reps + 45 seg</p></div></div>
      <button class="btn btn--primary btn--block" type="button" data-action="routine-set" style="margin-top:12px">${icon('timer')} Registrar Serie 2 & Cronómetro (90s)</button>
      <button class="btn btn--ghost btn--block btn--sm" type="button" data-action="routine-complete" style="margin-top:8px">${icon('check')} Completar entrenamiento de hoy</button>
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Nota del coach</p><h3 class="card__title">Irving Contreras</h3></div>${icon('info')}</div>
      <p class="screen-sub">"Mantén la pelvis neutra en el press militar y evita arquear la zona lumbar. 2 segundos de pausa excéntrica en el pecho."</p>
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Registro de pesos</p><h3 class="card__title">Últimas sesiones</h3></div><span class="metric metric--sm">${state.weights[state.weights.length - 1]}<span class="metric__unit"> kg</span></span></div>
      <div class="sparkline">${state.weights.map(w => `<span style="height:${Math.max(12, Math.round(w / maxW * 100))}%"></span>`).join('')}</div>
      <div class="row" style="margin-top:12px"><div class="field" style="margin:0;flex:1"><label>Nuevo peso (kg)</label><input id="weight-value" type="number" step="0.5" placeholder="76.5" /></div><button class="btn btn--primary" type="button" data-action="weight-add" style="margin-top:14px">${icon('plus')} Registrar</button></div>
    </div>
    ${bottomNav()}`;
}

function screenSocioNutrition() {
  const pct = Math.min(100, Math.round(state.water / 3.5 * 100));
  const meals = [
    { time: '07:30 AM · Pre-Entreno', title: 'Comida 1: Desayuno Energético', desc: 'Omelette de 3 claras y 1 huevo entero con espinacas + Avena con proteína y frutos rojos.', p: 42, c: 65, g: 14 },
    { time: '01:30 PM · Post-Entreno', title: 'Comida 2: Almuerzo Principal', desc: 'Pechuga de pollo a la plancha (200g), arroz integral (150g), verduras al vapor y aguacate.', p: 50, c: 70, g: 16 },
    { time: '05:00 PM · Media Tarde', title: 'Comida 3: Snack Anabólico', desc: 'Batido de proteína Whey con plátano maduro y crema de cacahuate natural sin azúcar.', p: 34, c: 40, g: 12 },
    { time: '08:45 PM · Cena Regenerativa', title: 'Comida 4: Descanso & Recuperación', desc: 'Salmón o atún fresco con ensalada verde, semillas de chía y camote asado.', p: 45, c: 35, g: 18 }
  ];
  return statusbar() + head('Plan activo · Fase 2: Hipertrofia', 'Prescripción Metabólica', 'Recomposición corporal y ganancia muscular') + `
    <div class="card card--volt">
      <p class="card__label">Meta calórica diaria</p>
      <p class="metric" style="margin:8px 0 2px">2,450 <span class="metric__unit">kcal</span></p>
      <p class="screen-sub" style="margin:0">Superávit controlado (+250 kcal post-sesión)</p>
    </div>
    <div class="card" style="margin-top:12px">
      <div class="card__head"><p class="card__label">Macronutrientes</p>${badge('Fase 2', 'volt')}</div>
      ${[['Proteínas', '180g (29%)', 29, ''], ['Carbohidratos', '260g (42%)', 42, 'ignition'], ['Grasas Saludables', '65g (24%)', 24, 'emerald']].map(m =>
        `<div style="margin-bottom:12px"><div class="row"><span class="row__label">${m[0]}</span><span class="row__value">${m[1]}</span></div><div style="margin-top:6px">${bar(m[2], m[3])}</div></div>`
      ).join('')}
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Hidratación celular</p><h3 class="card__title">${state.water.toFixed(2).replace('.', ',')}L <span class="metric__unit">/ 3,5L diarios</span></h3></div><span class="metric metric--sm" style="color:var(--emerald)">${pct}%</span></div>
      ${bar(pct, 'emerald')}
      <button class="btn btn--ghost btn--block btn--sm" type="button" data-action="water-add" style="margin-top:12px">${icon('droplet')} +250 ml</button>
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Timing de comidas</p><h3 class="card__title">4 tomas diarias</h3></div>${icon('clock')}</div>
      ${meals.map((m, i) => `
        ${i === 1 ? `<div class="notice" style="margin:10px 0;background:rgba(204,255,0,.06);border-color:rgba(204,255,0,.25);color:#dce9b4">${icon('dumbbell')}<span><strong>10:00 - 11:30 AM</strong> · Bloque de Hipertrofia & Fuerza (Weight Room)</span></div>` : ''}
        <div class="exercise"><span class="exercise__num" style="color:${i % 2 ? 'var(--ignition)' : 'var(--volt)'}">${String(i + 1).padStart(2, '0')}</span><div style="flex:1"><p class="exercise__meta" style="color:var(--volt)">${m.time}</p><p class="exercise__name" style="margin-top:3px">${m.title}</p><p class="exercise__meta" style="margin:4px 0 8px">${m.desc}</p><div class="row" style="justify-content:flex-start;gap:6px">${badge('P ' + m.p + 'g', 'volt')}${badge('C ' + m.c + 'g', 'warn')}${badge('G ' + m.g + 'g', 'muted')}</div></div></div>
      `).join('')}
      <div class="grid-2" style="margin-top:12px">
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Descargando PDF del plan nutricional…">${icon('download')} PDF del plan</button>
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Abriendo chat con el Nutriólogo…">${icon('send')} Consultar</button>
      </div>
    </div>
    ${bottomNav()}`;
}

function screenSocioBookings() {
  const classes = [
    { id: 'b1', time: '07:00 AM', dur: '60 MIN', title: 'Hyrox Engine & Erg (SkiErg + Rower)', coach: 'Coach Irving Contreras · Box 01', free: 6, pct: 62.5 },
    { id: 'b2', time: '18:00 PM', dur: '60 MIN', title: 'Hyrox Race Conditioning', coach: 'Sled Push, Wall Balls & Burpees · Coach Irving', free: 2, pct: 87.5 },
    { id: 'b3', time: '19:30 PM', dur: '60 MIN', title: 'Hyrox Strength & Sled', coach: 'Trineo pesado + zancadas lastradas · Box Central', free: 8, pct: 50 }
  ];
  return statusbar() + head('Hyrox Official Training Hub', 'Reservas de Alto Rendimiento', 'Programación periodizada para competición y acondicionamiento metabólico') + `
    <div class="tabs">${[['hyrox', 'Clases Hyrox'], ['wod', 'Funcional WOD'], ['open', 'Open Box']].map(t =>
      `<button type="button" data-action="booking-tab" data-tab="${t[0]}" class="${state.bookingTab === t[0] ? 'active' : ''}">${t[1]}</button>`).join('')}</div>
    <div class="card card--volt">
      <div class="row"><span class="card__label">Oficial Ludus Hub</span>${badge('Intensidad Pro', 'warn')}</div>
      <h3 class="card__title" style="margin:8px 0 4px">Aforo limitado · 16 atletas</h3>
      <p class="screen-sub" style="margin:0">Estaciones oficiales de carrera y feedback técnico de alto rendimiento.</p>
    </div>
    <div class="tabs" style="margin-top:12px">${[['LUN', '23'], ['MAR', '24'], ['MIÉ', '25'], ['JUE', '26'], ['VIE', '27'], ['SÁB', '28']].map((d, i) =>
      `<button type="button" data-action="day" class="${i === 2 ? 'active' : ''}">${d} ${d[1]}${i === 2 ? ' · HOY' : ''}</button>`).join('')}</div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Mis reservas activas</p><h3 class="card__title">1 confirmada</h3></div>${badge('Check-in listo', 'active', true)}</div>
      <p class="screen-sub">MIÉRCOLES 25 OCT · 18:00 PM</p>
      <p class="card__title" style="margin:4px 0">Hyrox Race Conditioning</p>
      <p class="screen-sub">Sled Push, Wall Balls & Burpees · Coach Irving Contreras</p>
      <div class="grid-2" style="margin-top:12px">
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Clase añadida a tu calendario">${icon('calendar')} Calendario</button>
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Reserva cancelada sin penalización (-2h)">${icon('x')} Cancelar (-2h)</button>
      </div>
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Clases disponibles</p><h3 class="card__title">Miércoles 25</h3></div>${icon('calendar')}</div>
      ${classes.map(c => {
        const reserved = !!state.bookings[c.id];
        return `<div class="exercise"><span class="exercise__num">${c.time}</span><div style="flex:1">
          <div class="row"><span class="exercise__name">${c.title}</span>${c.free <= 2 ? badge('¡Últimos 2 lugares!', 'warn') : badge(c.dur, 'muted')}</div>
          <p class="exercise__meta" style="margin-top:4px">${c.coach}</p>
          <div class="row" style="margin-top:8px"><span class="exercise__meta">${c.free}/16 cupos libres</span>${reserved ? badge('Reservado', 'active', true) : ''}</div>
          <div style="margin-top:6px">${bar(100 - c.pct, c.free <= 2 ? 'ignition' : '')}</div>
          <button class="btn ${reserved ? 'btn--ghost' : 'btn--primary'} btn--block btn--sm" type="button" data-action="class-toggle" data-id="${c.id}" style="margin-top:9px">${reserved ? icon('check') + ' Cancelar reserva' : icon('plus') + ' Reservar Clase'}</button>
        </div></div>`;
      }).join('')}
    </div>
    <div class="card">
      <p class="card__label" style="margin-bottom:8px">Normativa del Ludus Box</p>
      <p class="screen-sub">• Aforo fijado en 16 atletas para garantizar feedback técnico.</p>
      <p class="screen-sub">• Cancelaciones hasta 2 horas antes sin penalización de créditos.</p>
      <p class="screen-sub">• Check-in en torniquete al menos 10 minutos antes del bloque.</p>
    </div>
    ${bottomNav()}`;
}

/* ---------- PANTALLAS ADMIN ---------- */
function screenAdminRegister() {
  const total = PLANS[state.plan].price;
  const cash = parseFloat(state.form.cash) || 0;
  const change = Math.max(0, cash - total);
  const f = state.form;
  return statusbar() + head('Módulo de admisión · Caja 01', 'Registrar Nuevo Socio & Cobro', 'Alta digital, membresía y acceso inmediato por torniquete') + `
    <div class="card card--plain">
      <div class="row">
        ${[['1. Socio', 'checkCircle'], ['2. Plan', 'checkCircle'], ['3. Cobro', 'cash']].map((s, i) =>
          `<span style="display:flex;align-items:center;gap:5px;font-size:10px;font-weight:700;color:${i === 2 ? 'var(--volt)' : 'var(--muted)'}">${icon(s[1])} ${s[0]}</span>`).join('')}
      </div>
    </div>
    <div class="card" style="margin-top:12px">
      <div class="card__head"><div><p class="card__label">Datos del socio</p><h3 class="card__title">Sustituyendo la libreta de papel</h3></div>${badge('EXPEDIENTE 2024', 'volt')}</div>
      <div class="row" style="margin-bottom:12px"><span class="avatar" style="width:52px;height:52px">${icon('qr')}</span><div style="flex:1"><p class="row__value">Foto de Acceso QR</p><p class="screen-sub">Listo para escaneo en torniquete</p></div><button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Foto recapturada correctamente">Recapturar</button></div>
      ${[['name', 'Nombre completo *', 'text'], ['phone', 'Teléfono / WhatsApp *', 'tel'], ['email', 'Correo electrónico *', 'email'], ['emergency', 'Contacto de emergencia', 'text']].map(field =>
        `<div class="field"><label>${field[1]}</label><input type="${field[2]}" data-field="${field[0]}" value="${f[field[0]]}" /></div>`).join('')}
      <div class="field" style="margin-bottom:0"><label>Tipo de sangre</label><select data-field="blood"><option ${f.blood === 'O+' ? 'selected' : ''}>O+</option><option ${f.blood === 'A+' ? 'selected' : ''}>A+</option><option ${f.blood === 'B+' ? 'selected' : ''}>B+</option><option ${f.blood === 'AB+' ? 'selected' : ''}>AB+</option><option ${f.blood === 'O-' ? 'selected' : ''}>O-</option></select></div>
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Modalidad & membresía</p><h3 class="card__title">Paso 2 de 3</h3></div>${badge('MÁS POPULAR', 'volt')}</div>
      ${Object.keys(PLANS).map(key => `
        <button class="exercise" type="button" data-action="plan-select" data-plan="${key}" style="width:100%;text-align:left;cursor:pointer;border-color:${state.plan === key ? 'rgba(204,255,0,.45)' : 'var(--border)'}">
          <span class="exercise__num">${state.plan === key ? '◉' : '○'}</span><div style="flex:1"><div class="row"><span class="exercise__name">${PLANS[key].label}</span><strong style="color:var(--volt)">$${PLANS[key].price} MXN</strong></div><p class="exercise__meta">${PLANS[key].desc}</p></div>
        </button>`).join('')}
      <div class="row" style="margin-top:12px"><span class="row__label">Inicia hoy</span><span class="row__value">26 Oct 2024</span></div>
      <div class="row"><span class="row__label">Fecha de corte</span><span class="row__value">25 Nov 2024</span></div>
      <div class="row"><span class="row__label">Cuota de inscripción</span><span><s style="color:var(--muted)">$200</s> <strong style="color:var(--emerald)">$0 MXN</strong></span></div>
      <p class="screen-sub" style="margin-top:8px">Promo Apertura 100% exonerada.</p>
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Método de pago & caja</p><h3 class="card__title">Total a cobrar</h3></div><span class="metric metric--sm">$${total} <span class="metric__unit">MXN</span></span></div>
      <div class="grid-3" style="margin-bottom:12px">
        ${[['efectivo', 'Efectivo', 'Caja chica', 'cash'], ['tarjeta', 'Tarjeta', 'TPV Clip', 'card'], ['spei', 'SPEI', 'Folio digital', 'receipt']].map(m =>
          `<button class="btn ${state.payMethod === m[0] ? 'btn--primary' : 'btn--ghost'} btn--sm" type="button" data-action="pay-method" data-method="${m[0]}">${icon(m[3])} ${m[1]}</button>`).join('')}
      </div>
      <div class="grid-2">
        <div class="field" style="margin:0"><label>Efectivo recibido</label><input type="number" data-field="cash" value="${f.cash}" /></div>
        <div class="field" style="margin:0"><label>Cambio a entregar</label><input value="$ ${change.toFixed(2)} MXN" readonly style="color:var(--emerald)" /></div>
      </div>
      <div class="row" style="margin-top:10px;justify-content:flex-start;gap:6px"><span class="card__label">Rápido:</span>${[total, 700, 1000].map(v => `<button class="btn btn--ghost btn--sm" type="button" data-action="quick-cash" data-value="${v}">$${v}</button>`).join('')}</div>
    </div>
    <div class="card">
      <p class="card__label" style="margin-bottom:10px">Emisión inmediata de acceso</p>
      ${[['whatsapp', 'Enviar recibo por WhatsApp', 'PDF fiscal al ' + f.phone], ['qr', 'Generar credencial QR de entrada', 'Sincronización con torniquetes']].map(sw =>
        `<button class="exercise" type="button" data-action="switch" data-key="${sw[0]}" style="width:100%;text-align:left;cursor:pointer">
          <span class="exercise__num" style="color:${state.switches[sw[0]] ? 'var(--volt)' : 'var(--muted)'}">${state.switches[sw[0]] ? '☑' : '☐'}</span>
          <div style="flex:1"><div class="exercise__name">${sw[1]}</div><p class="exercise__meta">${sw[2]}</p></div></button>`).join('')}
      <button class="btn btn--primary btn--block" type="button" data-action="register-submit" style="margin-top:14px">${icon('checkCircle')} Cobrar $${total} MXN y Activar Socio</button>
      <div class="grid-2" style="margin-top:8px">
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Ticket enviado a la impresora térmica">${icon('print')} Ticket térmico</button>
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Formulario descartado">${icon('x')} Descartar</button>
      </div>
      <p class="screen-sub" style="margin-top:10px">Registrado por Coach Irving Contreras · Turno recepción mañana</p>
    </div>
    ${bottomNav()}`;
}

function screenAdminMember() {
  const tabs = [['datos', 'Datos Generales'], ['membresia', 'Membresía & Pagos'], ['rutinas', 'Rutinas & Coach'], ['asistencias', 'Asistencias']];
  let content = '';
  if (state.adminTab === 'datos') {
    content = `<div class="card" style="margin-top:12px">
      <div class="card__head"><p class="card__label">Información personal</p>${badge('EDITABLE', 'volt')}</div>
      ${[['Nombre completo', 'Alejandro Morales Torres'], ['Teléfono móvil (WhatsApp)', '+52 55 4192 8301'], ['Correo electrónico', 'alejandro.morales@gmail.com'], ['Nacimiento / Edad', '14 Jul 1996 (28a)'], ['Tipo de sangre', 'O Positivo (O+)']].map(r =>
        `<div class="row"><span class="row__label">${r[0]}</span><span class="row__value">${r[1]}</span>${icon('edit')}</div>`).join('')}
      <div class="row"><span class="row__label">Contacto de emergencia</span><span class="row__value" style="text-align:right">Elena Torres (Madre)<br>+52 55 1289 4432</span></div>
      <div class="notice" style="margin-top:12px;background:rgba(16,185,129,.07);border-color:rgba(16,185,129,.25);color:#bfe9d9">${icon('shield')}<span>Sin lesiones activas reportadas · Apto para alta intensidad.</span></div>
    </div>`;
  } else if (state.adminTab === 'membresia') {
    content = `<div class="card" style="margin-top:12px">
      <div class="card__head"><p class="card__label">Membresía & finanzas</p>${badge('VIGENTE', 'active', true)}</div>
      <div class="row"><span class="row__label">Plan contratado</span><span class="row__value">Mensualidad General</span></div>
      <div class="row"><span class="metric metric--sm">$650.00 <span class="metric__unit">MXN / mes</span></span>${badge('28 DÍAS', 'volt')}</div>
      <p class="screen-sub" style="margin:8px 0 6px">Inicio: 26 Oct 2024 · Corte: 25 Nov 2024</p>${bar(12)}
      <div class="card card--plain" style="margin-top:14px"><div class="row"><span class="row__label">Último recibo</span>${badge('PAGADO', 'active')}</div><p class="row__value" style="margin-top:6px">#REC-2024-08925 · $650 MXN</p><p class="screen-sub">Cobrado por Irving Contreras · Efectivo</p></div>
      <div class="grid-2" style="margin-top:12px">
        <button class="btn btn--primary btn--sm" type="button" data-action="go" data-role="admin" data-screen="admin-register">${icon('cash')} Cobrar / Renovar</button>
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Cuenta congelada temporalmente">${icon('lock')} Congelar cuenta</button>
      </div>
    </div>`;
  } else if (state.adminTab === 'rutinas') {
    content = `<div class="card" style="margin-top:12px">
      <p class="card__label">Asignaciones & operación</p>
      <div class="list-row"><span class="avatar">${icon('user')}</span><div class="list-row__main"><div class="list-row__title">Coach Irving Contreras</div><div class="list-row__sub">Entrenador en turno</div></div><button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Selector de coach abierto">Cambiar</button></div>
      <div class="list-row"><span class="avatar">${icon('utensils')}</span><div class="list-row__main"><div class="list-row__title">Recomposición (2,450 kcal)</div><div class="list-row__sub">Protocolo nutricional activo</div></div>${icon('arrowRight')}</div>
      <div class="card card--plain" style="margin-top:10px"><p class="card__label">Notas de recepción y piso</p><p class="screen-sub" style="margin-top:6px">Locker asignado <strong style="color:var(--volt)">#34</strong>. Prefiere turno matutino (07:00 - 08:30 hrs). Solicitó información de clases Hyrox de sábados.</p></div>
    </div>`;
  } else {
    content = `<div class="card" style="margin-top:12px"><p class="card__label">Asistencias del mes · Noviembre</p>
      <div class="grid-3" style="margin:12px 0">${[['18', 'Asistencias'], ['4', 'Racha actual'], ['9', 'Récord']].map(v => `<div class="card card--plain" style="padding:10px;text-align:center"><p class="metric metric--sm">${v[0]}</p><p class="card__label">${v[1]}</p></div>`).join('')}</div>
      <p class="screen-sub">Último acceso: 07:15 AM · Torniquete Principal A</p><div style="margin-top:8px">${bar(72)}</div>
    </div>`;
  }

  return statusbar() + head('Admin · ID #0249', 'Expediente del Socio', 'Alejandro Morales Torres · Miembro desde 26 Oct 2024') + `
    <div class="card">
      <div class="row" style="margin-bottom:10px"><div>${badge(state.suspended ? 'ACCESO SUSPENDIDO' : 'ACTIVO / AL DÍA', state.suspended ? 'warn' : 'active', true)}</div>${badge('SOCIO #0249', 'volt')}</div>
      <div class="row"><span class="avatar" style="width:48px;height:48px">AM</span><div style="flex:1"><p class="card__title">Alejandro Morales Torres</p><p class="screen-sub">Miembro desde 26 Oct 2024 (1er mes)</p></div>${icon('shield')}</div>
      <div class="row" style="margin-top:10px"><span class="row__label">Acceso</span><span class="row__value" style="color:var(--emerald)">Torniquete habilitado</span></div>
      <p class="screen-sub">Huella + QR activos</p>
      <div class="grid-3" style="margin-top:12px">
        <button class="btn btn--ghost btn--sm" type="button" data-action="qr-modal">${icon('qr')} Ver QR</button>
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Abriendo WhatsApp del socio…">${icon('send')} WhatsApp</button>
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Credencial regenerada">${icon('refresh')} Regenerar</button>
      </div>
    </div>
    <div class="tabs" style="margin-top:12px">${tabs.map(t => `<button type="button" data-action="member-tab" data-tab="${t[0]}" class="${state.adminTab === t[0] ? 'active' : ''}">${t[1]}</button>`).join('')}</div>
    ${content}
    <div class="card" style="margin-top:12px">
      <div class="row"><button class="btn btn--primary btn--sm" type="button" data-action="toast" data-message="Modificaciones guardadas en el expediente">${icon('save')} Guardar modificaciones</button>
      <button class="btn btn--ghost btn--sm" type="button" data-action="suspend">${icon('ban')} Suspender acceso</button></div>
    </div>
    ${bottomNav()}`;
}

function screenAdminDashboard() {
  const alerts = [
    { name: 'Juan Pablo Silva', id: '#084', tag: 'Vencida hace 2 días', detail: 'Mensualidad General · $650 MXN', action: 'Cobrar', kind: 'warn' },
    { name: 'Mariana Rivas', id: '#142', tag: 'Última sesión (1 de 10)', detail: 'Paquete 10 clases · Renovación $550 MXN', action: 'Renovar', kind: 'volt' },
    { name: 'Roberto Gómez', id: '#309', tag: 'Pase temporal expirado', detail: 'Visita por día concluida', action: 'Convertir a socio', kind: 'muted' }
  ].filter(a => a.name.toLowerCase().includes(state.search.toLowerCase()));

  return statusbar() + head('Modo administrador · Recepción Central', 'Control de Cobranza', 'Libreta digitalizada · Meta: 300 socios') + `
    <button class="btn btn--primary btn--block" type="button" data-action="go" data-role="admin" data-screen="admin-register">${icon('plus')} Registrar cobro / nuevo socio</button>
    <div class="card card--volt" style="margin-top:12px">
      <div class="row"><div><p class="card__label">Capacidad instalada</p><h3 class="card__title">Socios activos</h3></div>${badge('72.6% CUPO', 'volt')}</div>
      <div class="row" style="margin-top:8px"><span class="metric">218<span class="metric__unit"> / 300</span></span>
        <svg viewBox="0 0 36 36" style="width:58px;height:58px"><circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="3"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="#ccff00" stroke-width="3" stroke-dasharray="72.6, 100" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg>
      </div>
      <p class="screen-sub">82 lugares disponibles para la meta</p>
    </div>
    <div class="grid-2" style="margin-top:12px">
      <div class="card card--plain"><p class="card__label">Ingresos del mes</p><p class="metric" style="margin:8px 0 4px;font-size:23px">$142,350</p><p class="screen-sub" style="color:var(--emerald)">↑ 12% vs. mes anterior</p></div>
      <div class="card card--plain" style="border-color:rgba(255,85,0,.3)"><p class="card__label">Cuotas vencidas</p><p class="metric" style="margin:8px 0 4px;font-size:23px;color:var(--ignition)">14 socios</p><p class="screen-sub">Por recuperar: $9,100</p></div>
    </div>
    <div class="card" style="margin-top:12px">
      <div class="card__head"><div><p class="card__label">Cobro rápido</p><h3 class="card__title">Modalidades de cobro</h3></div>${badge('CATÁLOGO 2024', 'muted')}</div>
      ${[['Mensualidad General', 'Acceso ilimitado 30 días', '$650', 'Cobrar mensualidad'], ['Pases por día', 'Entrada individual por jornada', '$70', 'Emitir pase hoy'], ['Paquete 10 sesiones', 'Boletera prepagada', '$550', 'Vender talonario']].map(p =>
        `<div class="list-row"><span class="avatar">${icon('cash')}</span><div class="list-row__main"><div class="list-row__title">${p[0]}</div><div class="list-row__sub">${p[1]}</div></div><div class="list-row__right"><strong style="color:var(--volt)">${p[2]}</strong><br><button class="btn btn--ghost btn--sm" type="button" data-action="go" data-role="admin" data-screen="admin-register" style="margin-top:4px">${p[3]}</button></div></div>`).join('')}
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Alertas prioritarias</p><h3 class="card__title">Cobros y vencimientos</h3></div>${badge('14 pendientes', 'warn')}</div>
      <div class="search-box">${icon('search')}<input type="search" placeholder="Buscar socio…" data-field="search" value="${state.search}" /></div>
      ${alerts.length ? alerts.map(a => `
        <div class="list-row"><span class="avatar" style="color:${a.kind === 'warn' ? 'var(--ignition)' : 'var(--volt)'}">${icon('user')}</span><div class="list-row__main"><div class="list-row__title">${a.name} <span class="card__label">${a.id}</span></div><div class="list-row__sub" style="color:${a.kind === 'warn' ? 'var(--ignition)' : 'var(--muted)'}">${a.tag}</div><div class="list-row__sub">${a.detail}</div></div><div class="list-row__right"><button class="btn ${a.kind === 'warn' ? 'btn--ignition' : 'btn--ghost'} btn--sm" type="button" data-action="toast" data-message="${a.action}: ${a.name}">${a.action}</button></div></div>`).join('') : '<p class="screen-sub">Sin resultados para esta búsqueda.</p>'}
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Maquinaria e inventario</p><h3 class="card__title">Estado operativo</h3></div>${icon('wrench')}</div>
      <div class="grid-3" style="margin-bottom:12px">${[['40', 'Equipos'], ['38', 'Operativos'], ['2', 'En mantenimiento']].map(v => `<div class="card card--plain" style="padding:10px;text-align:center"><p class="metric metric--sm">${v[0]}</p><p class="card__label">${v[1]}</p></div>`).join('')}</div>
      <div class="exercise">${icon('wrench')}<div style="flex:1"><div class="row"><span class="exercise__name">Polea Crossover Torre 2</span>${badge('CABLE GUÍA', 'warn')}</div><p class="exercise__meta">Cable desgastado · Técnico programado hoy 16:00 hrs. Repuesto en camino.</p></div></div>
      <div class="exercise" style="margin-top:8px">${icon('wrench')}<div style="flex:1"><div class="row"><span class="exercise__name">Caminadora LifeFitness #3</span>${badge('MOTOR BANDA', 'warn')}</div><p class="exercise__meta">Sensor de velocidad intermitente · Diagnóstico pendiente.</p></div></div>
      <button class="btn btn--ghost btn--block btn--sm" type="button" data-action="toast" data-message="Reporte de falla registrado para mantenimiento" style="margin-top:10px">${icon('alert')} Reportar falla o reparación</button>
    </div>
    ${bottomNav()}`;
}

function screenAdminReceipt() {
  return statusbar() + head('Transacción exitosa #LUD-8925', '¡Cobro y Registro Exitoso!', 'Transacción confirmada · #REC-2024-08925') + `
    <div class="card card--volt" style="text-align:center">
      ${badge('Socio activado y cobrado', 'active', true)}
      <p class="card__label" style="margin-top:12px">Total cobrado</p>
      <p class="metric" style="margin:6px 0">$650<span class="metric__unit">.00 MXN</span></p>
      <p class="screen-sub" style="margin:0">Efectivo · Caja 01</p>
    </div>
    <div class="card" style="margin-top:12px;text-align:center">
      <div class="row"><p class="card__label">Credencial digital</p>${badge('PASE INMEDIATO', 'volt')}</div>
      <p class="card__title" style="margin:10px 0 2px">Alejandro Morales Torres</p>
      <p class="screen-sub" style="margin:0">Socio #0249 · Huella + QR</p>
      <div class="qr-frame" style="display:inline-block;margin:18px 0 12px">${qrSVG(8925)}</div>
      <p class="card__label">LUDUS-PASS-0249</p>
      <p class="screen-sub" style="margin:6px 0 0">Membresía Mensual General · Válida hasta 25 Nov 2024</p>
    </div>
    <div class="card">
      <div class="card__head"><div><p class="card__label">Recibo digital oficial</p><h3 class="card__title">Folio #REC-2024-08925</h3></div>${icon('receipt')}</div>
      ${[['Fecha y hora', '26 Oct 2024 · 08:42 AM'], ['Caja y operador', 'Caja 01 · Coach Irving Contreras'], ['Método de pago', 'Efectivo en recepción'], ['Estatus de acceso', 'Torniquete habilitado']].map(r => `<div class="row"><span class="row__label">${r[0]}</span><span class="row__value">${r[1]}</span></div>`).join('')}
      <div class="card card--plain" style="margin-top:12px">
        <div class="list-row" style="padding-top:0"><div class="list-row__main"><div class="list-row__title">Mensualidad General Ludus</div><div class="list-row__sub">Acceso ilimitado pesas, cardio y funcional</div></div><strong>$650.00</strong></div>
        <div class="list-row"><div class="list-row__main"><div class="list-row__title">Cuota de inscripción ${badge('100% OFF', 'active')}</div><div class="list-row__sub">Promoción apertura de temporada</div></div><span><s style="color:var(--muted)">$350.00</s> <strong style="color:var(--emerald)">$0.00</strong></span></div>
      </div>
      <div class="card card--plain" style="margin-top:8px">
        ${[['Subtotal', '$650.00'], ['Descuento aplicado', '-$350.00'], ['Efectivo recibido', '$700.00'], ['Cambio entregado', '$50.00']].map(r => `<div class="row"><span class="row__label">${r[0]}</span><span class="row__value">${r[1]} MXN</span></div>`).join('')}
        <div class="row" style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border)"><strong>TOTAL PAGADO</strong><strong style="color:var(--volt)">$650.00 MXN</strong></div>
      </div>
      <div class="notice" style="margin-top:12px;background:rgba(16,185,129,.07);border-color:rgba(16,185,129,.25);color:#bfe9d9">${icon('send')}<span>Destino: +52 55 4192 8301 (Alejandro M.) · Listo para envío.<br><em>"Hola Alejandro, bienvenido a Ludus Gym. Adjuntamos tu recibo #REC-2024-08925 y tu pase QR para torniquete…"</em></span></div>
      <button class="btn btn--primary btn--block" type="button" data-action="toast" data-message="Recibo y QR enviados por WhatsApp">${icon('send')} Enviar recibo y QR por WhatsApp</button>
    </div>
    <div class="card">
      <p class="card__label" style="margin-bottom:10px">Acciones de mostrador · Terminal #01</p>
      <div class="grid-2">
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Imprimiendo ticket térmico">${icon('print')} Imprimir ticket</button>
        <button class="btn btn--ghost btn--sm" type="button" data-action="toast" data-message="Descargando recibo en PDF">${icon('download')} Descargar PDF</button>
        <button class="btn btn--ghost btn--sm" type="button" data-action="go" data-role="admin" data-screen="admin-register">${icon('plus')} Nuevo registro</button>
        <button class="btn btn--ghost btn--sm" type="button" data-action="go" data-role="admin" data-screen="admin-dashboard">${icon('chart')} Panel admin</button>
      </div>
    </div>
    ${bottomNav()}`;
}

const SCREENS = {
  'socio-home': screenSocioHome,
  'socio-routine': screenSocioRoutine,
  'socio-nutrition': screenSocioNutrition,
  'socio-bookings': screenSocioBookings,
  'admin-register': screenAdminRegister,
  'admin-member': screenAdminMember,
  'admin-dashboard': screenAdminDashboard,
  'admin-receipt': screenAdminReceipt
};

/* ---------- Render ---------- */
function render() {
  const scroller = document.getElementById('screen');
  const scroll = scroller.scrollTop;
  scroller.innerHTML = (SCREENS[state.screen] || screenSocioHome)();
  scroller.scrollTop = scroll;

  document.querySelectorAll('[data-action="role"]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.role === state.role);
  });
  document.querySelectorAll('.sidebar .nav-item[data-screen]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === state.screen);
  });
  document.title = `Ludus Gym · ${SCREEN_TITLES[state.screen] || 'Prototipo'}`;
}

const SCREEN_TITLES = {
  'socio-home': 'Pase de Acceso',
  'socio-routine': 'Rutina y pesos',
  'socio-nutrition': 'Nutrición',
  'socio-bookings': 'Reservas Hyrox',
  'admin-register': 'Registro y cobro',
  'admin-member': 'Expediente',
  'admin-dashboard': 'Control de cobranza',
  'admin-receipt': 'Recibo y QR'
};

/* ---------- Eventos ---------- */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const a = btn.dataset.action;

  if (a === 'go') {
    state.screen = btn.dataset.screen;
    state.role = btn.dataset.role;
    document.getElementById('screen').scrollTop = 0;
    render();
  } else if (a === 'role') {
    state.role = btn.dataset.role;
    state.screen = state.role === 'socio' ? 'socio-home' : 'admin-dashboard';
    document.getElementById('screen').scrollTop = 0;
    render();
  } else if (a === 'toast') {
    toast(btn.dataset.message);
  } else if (a === 'brightness') {
    state.bright = !state.bright;
    render();
    toast(state.bright ? 'Brillo al 100% para el lector óptico' : 'Brillo automático restaurado');
  } else if (a === 'qr-modal') {
    document.getElementById('qr-modal-content').innerHTML = `<div class="qr-frame" style="display:inline-block">${qrSVG(249)}</div>`;
    document.getElementById('qr-modal').hidden = false;
  } else if (a === 'close-modal') {
    document.getElementById('qr-modal').hidden = true;
  } else if (a === 'day') {
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  } else if (a === 'routine-set') {
    state.routineProgress = 50;
    render();
    toast('Serie 2 registrada · Cronómetro de 90 s iniciado');
  } else if (a === 'routine-complete') {
    state.routineProgress = 100;
    render();
    toast('¡Entrenamiento completado! Sesión guardada');
  } else if (a === 'weight-add') {
    const input = document.getElementById('weight-value');
    const value = parseFloat(input.value);
    if (value > 0) { state.weights.push(value); render(); toast(`Peso de ${value} kg registrado`); }
    else toast('Ingresa un peso válido');
  } else if (a === 'water-add') {
    state.water = Math.min(3.5, +(state.water + 0.25).toFixed(2));
    render();
    toast('250 ml de hidratación registrados');
  } else if (a === 'booking-tab') {
    state.bookingTab = btn.dataset.tab;
    render();
  } else if (a === 'class-toggle') {
    const id = btn.dataset.id;
    state.bookings[id] = !state.bookings[id];
    render();
    toast(state.bookings[id] ? 'Clase reservada · Cupo confirmado' : 'Reserva cancelada correctamente');
  } else if (a === 'member-tab') {
    state.adminTab = btn.dataset.tab;
    render();
  } else if (a === 'plan-select') {
    state.plan = btn.dataset.plan;
    render();
  } else if (a === 'pay-method') {
    state.payMethod = btn.dataset.method;
    render();
  } else if (a === 'quick-cash') {
    state.form.cash = btn.dataset.value;
    render();
  } else if (a === 'switch') {
    const key = btn.dataset.key;
    state.switches[key] = !state.switches[key];
    render();
  } else if (a === 'register-submit') {
    state.screen = 'admin-receipt';
    render();
    toast('Socio activado · Acceso sincronizado con torniquetes');
  } else if (a === 'suspend') {
    state.suspended = !state.suspended;
    render();
    toast(state.suspended ? 'Acceso suspendido temporalmente' : 'Acceso reactivado');
  }
});

document.addEventListener('input', (e) => {
  const field = e.target.dataset.field;
  if (!field) return;
  if (field === 'search') { state.search = e.target.value; render(); return; }
  state.form[field] = e.target.value;
  if (field === 'cash') {
    const total = PLANS[state.plan].price;
    const change = Math.max(0, (parseFloat(e.target.value) || 0) - total);
    const readonly = document.querySelector('input[readonly]');
    if (readonly) readonly.value = `$ ${change.toFixed(2)} MXN`;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.getElementById('qr-modal').hidden = true;
});

document.getElementById('qr-modal').addEventListener('click', (e) => {
  if (e.target.id === 'qr-modal') e.currentTarget.hidden = true;
});

render();
