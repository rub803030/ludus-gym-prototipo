/* ==========================================================================
   LUDUS GYM / TERMINAL
   App web progresiva · escritorio (12 col) y móvil (dock fijo).
   ========================================================================== */

const state = {
  role: 'socio',
  screen: 'socio-home',
  loading: true,
  bright: false,
  water: 2.4,
  progress: 25,
  weights: [70, 72.5, 71.5, 74, 73.5, 75, 76],
  bookingTab: 'hyrox',
  bookings: { b2: true },
  memberTab: 'datos',
  plan: 'mensual',
  method: 'efectivo',
  notify: { whatsapp: true, pass: true },
  search: '',
  suspended: false,
  form: {
    name: 'Alejandro Morales Torres',
    phone: '+52 55 4192 8301',
    email: 'alejandro.morales@gmail.com',
    emergency: 'Elena Torres · 55 1289 4432',
    blood: 'O+',
    cash: '700'
  }
};

const PLANS = {
  mensual: { name: 'Mensualidad General', price: 650, desc: 'Pesas, cardio y functional · 30 días' },
  dia: { name: 'Pase por día', price: 70, desc: 'Entrada individual para la jornada' },
  sesiones: { name: 'Talonario 10 sesiones', price: 550, desc: 'Vigente 60 días · visitas flexibles' }
};
const METHODS = {
  efectivo: 'Efectivo · Caja 01',
  tarjeta: 'Tarjeta · TPV Clip',
  spei: 'SPEI · Folio digital'
};

const money = n => '$' + new Intl.NumberFormat('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
const num = n => new Intl.NumberFormat('es-MX').format(n);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function qrSVG(seed) {
  const n = 25;
  let s = seed;
  const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
  const grid = Array.from({ length: n }, () => Array.from({ length: n }, () => rnd() > 0.48));
  const finder = (r0, c0) => {
    for (let i = -1; i <= 7; i++) for (let j = -1; j <= 7; j++) {
      const r = r0 + i, c = c0 + j;
      if (r < 0 || c < 0 || r >= n || c >= n) continue;
      const inBox = i >= 0 && i <= 6 && j >= 0 && j <= 6;
      grid[r][c] = inBox && ((i === 0 || i === 6 || j === 0 || j === 6) || (i >= 2 && i <= 4 && j >= 2 && j <= 4));
    }
  };
  finder(0, 0); finder(0, n - 7); finder(n - 7, 0);
  for (let i = 8; i < n - 8; i++) { grid[6][i] = i % 2 === 0; grid[i][6] = i % 2 === 0; }
  let rects = '';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (grid[r][c]) rects += `<rect x="${c + 2}" y="${r + 2}" width="1" height="1"/>`;
  return `<svg viewBox="0 0 ${n + 4} ${n + 4}" fill="#14181b" role="img" aria-label="Código QR de acceso">${rects}</svg>`;
}

function head(kicker, title, sub) {
  return `<header class="view-head"><p class="meta">${kicker}</p><h1>${title}</h1><p>${sub}</p></header>`;
}
function dock(active) {
  const items = [
    ['socio-home', 'socio', 'Acceso'], ['socio-routine', 'socio', 'Rutina'],
    ['socio-bookings', 'socio', 'Reservas'], ['socio-nutrition', 'socio', 'Nutrición'],
    ['admin-dashboard', 'admin', 'Operación']
  ];
  return `<nav class="dock" aria-label="Navegación de la vista">${items.map(([id, role, label]) =>
    `<button type="button" data-action="go" data-role="${role}" data-screen="${id}" ${id === active ? 'aria-current="page"' : ''}>${label}</button>`).join('')}</nav>`;
}
function meter(label, value, pct, kind = '') {
  return `<div class="meter"><div class="meter__head"><span>${label}</span><b>${value}</b></div>
    <div class="meter__track"><div class="meter__fill ${kind ? 'meter__fill--' + kind : ''}" style="width:${Math.min(100, pct)}%"></div></div></div>`;
}
function kv(rows) {
  return `<dl class="kv">${rows.map(([k, v]) => `<div class="kv__row"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
}
function toast(message) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = message;
  document.getElementById('toasts').append(el);
  setTimeout(() => el.remove(), 2800);
}

