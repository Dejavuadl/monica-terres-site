// Chatbot MTBR
(function () {
  const WA = 'https://wa.me/525543687983';

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
      msg: 'Contamos con <strong>18 inmuebles disponibles</strong> en las mejores zonas de CDMX. ¿Qué te gustaría hacer?',
      opts: [
        { label: '🔍 Conocer inmuebles', action: () => location.href = 'compra.html' },
        { label: '📅 Programar una cita', next: 'cita' },
        { label: '🏦 Informes de crédito', next: 'credito' },
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
      #mtbr-chat-body { padding: 18px; display: flex; flex-direction: column; gap: 14px; }
      .mtbr-bubble {
        background: #f4ede4; border-radius: 14px 14px 14px 4px;
        padding: 12px 14px; font-size: 14px; line-height: 1.5; color: #333;
        max-width: 90%;
      }
      .mtbr-opts { display: flex; flex-direction: column; gap: 8px; }
      .mtbr-opt-btn {
        background: #fff; border: 1.5px solid #8B6F4E; color: #8B6F4E;
        border-radius: 22px; padding: 9px 16px; font-size: 13px;
        cursor: pointer; text-align: left; transition: all 0.15s;
        font-family: inherit;
      }
      .mtbr-opt-btn:hover { background: #8B6F4E; color: #fff; }
      #mtbr-chat-back {
        padding: 10px 18px; border-top: 1px solid #f0e8e0;
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

      const opts = document.createElement('div');
      opts.className = 'mtbr-opts';
      step.opts.forEach(o => {
        const b = document.createElement('button');
        b.className = 'mtbr-opt-btn';
        b.textContent = o.label;
        b.onclick = () => {
          if (o.action) o.action();
          else if (o.next) renderStep(o.next);
        };
        opts.appendChild(b);
      });
      body.appendChild(opts);

      const back = document.getElementById('mtbr-chat-back');
      back.style.display = key === 'start' ? 'none' : 'flex';
    }

    btn.onclick = () => {
      const isOpen = box.style.display === 'flex';
      box.style.display = isOpen ? 'none' : 'flex';
      btn.querySelector('.notif').style.display = 'none';
      if (!isOpen) { history = []; renderStep('start'); }
    };

    document.getElementById('mtbr-chat-close').onclick = () => {
      box.style.display = 'none';
    };

    document.getElementById('mtbr-back-btn').onclick = () => {
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
