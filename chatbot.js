// Chatbot MTBR
(function () {
  const WA = 'https://wa.me/525543687983';

  const CATALOG = [
    { id: 2,  zone: 'portales-norte', name: 'Antillas · terraza privada',      price: '$4,580,700',  beds: 2, baths: 2, area: 85  },
    { id: 3,  zone: 'portales-norte', name: 'Antillas · balcón',               price: '$4,720,860',  beds: 2, baths: 2, area: 69  },
    { id: 4,  zone: 'portales-norte', name: 'Antillas · roof privado 136 m²',  price: '$5,886,444',  beds: 2, baths: 2, area: 136 },
    { id: 5,  zone: 'portales-norte', name: 'Antillas 408-103',                price: '$4,286,909',  beds: 2, baths: 2, area: 60  },
    { id: 6,  zone: 'portales-sur',   name: 'Bélgica · balcón + roof garden',  price: '$5,362,751',  beds: 2, baths: 2, area: 81  },
    { id: 7,  zone: 'portales-sur',   name: 'Bélgica · exterior mascotas OK',  price: '$4,706,313',  beds: 2, baths: 2, area: 77  },
    { id: 8,  zone: 'portales-norte', name: 'Emperadores · roof garden',       price: '$3,944,000',  beds: 2, baths: 2, area: 71  },
    { id: 9,  zone: 'narvarte',       name: 'Obrero Mundial · balcón 74 m²',   price: '$4,851,450',  beds: 2, baths: 2, area: 74  },
    { id: 10, zone: 'narvarte',       name: 'Obrero Mundial · terraza 201',    price: '$5,631,500',  beds: 2, baths: 2, area: 79  },
    { id: 11, zone: 'narvarte',       name: 'Obrero Mundial · terraza 36 m²',  price: '$5,858,100',  beds: 2, baths: 2, area: 74  },
    { id: 12, zone: 'narvarte',       name: 'Obrero Mundial · terraza 41 m²',  price: '$6,010,225',  beds: 2, baths: 2, area: 74  },
    { id: 13, zone: 'narvarte',       name: 'The Park · alberca y gimnasio',   price: '$4,000,000',  beds: 2, baths: 2, area: 67  },
    { id: 14, zone: 'narvarte',       name: 'Obrero Mundial · 1 rec roof',     price: '$3,660,600',  beds: 1, baths: 1, area: 58  },
    { id: 15, zone: 'narvarte',       name: 'Obrero Mundial · 1 rec roof priv',price: '$4,462,725',  beds: 1, baths: 1, area: 58  },
    { id: 16, zone: 'narvarte',       name: 'Obrero Mundial · 2 rec nivel 2',  price: '$4,712,000',  beds: 2, baths: 2, area: 74  },
    { id: 17, zone: 'narvarte',       name: 'Obrero Mundial · 2 rec nivel 3',  price: '$4,744,000',  beds: 2, baths: 2, area: 74  },
    { id: 18, zone: 'del-valle',      name: 'Del Valle Sur · 3 rec balcón',    price: '$6,950,000',  beds: 3, baths: 2, area: 114 },
    { id: 19, zone: 'narvarte',       name: 'Cumbres de Maltrata · alberca',   price: '$4,750,000',  beds: 2, baths: 2, area: 67  },
  ];

  const ZONE_LABELS = {
    'portales-norte': 'Portales Norte',
    'portales-sur':   'Portales Sur',
    'narvarte':       'Narvarte',
    'del-valle':      'Del Valle Sur',
  };

  const FLOWS = {
    start: {
      msg: '¡Hola! Soy el asistente de <strong>Mónica Terrés Bienes Raíces</strong>. ¿En qué puedo ayudarte hoy?',
      opts: [
        { label: '🏠 Quiero una casa o depa', next: 'comprar' },
        { label: '💰 Quiero vender mi inmueble', next: 'vender' },
        { label: '📊 Quiero una valuación gratis', next: 'valuacion' },
        { label: '🤝 Soy proveedor', next: 'proveedor' },
      ],
    },
    comprar: {
      msg: 'Tenemos <strong>18 inmuebles disponibles</strong> en las mejores zonas de la Alcaldía Benito Juárez. ¿Qué zona te interesa?',
      opts: [
        { label: '📍 Portales Norte', next: 'zona_portales_norte' },
        { label: '📍 Portales Sur',   next: 'zona_portales_sur'   },
        { label: '📍 Narvarte',       next: 'zona_narvarte'       },
        { label: '📍 Del Valle Sur',  next: 'zona_del_valle'      },
        { label: '🗺️ Ver todos',      next: 'zona_todos'          },
        { label: '💬 Hablar con Mónica', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, me interesa conocer inmuebles disponibles.'), '_blank') },
      ],
    },
    zona_portales_norte: {
      msg: 'Departamentos disponibles en <strong>Portales Norte</strong>:',
      catalog: 'portales-norte',
      opts: [
        { label: '🗺️ Ver otra zona', next: 'comprar' },
        { label: '💬 Hablar con Mónica', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, me interesan los departamentos en Portales Norte.'), '_blank') },
      ],
    },
    zona_portales_sur: {
      msg: 'Departamentos disponibles en <strong>Portales Sur</strong>:',
      catalog: 'portales-sur',
      opts: [
        { label: '🗺️ Ver otra zona', next: 'comprar' },
        { label: '💬 Hablar con Mónica', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, me interesan los departamentos en Portales Sur.'), '_blank') },
      ],
    },
    zona_narvarte: {
      msg: 'Departamentos disponibles en <strong>Narvarte</strong>:',
      catalog: 'narvarte',
      opts: [
        { label: '🗺️ Ver otra zona', next: 'comprar' },
        { label: '💬 Hablar con Mónica', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, me interesan los departamentos en Narvarte.'), '_blank') },
      ],
    },
    zona_del_valle: {
      msg: 'Departamentos disponibles en <strong>Del Valle Sur</strong>:',
      catalog: 'del-valle',
      opts: [
        { label: '🗺️ Ver otra zona', next: 'comprar' },
        { label: '💬 Hablar con Mónica', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, me interesan los departamentos en Del Valle Sur.'), '_blank') },
      ],
    },
    zona_todos: {
      msg: 'Estos son todos nuestros <strong>18 inmuebles disponibles</strong>:',
      catalog: 'all',
      opts: [
        { label: '💬 Hablar con Mónica', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, me interesa conocer inmuebles disponibles.'), '_blank') },
      ],
    },
    vender: {
      msg: '¡Excelente! Mónica te puede ayudar a vender tu inmueble al mejor precio. ¿Cómo prefieres continuar?',
      opts: [
        { label: '📋 Ver cómo funciona', action: () => location.href = 'vende.html' },
        { label: '📅 Programar una cita', next: 'cita' },
        { label: '💬 Hablar con Mónica', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, quiero vender mi inmueble y me gustaría más información.'), '_blank') },
      ],
    },
    valuacion: {
      msg: '¡Claro! Ofrecemos valuaciones <strong>gratuitas y sin compromiso</strong>. Déjanos tus datos y Mónica se pondrá en contacto contigo.',
      opts: [
        { label: '📋 Llenar formulario', action: () => location.href = 'contacto.html' },
        { label: '💬 Hablar con Mónica ahora', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, me interesa una valuación gratuita de mi inmueble.'), '_blank') },
      ],
    },
    proveedor: {
      msg: '¡Gracias por tu interés! Para colaboraciones con proveedores, ponte en contacto directamente con Mónica.',
      opts: [
        { label: '💬 Escribir por WhatsApp', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, soy proveedor y me gustaría platicar sobre una colaboración.'), '_blank') },
        { label: '📧 Ir a contacto', action: () => location.href = 'contacto.html' },
      ],
    },
    cita: {
      msg: '¡Perfecto! Para agendar una cita escríbele directamente a Mónica por WhatsApp y ella coordinará el horario contigo.',
      opts: [
        { label: '💬 Agendar por WhatsApp', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, me gustaría agendar una cita.'), '_blank') },
        { label: '🔙 Volver al inicio', next: 'start' },
      ],
    },
    credito: {
      msg: 'Trabajamos con los principales bancos e instituciones de crédito hipotecario. Mónica puede orientarte sobre las mejores opciones.',
      opts: [
        { label: '💬 Hablar con Mónica', action: () => window.open(WA + '?text=' + encodeURIComponent('Hola Mónica, me gustaría información sobre créditos hipotecarios.'), '_blank') },
        { label: '🔙 Volver al inicio', next: 'start' },
      ],
    },
  };

  function getPropUrl(id) {
    // works from any page in the same directory
    var base = window.location.href.replace(/[^/]*$/, '');
    return base + 'propiedad.html?id=' + id;
  }

  function buildWidget() {
    const style = document.createElement('style');
    style.textContent = `
      #mtbr-chat-btn {
        position: fixed; bottom: 28px; right: 28px; z-index: 9999;
        width: 60px; height: 60px; border-radius: 50%;
        background: #8B6F4E; color: #fff; border: none; cursor: pointer;
        box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        display: flex; align-items: center; justify-content: center;
        font-size: 26px; transition: transform 0.2s, background 0.2s;
      }
      #mtbr-chat-btn:hover { transform: scale(1.08); background: #7a5f40; }
      #mtbr-chat-btn .notif {
        position: absolute; top: 4px; right: 4px;
        width: 14px; height: 14px; border-radius: 50%;
        background: #e74c3c; border: 2px solid #fff;
      }
      #mtbr-chat-box {
        position: fixed; bottom: 100px; right: 28px; z-index: 9999;
        width: 340px; max-width: calc(100vw - 40px);
        background: #fff; border-radius: 18px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        font-family: 'Inter', sans-serif; overflow: hidden;
        display: none; flex-direction: column;
        animation: mtbrSlideUp 0.25s ease;
      }
      @keyframes mtbrSlideUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      #mtbr-chat-header {
        background: #8B6F4E; color: #fff; padding: 14px 18px;
        display: flex; align-items: center; gap: 12px;
      }
      #mtbr-chat-header .avatar {
        width: 40px; height: 40px; border-radius: 50%;
        background: rgba(255,255,255,0.2);
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
      }
      #mtbr-chat-header .info { flex: 1; }
      #mtbr-chat-header .name { font-weight: 700; font-size: 15px; }
      #mtbr-chat-header .status { font-size: 12px; opacity: 0.85; }
      #mtbr-chat-close {
        background: none; border: none; color: #fff;
        font-size: 20px; cursor: pointer; opacity: 0.8; padding: 0;
      }
      #mtbr-chat-body {
        padding: 14px 14px 6px; display: flex; flex-direction: column; gap: 10px;
        max-height: 420px; overflow-y: auto;
      }
      .mtbr-bubble {
        background: #f4ede4; border-radius: 14px 14px 14px 4px;
        padding: 12px 14px; font-size: 14px; line-height: 1.5; color: #333;
        max-width: 90%;
      }
      .mtbr-opts { display: flex; flex-direction: column; gap: 7px; }
      .mtbr-opt-btn {
        background: #fff; border: 1.5px solid #8B6F4E; color: #8B6F4E;
        border-radius: 22px; padding: 9px 16px; font-size: 13px;
        cursor: pointer; text-align: left; transition: all 0.15s;
        font-family: inherit;
      }
      .mtbr-opt-btn:hover { background: #8B6F4E; color: #fff; }
      /* property cards */
      .mtbr-prop-list { display: flex; flex-direction: column; gap: 8px; }
      .mtbr-prop-card {
        background: #fff; border: 1.5px solid #e8e0d8; border-radius: 12px;
        padding: 12px 14px; display: flex; flex-direction: column; gap: 4px;
      }
      .mtbr-prop-name { font-size: 13px; font-weight: 700; color: #2B292A; line-height: 1.3; }
      .mtbr-prop-price { font-size: 14px; font-weight: 800; color: #8B6F4E; }
      .mtbr-prop-specs { font-size: 11px; color: #737273; }
      .mtbr-prop-link {
        margin-top: 6px; background: #8B6F4E; color: #fff;
        border: none; border-radius: 8px; padding: 7px 12px;
        font-size: 12px; font-weight: 700; cursor: pointer;
        font-family: inherit; text-align: center;
        text-decoration: none; display: block;
        transition: background 0.15s;
      }
      .mtbr-prop-link:hover { background: #7a5f40; }
      #mtbr-chat-back {
        padding: 8px 14px 10px; border-top: 1px solid #f0e8e0;
        display: flex; justify-content: flex-start;
      }
      #mtbr-chat-back button {
        background: none; border: none; color: #8B6F4E;
        font-size: 13px; cursor: pointer; padding: 0;
        font-family: inherit;
      }
      #mtbr-chat-back button:hover { text-decoration: underline; }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('button');
    btn.id = 'mtbr-chat-btn';
    btn.innerHTML = '💬<span class="notif"></span>';
    btn.title = 'Chatea con nosotros';

    const box = document.createElement('div');
    box.id = 'mtbr-chat-box';
    box.innerHTML = `
      <div id="mtbr-chat-header">
        <div class="avatar">🏠</div>
        <div class="info">
          <div class="name">Asistente MTBR</div>
          <div class="status">● En línea</div>
        </div>
        <button id="mtbr-chat-close">✕</button>
      </div>
      <div id="mtbr-chat-body"></div>
      <div id="mtbr-chat-back" style="display:none">
        <button id="mtbr-back-btn">← Volver al inicio</button>
      </div>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(box);

    let history = [];

    function renderCatalog(zone) {
      var items = zone === 'all' ? CATALOG : CATALOG.filter(function(p){ return p.zone === zone; });
      var list = document.createElement('div');
      list.className = 'mtbr-prop-list';
      items.forEach(function(p) {
        var card = document.createElement('div');
        card.className = 'mtbr-prop-card';
        card.innerHTML =
          '<div class="mtbr-prop-name">' + p.name + '</div>' +
          '<div class="mtbr-prop-price">' + p.price + '</div>' +
          '<div class="mtbr-prop-specs">🛏 ' + p.beds + ' rec &nbsp;|&nbsp; 🚿 ' + p.baths + ' baños &nbsp;|&nbsp; 📐 ' + p.area + ' m²</div>';
        var link = document.createElement('a');
        link.className = 'mtbr-prop-link';
        link.textContent = 'Ver propiedad →';
        link.href = getPropUrl(p.id);
        link.target = '_blank';
        card.appendChild(link);
        list.appendChild(card);
      });
      return list;
    }

    function renderStep(key) {
      const step = FLOWS[key];
      if (!step) return;
      history.push(key);

      const body = document.getElementById('mtbr-chat-body');
      body.innerHTML = '';

      const bubble = document.createElement('div');
      bubble.className = 'mtbr-bubble';
      bubble.innerHTML = step.msg;
      body.appendChild(bubble);

      if (step.catalog) {
        body.appendChild(renderCatalog(step.catalog));
      }

      if (step.opts && step.opts.length) {
        const opts = document.createElement('div');
        opts.className = 'mtbr-opts';
        step.opts.forEach(function(o) {
          const b = document.createElement('button');
          b.className = 'mtbr-opt-btn';
          b.textContent = o.label;
          b.onclick = function() {
            if (o.action) o.action();
            else if (o.next) renderStep(o.next);
          };
          opts.appendChild(b);
        });
        body.appendChild(opts);
      }

      const back = document.getElementById('mtbr-chat-back');
      back.style.display = key === 'start' ? 'none' : 'flex';

      body.scrollTop = 0;
    }

    btn.onclick = function() {
      const isOpen = box.style.display === 'flex';
      box.style.display = isOpen ? 'none' : 'flex';
      btn.querySelector('.notif').style.display = 'none';
      if (!isOpen) { history = []; renderStep('start'); }
    };

    document.getElementById('mtbr-chat-close').onclick = function() {
      box.style.display = 'none';
    };

    document.getElementById('mtbr-back-btn').onclick = function() {
      history = [];
      renderStep('start');
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }
})();