/* ========================== VISTA SOCIO ========================== */
function viewAcceso() {
  return head('SOCIO 0249 · SEDE CENTRAL', 'Control de acceso', 'Alejandro Morales · Membresía vigente') + `
    <div class="canvas">
      <section class="panel panel--signal span-7" aria-labelledby="pase-t">
        <p class="meta" id="pase-t" style="margin-bottom:12px">PASE ACTIVO / LECTOR T-01</p>
        <div class="pass">
          <div class="qr">${qrSVG(249)}</div>
          <div class="pass__data">
            <p class="pass__hint">Presenta el código al lector del torniquete 01.</p>
            ${meter('Renovación', '18 S', 72)}
            <button class="btn btn--sm" type="button" data-action="bright">${state.bright ? 'Brillo al máximo' : 'Aumentar brillo'}</button>
            <button class="btn btn--sm" type="button" data-action="dialog">Mostrar credencial</button>
          </div>
        </div>
      </section>

      <section class="panel span-5" aria-labelledby="mem-t">
        <div class="rule"><h2 id="mem-t">Membresía</h2><span class="status status--ok">Vigente</span></div>
        <p style="margin:0 0 4px;font:600 1rem/1.2 var(--font-display)">VIP All-Access</p>
        <p class="meta" style="margin:0 0 16px">CORTE 25 NOV 2024</p>
        <p class="metric">28<small>DÍAS DE CICLO</small></p>
        <div style="margin-top:14px">${meter('Ciclo consumido', '82%', 82, 'ok')}</div>
      </section>

      <section class="panel span-4" aria-label="Asistencias de noviembre">
        <p class="meta">ASISTENCIAS · NOV</p>
        <p class="metric" style="margin:10px 0">18<small>/ 25</small></p>
        ${meter('', '72%', 72)}
      </section>
      <section class="panel span-4" aria-label="Racha actual">
        <p class="meta">RACHA ACTUAL</p>
        <p class="metric" style="margin:10px 0">4<small>DÍAS</small></p>
        <p class="meta">RÉCORD 9 DÍAS</p>
      </section>
      <section class="panel span-4">
        <div class="rule"><h2>Último acceso</h2><span class="status status--ok">Registrado</span></div>
        <p class="metric" style="font-size:1.5rem">07:15<small>HOY</small></p>
        <p class="meta" style="margin:8px 0 0">TORNIQUETE PRINCIPAL A</p>
      </section>

      <section class="panel panel--signal span-7">
        <div class="rule"><h2>Próximo bloque</h2><span class="meta">HOY 18:00</span></div>
        <p style="margin:0;font-weight:600">Hyrox Race Conditioning</p>
        <p class="meta" style="margin:6px 0 14px">COACH IRVING C. · BOX 01 · CUPO 14</p>
        <button class="btn btn--primary btn--block" type="button" data-action="go" data-role="socio" data-screen="socio-bookings">Ver reserva activa</button>
      </section>

      <section class="panel span-5">
        <div class="rule"><h2>Gestión</h2></div>
        <div class="rows">
          <div class="row-item"><div class="row-item__body"><div class="row-item__title">Recibos</div><div class="row-item__sub">Historial de pagos · 4 documentos</div></div><div class="row-item__end"><button class="btn btn--sm" type="button" data-action="go" data-role="admin" data-screen="admin-receipt">Abrir</button></div></div>
          <div class="row-item"><div class="row-item__body"><div class="row-item__title">Coach Irving</div><div class="row-item__sub">Respuesta habitual en menos de 1 h</div></div><div class="row-item__end"><button class="btn btn--sm" type="button" data-action="toast" data-message="Conversación con Coach Irving abierta">Mensaje</button></div></div>
          <div class="row-item"><div class="row-item__body"><div class="row-item__title">Credencial</div><div class="row-item__sub">LUDUS-PASS-0249</div></div><div class="row-item__end"><button class="btn btn--sm" type="button" data-action="dialog">Mostrar</button></div></div>
        </div>
      </section>
    </div>
    ${dock('socio-home')}`;
}

function viewRutina() {
  const days = [['LUN', '21'], ['MAR', '22'], ['MIÉ', '23'], ['JUE', '24'], ['VIE', '25'], ['SÁB', '26']];
  const max = Math.max(...state.weights);
  return head('FASE HIPERTROFIA · DÍA 3', 'Empuje y core', 'Coach Irving C. · Pecho, deltoides anterior, tríceps') + `
    <div class="tabs" role="tablist" aria-label="Días de la semana">${days.map(([d, n], i) =>
      `<button class="tab" type="button" role="tab" aria-selected="${i === 2}" data-action="day">${d} ${n}</button>`).join('')}</div>
    <div class="canvas">
      ${[['DURACIÓN', '55', 'MIN'], ['ESFUERZO RPE', '8.5', '/ 10'], ['VOLUMEN', num(3240), 'KG'], ['DESCANSO', '90', 'S']].map(v =>
        `<section class="panel span-3"><p class="meta">${v[0]}</p><p class="metric" style="margin-top:8px">${v[1]}<small>${v[2]}</small></p></section>`).join('')}

      <section class="panel span-12">
        <div class="rule"><h2>Progreso de la sesión</h2><span class="meta">${Math.max(1, Math.round(state.progress / 25))} / 4 BLOQUES</span></div>
        ${meter('', state.progress + '%', state.progress)}
      </section>

      <section class="panel span-8">
        <div class="rule"><h2>Bloques de trabajo</h2><span class="meta">4 EJERCICIOS</span></div>
        <article class="ex"><span class="ex__code">A1</span><div><p class="ex__title">Press de banca plano con barra</p><p class="ex__meta">4 × 10 · objetivo 70 kg</p><p class="ex__meta ok">Cerrado en 72,5 kg · 10-10-10-9</p></div></article>
        <article class="ex ex--active"><span class="ex__code">A2</span><div><p class="ex__title">Press militar con mancuernas · banco 75°</p><p class="ex__meta">3 × 12 · 22 kg por lado · serie 2 de 3</p>
          <div class="duo" style="margin-top:10px">
            <div class="field" style="margin:0"><label for="w-real">Peso real</label><input id="w-real" type="number" value="22"><span class="field__hint">KG / LADO</span></div>
            <div class="field" style="margin:0"><label for="r-real">Repeticiones</label><input id="r-real" type="number" value="12"><span class="field__hint">REPS</span></div>
          </div>
        </div></article>
        <article class="ex"><span class="ex__code">B1</span><div><p class="ex__title">Fondos en paralelas con lastre</p><p class="ex__meta">3 series al fallo técnico · +10 kg sugeridos</p></div></article>
        <article class="ex"><span class="ex__code">C1/C2</span><div><p class="ex__title">Rueda abdominal + plancha isométrica</p><p class="ex__meta">4 rondas · 12 reps + 45 s de sostenimiento</p></div></article>
        <div class="duo" style="margin-top:16px">
          <button class="btn btn--primary" type="button" data-action="set">Registrar serie 2</button>
          <button class="btn" type="button" data-action="finish">Cerrar sesión</button>
        </div>
      </section>

      <section class="panel span-4">
        <div class="rule"><h2>Registro de carga</h2><span class="meta">${state.weights[state.weights.length - 1].toLocaleString('es-MX')} KG</span></div>
        <div style="display:flex;align-items:flex-end;gap:4px;height:52px;margin:4px 0 14px">
          ${state.weights.map(w => `<span style="flex:1;height:${Math.max(14, Math.round(w / max * 100))}%;background:var(--accent);opacity:.75"></span>`).join('')}
        </div>
        <div class="field field--inline">
          <div><label for="weight">Nuevo peso</label><input id="weight" type="number" step="0.5" placeholder="76.5" data-field="weight"></div>
          <button class="btn btn--primary" type="button" data-action="weight" id="weight-btn" disabled>Anotar</button>
        </div>
        <p class="field__hint">Anota el peso de la última serie completada.</p>
      </section>

      <p class="note span-12"><strong>Irving C.:</strong> en el press militar conserva la pelvis neutra. Dos segundos de pausa excéntrica en el pecho.</p>
    </div>
    ${dock('socio-routine')}`;
}

function viewNutricion() {
  const pct = Math.min(100, Math.round(state.water / 3.5 * 100));
  const meals = [
    ['07:30', 'PRE', 'Desayuno energético', 'Omelette de claras con espinacas y avena con proteína y frutos rojos.', 'P42 C65 G14'],
    ['13:30', 'POST', 'Almuerzo principal', 'Pollo a la plancha 200 g, arroz integral 150 g, verduras y aguacate.', 'P50 C70 G16'],
    ['17:00', 'SNACK', 'Batido anabólico', 'Whey con plátano y crema de cacahuate natural, sin azúcar añadida.', 'P34 C40 G12'],
    ['20:45', 'CENA', 'Regeneración', 'Salmón o atún, ensalada verde, chía y camote asado.', 'P45 C35 G18']
  ];
  return head('PLAN ACTIVO · FASE 2', 'Prescripción metabólica', 'Recomposición corporal · 2,450 kcal/día') + `
    <div class="canvas">
      <section class="panel panel--signal span-5">
        <p class="meta">META CALÓRICA DIARIA</p>
        <p class="metric" style="margin:10px 0 6px">${num(2450)}<small>KCAL</small></p>
        <p class="meta" style="margin:0">SUPERÁVIT DE 250 KCAL POST-SESIÓN</p>
      </section>
      <section class="panel span-7">
        <div class="rule"><h2>Macronutrientes</h2><span class="meta">FASE 2</span></div>
        <div class="stack">
          ${meter('Proteínas · 180 g', '29%', 29)}
          ${meter('Carbohidratos · 260 g', '42%', 42, 'warn')}
          ${meter('Grasas · 65 g', '24%', 24, 'ok')}
        </div>
      </section>
      <section class="panel span-5">
        <div class="rule"><h2>Hidratación</h2><span class="meta">OBJETIVO 3,50 L</span></div>
        <p class="metric" style="font-size:1.75rem;margin-bottom:12px">${state.water.toFixed(2).replace('.', ',')}<small>/ 3,50 L</small></p>
        ${meter('Progreso', pct + '%', pct, 'ok')}
        <button class="btn btn--block" type="button" data-action="water" style="margin-top:14px">Registrar +250 ml</button>
      </section>
      <section class="panel span-7">
        <div class="rule"><h2>Timing de tomas</h2><span class="meta">4 COMIDAS</span></div>
        ${meals.map((m, i) => `${i === 1 ? `<p class="marker">10:00 – 11:30 · BLOQUE DE HIPERTROFIA · WEIGHT ROOM</p>` : ''}
          <article class="meal"><span class="meal__time">${m[0]}</span><div><p class="meta" style="margin:0 0 2px">${m[1]}</p><p class="meal__title">${m[2]}</p><p class="meal__desc">${m[3]}</p><p class="meal__macros">${m[4]}</p></div></article>`).join('')}
        <div class="duo" style="margin-top:16px">
          <button class="btn" type="button" data-action="toast" data-message="Plan nutricional descargado en PDF">Descargar plan</button>
          <button class="btn" type="button" data-action="toast" data-message="Conversación con el nutriólogo abierta">Escribir al nutriólogo</button>
        </div>
      </section>
    </div>
    ${dock('socio-nutrition')}`;
}

function viewReservas() {
  const tabs = [['hyrox', 'Hyrox'], ['wod', 'Funcional WOD'], ['open', 'Open Box']];
  const days = [['LUN', '23'], ['MAR', '24'], ['MIÉ', '25'], ['JUE', '26'], ['VIE', '27'], ['SÁB', '28']];
  const classes = [
    ['b1', '07:00', 'Hyrox Engine & Erg', 'SkiErg + Rower · Box 01 · Irving C.', 6, 38],
    ['b2', '18:00', 'Hyrox Race Conditioning', 'Sled Push, Wall Balls, Burpees · Irving C.', 2, 88],
    ['b3', '19:30', 'Hyrox Strength & Sled', 'Trineo y zancadas lastradas · Box Central', 8, 50]
  ];
  return head('HYROX · LUDUS HUB', 'Reservas', 'Aforo 16 atletas · bloques de 60 minutos') + `
    <div class="tabs" role="tablist" aria-label="Categorías de clase">${tabs.map(([id, label]) =>
      `<button class="tab" type="button" role="tab" aria-selected="${state.bookingTab === id}" data-action="booking-tab" data-tab="${id}">${label}</button>`).join('')}</div>
    <div class="canvas">
      <section class="panel panel--signal span-12">
        <div class="rule"><h2>Programación oficial</h2><span class="meta">16 ATLETAS / SESIÓN</span></div>
        <p style="margin:0;color:var(--paper-dim)">Periodización para competencia: carrera, estaciones y control técnico por bloque.</p>
      </section>
      <div class="tabs span-12" role="group" aria-label="Semana del 23 al 28">${days.map(([d, n], i) =>
        `<button class="tab" type="button" aria-pressed="${i === 2}" data-action="day">${d} ${n}</button>`).join('')}</div>
      <section class="panel span-5">
        <div class="rule"><h2>Reserva activa</h2><span class="status status--ok">Check-in listo</span></div>
        <p class="meta" style="margin:0">MIÉ 25 OCT · 18:00 · CUPO 14</p>
        <p style="margin:6px 0 14px;font-weight:600">Hyrox Race Conditioning</p>
        <div class="duo">
          <button class="btn" type="button" data-action="toast" data-message="Bloque añadido al calendario">Añadir al calendario</button>
          <button class="btn" type="button" data-action="toast" data-message="Reserva cancelada sin cargo">Cancelar (-2 h)</button>
        </div>
      </section>
      <section class="panel span-7">
        <div class="rule"><h2>Clases del miércoles 25</h2><span class="meta">${classes.length} BLOQUES</span></div>
        ${classes.map(c => {
          const on = !!state.bookings[c[0]];
          return `<article class="ex"><span class="ex__code">${c[1]}</span><div>
            <div class="rule" style="margin-bottom:4px"><p class="ex__title" style="margin:0">${c[2]}</p>${c[4] <= 2 ? '<span class="status status--warn">Últimos 2</span>' : ''}</div>
            <p class="ex__meta">${c[3]}</p><p class="meta" style="margin:8px 0 6px">${c[4]}/16 CUPOS LIBRES</p>
            ${meter('', c[5] + '%', c[5], c[4] <= 2 ? 'warn' : '')}
            <button class="btn ${on ? '' : 'btn--primary'} btn--sm" type="button" data-action="booking" data-id="${c[0]}" style="margin-top:10px">${on ? 'Cancelar reserva' : 'Reservar bloque'}</button>
          </div></article>`;
        }).join('')}
      </section>
      <section class="panel panel--flat span-12">
        <p class="meta" style="margin-bottom:8px">NORMATIVA DEL BOX</p>
        <ol class="meta" style="margin:0;padding-left:18px;line-height:1.9;letter-spacing:.04em">
          <li>Aforo fijo en 16 atletas para sostener el feedback técnico.</li>
          <li>Cancelaciones hasta 2 h antes, sin consumo de créditos.</li>
          <li>Check-in en torniquete 10 minutos antes del bloque.</li>
        </ol>
      </section>
    </div>
    ${dock('socio-bookings')}`;
}

/* ======================= VISTA OPERACIÓN ======================= */
function viewCobranza() {
  const alerts = [
    ['Juan Pablo Silva', '#084', 'Cuota vencida hace 2 días · Mensualidad General', '$650.00', 'Cobrar', 'warn'],
    ['Mariana Rivas', '#142', 'Última sesión del talonario · Renovación sugerida', '$550.00', 'Renovar', 'idle'],
    ['Roberto Gómez', '#309', 'Pase diario expirado · Candidato a mensualidad', '', 'Convertir', 'idle']
  ].filter(a => a[0].toLowerCase().includes(state.search.toLowerCase()));

  return head('OPERACIÓN · RECEPCIÓN CENTRAL', 'Control de cobranza', '218 de 300 socios · Capacidad instalada 72,6%') + `
    <div class="canvas">
      <button class="btn btn--primary btn--block span-12" type="button" data-action="go" data-role="admin" data-screen="admin-register">Registrar cobro o alto de socio</button>

      <section class="panel panel--signal span-5">
        <p class="meta">CAPACIDAD INSTALADA</p>
        <p class="metric" style="margin:10px 0">218<small>/ 300 SOCIOS</small></p>
        ${meter('Ocupación', '72,6%', 72.6)}
        <p class="meta" style="margin:10px 0 0">82 LUGARES PARA ALCANZAR LA META</p>
      </section>
      <section class="panel span-3"><p class="meta">INGRESOS DEL MES</p><p class="metric" style="font-size:1.5rem;margin:10px 0 6px">${money(142350)}</p><p class="meta ok">+12% VS. MES ANTERIOR</p></section>
      <section class="panel span-4"><p class="meta">CUOTAS VENCIDAS</p><p class="metric warn" style="font-size:1.5rem;margin:10px 0 6px">14<small>SOCIOS</small></p><p class="meta warn">${money(9100)} POR RECUPERAR</p></section>

      <section class="panel span-5">
        <div class="rule"><h2>Cobro rápido</h2><span class="meta">TARIFAS VIGENTES</span></div>
        <table class="data">
          <caption class="sr-only">Catálogo de cobros</caption>
          <thead><tr><th>Concepto</th><th class="num">Importe</th><th class="num">Acción</th></tr></thead>
          <tbody>${[['Mensualidad General', 650, 'Cobrar'], ['Pase por día', 70, 'Emitir'], ['Talonario 10 sesiones', 550, 'Vender']].map(p =>
            `<tr><td>${p[0]}</td><td class="num">${money(p[1])}</td><td class="num"><button class="btn btn--sm" type="button" data-action="go" data-role="admin" data-screen="admin-register">${p[2]}</button></td></tr>`).join('')}</tbody>
        </table>
      </section>

      <section class="panel span-7">
        <div class="rule"><h2>Pendientes prioritarios</h2><span class="meta">14 REGISTROS</span></div>
        <div class="search"><span>BUSCAR</span><input type="search" data-field="search" value="${esc(state.search)}" placeholder="Nombre del socio" aria-label="Buscar socio pendiente"></div>
        ${alerts.length ? alerts.map(a => `
          <div class="row-item"><div class="row-item__body"><div class="row-item__title">${a[0]} <span class="meta">${a[1]}</span></div><div class="row-item__sub">${a[2]}</div>${a[3] ? `<div class="meta" style="margin-top:4px">${a[3]}</div>` : ''}</div>
            <div class="row-item__end"><button class="btn ${a[5] === 'warn' ? 'btn--primary' : ''} btn--sm" type="button" data-action="toast" data-message="${a[4]}: ${a[0]}">${a[4]}</button></div></div>`).join('')
          : `<div class="empty"><p>0 RESULTADOS PARA «${esc(state.search)}»</p><button class="btn btn--sm" type="button" data-action="clear-search">Limpiar búsqueda</button></div>`}
      </section>

      <section class="panel span-12">
        <div class="rule"><h2>Maquinaria</h2><span class="meta">2 FUERA DE SERVICIO</span></div>
        <div class="trio" style="margin-bottom:14px">
          ${[['40', 'EQUIPOS'], ['38', 'OPERATIVOS'], ['2', 'EN TALLER']].map(v => `<div style="text-align:center"><p class="metric" style="font-size:1.5rem">${v[0]}</p><p class="meta">${v[1]}</p></div>`).join('')}
        </div>
        <table class="data">
          <caption class="sr-only">Equipos en mantenimiento</caption>
          <thead><tr><th>Equipo</th><th>Zona</th><th class="num">Estado</th></tr></thead>
          <tbody>
            <tr><td>Crossover torre 2</td><td>Peso integrado</td><td class="num warn">Cable guía · hoy 16:00</td></tr>
            <tr><td>Caminadora LifeFitness 3</td><td>Cardio P1</td><td class="num warn">Sensor · diagnóstico</td></tr>
          </tbody>
        </table>
        <button class="btn btn--block" type="button" data-action="toast" data-message="Reporte de mantenimiento registrado" style="margin-top:14px">Reportar falla</button>
      </section>
    </div>
    ${dock('admin-dashboard')}`;
}

function viewAlta() {
  const price = PLANS[state.plan].price;
  const cash = parseFloat(state.form.cash) || 0;
  const change = Math.max(0, cash - price);
  const short = cash < price;
  const f = state.form;
  return head('RECEPCIÓN · CAJA 01', 'Alta de socio', 'Registro, cobro y credencial en una sola operación') + `
    <div class="canvas">
      <p class="meta span-12" style="margin:0">01 SOCIO &nbsp;—&nbsp; 02 PLAN &nbsp;—&nbsp; 03 COBRO</p>

      <section class="panel span-6">
        <div class="rule"><h2>Datos del socio</h2><span class="meta">EXPEDIENTE 0249</span></div>
        <div class="row-item" style="border:0;padding-top:0">
          <div class="row-item__body"><div class="row-item__title">Foto de acceso</div><div class="row-item__sub">Lista para captura óptica en torniquete</div></div>
          <button class="btn btn--sm" type="button" data-action="toast" data-message="Cámara lista para recapturar">Recapturar</button>
        </div>
        ${[['name', 'Nombre completo', 'text'], ['phone', 'Teléfono / WhatsApp', 'tel'], ['email', 'Correo electrónico', 'email'], ['emergency', 'Contacto de emergencia', 'text']].map(([k, label, type]) =>
          `<div class="field"><label for="f-${k}">${label}</label><input id="f-${k}" type="${type}" data-field="${k}" value="${esc(f[k])}"></div>`).join('')}
        <div class="field"><label for="f-blood">Tipo de sangre</label><select id="f-blood" data-field="blood">${['O+', 'A+', 'B+', 'AB+', 'O-'].map(b => `<option ${f.blood === b ? 'selected' : ''}>${b}</option>`).join('')}</select></div>
      </section>

      <section class="panel span-6">
        <div class="rule"><h2>Plan</h2><span class="meta">PASO 02 DE 03</span></div>
        ${Object.keys(PLANS).map(k => `<label class="option">
          <input type="radio" name="plan" value="${k}" data-plan="${k}" ${state.plan === k ? 'checked' : ''}>
          <span class="option__body"><span class="option__title">${PLANS[k].name}<b>${money(PLANS[k].price)}</b></span><span class="option__desc">${PLANS[k].desc}</span></span>
        </label>`).join('')}
        ${kv([['Inicio', '26 OCT 2024'], ['Corte', '25 NOV 2024'], ['Inscripción', 'Exonerada · promo apertura']])}
      </section>

      <section class="panel span-6">
        <div class="rule"><h2>Caja</h2><span class="meta">${METHODS[state.method].toUpperCase()}</span></div>
        <div class="stack" style="margin-bottom:14px">
          ${Object.keys(METHODS).map(k => `<label class="option" style="margin:0">
            <input type="radio" name="metodo" value="${k}" data-method="${k}" ${state.method === k ? 'checked' : ''}>
            <span class="option__body"><span class="option__title">${METHODS[k]}</span></span>
          </label>`).join('')}
        </div>
        <div class="duo">
          <div class="field"><label for="cash">Efectivo recibido</label><input id="cash" type="number" data-field="cash" value="${esc(f.cash)}" inputmode="decimal"></div>
          <div class="field"><label for="change">Cambio</label><output id="change">${money(change)}</output></div>
        </div>
        <div class="tabs" role="group" aria-label="Montos rápidos">
          ${[price, 700, 1000].map(v => `<button class="tab" type="button" data-action="quick-cash" data-value="${v}">${money(v)}</button>`).join('')}
        </div>
        <button class="btn btn--primary btn--block" type="button" data-action="charge" ${short ? 'disabled' : ''}>
          ${short ? `Faltan ${money(price - cash)}` : `Cobrar ${money(price)} y activar acceso`}
        </button>
        <p class="field__hint" style="margin-top:8px">${short ? 'El monto recibido no cubre el plan seleccionado.' : 'Al cobrar se genera el recibo y se habilita el torniquete.'}</p>
      </section>

      <section class="panel panel--flat span-6">
        <label class="option" style="margin:0 0 8px"><input type="checkbox" data-notify="whatsapp" ${state.notify.whatsapp ? 'checked' : ''}><span class="option__body"><span class="option__title">Enviar recibo por WhatsApp</span><span class="option__desc">${esc(f.phone)}</span></span></label>
        <label class="option" style="margin:0"><input type="checkbox" data-notify="pass" ${state.notify.pass ? 'checked' : ''}><span class="option__body"><span class="option__title">Generar credencial QR</span><span class="option__desc">Sincronización con torniquete 01</span></span></label>
        <div class="duo" style="margin-top:14px">
          <button class="btn" type="button" data-action="toast" data-message="Ticket enviado a la impresora térmica">Ticket térmico</button>
          <button class="btn" type="button" data-action="toast" data-message="Alta descartada">Descartar alta</button>
        </div>
        <p class="meta" style="margin:14px 0 0">OPERADOR: IRVING CONTRERAS · TURNO MAÑANA</p>
      </section>
    </div>
    ${dock('admin-dashboard')}`;
}

function viewExpediente() {
  const tabs = [['datos', 'Datos'], ['membresia', 'Membresía'], ['rutinas', 'Asignaciones'], ['asistencias', 'Asistencias']];
  let body = '';
  if (state.memberTab === 'datos') {
    body = `<section class="panel">
      <div class="rule"><h2>Información personal</h2><span class="meta">EDITABLE</span></div>
      ${kv([['Nombre', 'Alejandro Morales Torres'], ['Teléfono', '+52 55 4192 8301'], ['Correo', 'alejandro.morales@gmail.com'], ['Nacimiento', '14 JUL 1996 · 28 AÑOS'], ['Sangre', 'O positivo (O+)'], ['Emergencia', 'Elena Torres (madre) · 55 1289 4432']])}
      <p class="note">Sin lesiones activas reportadas. Apto para alta intensidad.</p>
    </section>`;
  } else if (state.memberTab === 'membresia') {
    body = `<section class="panel">
      <div class="rule"><h2>Membresía y finanzas</h2><span class="status status--ok">Vigente</span></div>
      ${kv([['Plan', 'Mensualidad General'], ['Cuota', money(650) + ' / mes'], ['Corte', '25 NOV 2024'], ['Último recibo', '#REC-2024-08925 · pagado']])}
      <div style="margin:14px 0">${meter('Días restantes', '28 DÍAS', 12)}</div>
      <div class="duo">
        <button class="btn btn--primary" type="button" data-action="go" data-role="admin" data-screen="admin-register">Cobrar o renovar</button>
        <button class="btn" type="button" data-action="toast" data-message="Cuenta congelada temporalmente">Congelar cuenta</button>
      </div>
    </section>`;
  } else if (state.memberTab === 'rutinas') {
    body = `<section class="panel">
      <div class="rule"><h2>Asignaciones</h2><span class="meta">GIMNASIO LUDUS</span></div>
      ${kv([['Entrenador', 'Coach Irving Contreras'], ['Protocolo', 'Recomposición · 2,450 kcal'], ['Lockers', '#34 · turno matutino']])}
      <p class="note">Solicitó información sobre los bloques Hyrox de los sábados.</p>
    </section>`;
  } else {
    body = `<section class="panel">
      <div class="rule"><h2>Asistencias · noviembre</h2><span class="meta">18 REGISTROS</span></div>
      <div class="trio" style="margin-bottom:14px">
        ${[['18', 'ASISTENCIAS'], ['4', 'RACHA'], ['9', 'RÉCORD']].map(v => `<div style="text-align:center"><p class="metric" style="font-size:1.5rem">${v[0]}</p><p class="meta">${v[1]}</p></div>`).join('')}
      </div>
      ${meter('Asistencia mensual', '72%', 72)}
      <p class="meta" style="margin:10px 0 0">ÚLTIMO ACCESO 07:15 · TORNIQUETE A</p>
    </section>`;
  }

  return head('OPERACIÓN · SOCIO 0249', 'Expediente', 'Alejandro Morales · alta el 26 OCT 2024') + `
    <div class="canvas">
      <section class="panel span-5">
        <div class="rule"><h2>Alejandro Morales Torres</h2><span class="status ${state.suspended ? 'status--warn' : 'status--ok'}">${state.suspended ? 'Acceso suspendido' : 'Al día'}</span></div>
        ${kv([['Socio', '#0249'], ['Ingreso', '26 OCT 2024'], ['Acceso', state.suspended ? 'Torniquete bloqueado' : 'Torniquete habilitado'], ['Credencial', 'Huella + QR activos']])}
        <div class="duo" style="margin-top:14px">
          <button class="btn" type="button" data-action="dialog">Ver credencial</button>
          <button class="btn" type="button" data-action="toast" data-message="Conversación con el socio abierta">Mensaje</button>
        </div>
      </section>
      <div class="span-7">
        <div class="tabs" role="tablist" aria-label="Secciones del expediente">${tabs.map(([id, label]) =>
          `<button class="tab" type="button" role="tab" aria-selected="${state.memberTab === id}" data-action="member-tab" data-tab="${id}">${label}</button>`).join('')}</div>
        ${body}
      </div>
      <div class="duo span-12">
        <button class="btn btn--primary" type="button" data-action="toast" data-message="Cambios guardados en el expediente">Guardar cambios</button>
        <button class="btn" type="button" data-action="suspend">${state.suspended ? 'Reactivar acceso' : 'Suspender acceso'}</button>
      </div>
    </div>
    ${dock('admin-dashboard')}`;
}

function viewRecibo() {
  return head('OPERACIÓN CERRADA · REC-2024-08925', 'Cobro registrado', 'Socio activado · torniquete sincronizado') + `
    <div class="canvas">
      <section class="panel panel--signal span-12" style="text-align:center">
        <p class="meta">TOTAL COBRADO</p>
        <p class="metric" style="margin:10px 0 6px;font-size:2.5rem">${money(650)}</p>
        <p class="meta">${METHODS.efectivo.toUpperCase()}</p>
      </section>
      <section class="panel span-5">
        <div class="rule"><h2>Credencial digital</h2><span class="meta">PASE INMEDIATO</span></div>
        <div class="pass"><div class="qr">${qrSVG(8925)}</div><div class="pass__data">
          <p style="margin:0;font-weight:600">Alejandro Morales Torres</p>
          <p class="meta" style="margin:0">SOCIO 0249 · LUDUS-PASS-0249</p>
          <p class="meta" style="margin:0">VÁLIDA HASTA 25 NOV 2024</p>
        </div></div>
      </section>
      <section class="panel span-7">
        <div class="rule"><h2>Recibo oficial</h2><span class="meta">FOLIO #REC-2024-08925</span></div>
        ${kv([['Fecha', '26 OCT 2024 · 08:42'], ['Caja', 'Caja 01 · Irving Contreras'], ['Método', 'Efectivo en recepción'], ['Acceso', 'Torniquete habilitado']])}
        <table class="data" style="margin-top:16px">
          <caption class="sr-only">Desglose del cobro</caption>
          <thead><tr><th>Concepto</th><th class="num">Importe</th></tr></thead>
          <tbody>
            <tr><td>Mensualidad General · 30 días</td><td class="num">${money(650)}</td></tr>
            <tr><td>Cuota de credencial <span class="meta ok">100% OFF</span></td><td class="num">${money(0)}</td></tr>
            <tr><td>Efectivo recibido</td><td class="num">${money(700)}</td></tr>
            <tr><td>Cambio entregado</td><td class="num">${money(50)}</td></tr>
            <tr><td><strong>Total pagado</strong></td><td class="num accent"><strong>${money(650)}</strong></td></tr>
          </tbody>
        </table>
      </section>
      <section class="panel span-5">
        <div class="rule"><h2>Entrega al socio</h2><span class="meta">WHATSAPP · 55 4192 8301</span></div>
        <p class="note" style="margin-top:0">«Alejandro, quedó registrado tu pago y tu pase QR. Presenta el código en el torniquete 01 a partir de hoy.»</p>
        <button class="btn btn--primary btn--block" type="button" data-action="toast" data-message="Recibo y credencial enviados por WhatsApp">Enviar recibo y credencial</button>
      </section>
      <div class="duo span-7">
        <button class="btn" type="button" data-action="toast" data-message="Ticket en impresora térmica">Imprimir ticket</button>
        <button class="btn" type="button" data-action="toast" data-message="Recibo descargado en PDF">Descargar PDF</button>
        <button class="btn" type="button" data-action="go" data-role="admin" data-screen="admin-register">Nueva alta</button>
        <button class="btn" type="button" data-action="go" data-role="admin" data-screen="admin-dashboard">Volver a cobranza</button>
      </div>
    </div>
    ${dock('admin-dashboard')}`;
}

const VIEWS = {
  'socio-home': viewAcceso, 'socio-routine': viewRutina, 'socio-nutrition': viewNutricion, 'socio-bookings': viewReservas,
  'admin-dashboard': viewCobranza, 'admin-register': viewAlta, 'admin-member': viewExpediente, 'admin-receipt': viewRecibo
};
const TITLES = {
  'socio-home': 'Control de acceso', 'socio-routine': 'Rutina y carga', 'socio-nutrition': 'Prescripción', 'socio-bookings': 'Reservas',
  'admin-dashboard': 'Cobranza', 'admin-register': 'Alta de socio', 'admin-member': 'Expediente', 'admin-receipt': 'Recibo'
};

const initialView = new URLSearchParams(location.search).get('view');
if (initialView && VIEWS[initialView]) {
  state.screen = initialView;
  state.role = initialView.startsWith('admin') ? 'admin' : 'socio';
}

function render() {
  const screen = document.getElementById('screen');
  const top = screen.scrollTop;
  if (state.loading) {
    screen.setAttribute('aria-busy', 'true');
    screen.innerHTML = '<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>';
  } else {
    screen.removeAttribute('aria-busy');
    screen.innerHTML = (VIEWS[state.screen] || viewAcceso)();
    screen.scrollTop = top;
  }
  document.querySelectorAll('.segment button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.role === state.role)));
  document.querySelectorAll('.rail button[data-screen]').forEach(b => {
    if (b.dataset.screen === state.screen) b.setAttribute('aria-current', 'page');
    else b.removeAttribute('aria-current');
  });
  document.title = 'Ludus Gym · ' + (TITLES[state.screen] || 'Terminal');
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const a = btn.dataset.action;
  if (a === 'go') {
    state.screen = btn.dataset.screen; state.role = btn.dataset.role;
    window.scrollTo(0, 0); render();
  } else if (a === 'role') {
    state.role = btn.dataset.role; state.screen = state.role === 'socio' ? 'socio-home' : 'admin-dashboard';
    window.scrollTo(0, 0); render();
  } else if (a === 'toast') {
    toast(btn.dataset.message);
  } else if (a === 'bright') {
    state.bright = !state.bright; render();
    toast(state.bright ? 'Brillo del lector al máximo' : 'Brillo automático restablecido');
  } else if (a === 'dialog') {
    document.getElementById('pass-qr').innerHTML = `<div class="qr">${qrSVG(249)}</div>`;
    document.getElementById('pass-dialog').showModal();
  } else if (a === 'close-dialog') {
    document.getElementById('pass-dialog').close();
  } else if (a === 'day') {
    btn.parentElement.querySelectorAll('.tab').forEach(b => { b.setAttribute('aria-selected', 'false'); b.setAttribute('aria-pressed', 'false'); });
    btn.setAttribute('aria-pressed', 'true'); btn.setAttribute('aria-selected', 'true');
  } else if (a === 'booking-tab') {
    state.bookingTab = btn.dataset.tab; render();
  } else if (a === 'member-tab') {
    state.memberTab = btn.dataset.tab; render();
  } else if (a === 'booking') {
    const id = btn.dataset.id; state.bookings[id] = !state.bookings[id]; render();
    toast(state.bookings[id] ? 'Bloque reservado · cupo confirmado' : 'Reserva cancelada');
  } else if (a === 'water') {
    state.water = Math.min(3.5, +(state.water + 0.25).toFixed(2)); render(); toast('250 ml registrados');
  } else if (a === 'set') {
    state.progress = 50; render(); toast('Serie 2 registrada · descanso de 90 s');
  } else if (a === 'finish') {
    state.progress = 100; render(); toast('Sesión cerrada y guardada');
  } else if (a === 'weight') {
    const v = parseFloat(document.getElementById('weight').value);
    if (v > 0) { state.weights.push(v); render(); toast(`Carga de ${v.toLocaleString('es-MX')} kg anotada`); }
  } else if (a === 'quick-cash') {
    state.form.cash = btn.dataset.value; render();
  } else if (a === 'charge') {
    state.screen = 'admin-receipt'; window.scrollTo(0, 0); render();
    toast('Cobro registrado · acceso habilitado');
  } else if (a === 'suspend') {
    state.suspended = !state.suspended; render();
    toast(state.suspended ? 'Acceso suspendido' : 'Acceso reactivado');
  } else if (a === 'clear-search') {
    state.search = ''; render(); document.querySelector('[data-field="search"]')?.focus();
  }
});

document.addEventListener('input', e => {
  const field = e.target.dataset.field;
  if (!field) return;
  if (field === 'search') {
    const caret = e.target.selectionStart;
    state.search = e.target.value; render();
    const next = document.querySelector('[data-field="search"]');
    if (next) { next.focus(); next.setSelectionRange(caret, caret); }
    return;
  }
  state.form[field] = e.target.value;
  if (field === 'cash') {
    const price = PLANS[state.plan].price;
    const cash = parseFloat(e.target.value) || 0;
    const out = document.getElementById('change');
    if (out) out.textContent = money(Math.max(0, cash - price));
    const btn = document.querySelector('[data-action="charge"]');
    if (btn) {
      btn.disabled = cash < price;
      btn.textContent = cash < price ? `Faltan ${money(price - cash)}` : `Cobrar ${money(price)} y activar acceso`;
    }
  }
  if (field === 'weight') {
    const btn = document.getElementById('weight-btn');
    if (btn) btn.disabled = !(parseFloat(e.target.value) > 0);
  }
});

document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.plan) { state.plan = t.dataset.plan; render(); }
  if (t.dataset.method) { state.method = t.dataset.method; render(); }
  if (t.dataset.notify) state.notify[t.dataset.notify] = t.checked;
});

/* PWA: instalación y trabajo offline */
let installPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  installPrompt = e;
  const btn = document.getElementById('install');
  if (btn) btn.hidden = false;
});
document.getElementById('install')?.addEventListener('click', async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  document.getElementById('install').hidden = true;
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

render();
setTimeout(() => { state.loading = false; render(); }, 260);
