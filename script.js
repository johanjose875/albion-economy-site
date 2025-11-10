// Marca activa en el menú
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (path==='index.html' && href==='index.html')) a.classList.add('active');
  });
})();

// Búsqueda simple de texto en las páginas con <input id="search">
(function(){
  const box = document.getElementById('search');
  if(!box) return;
  box.addEventListener('input', ()=>{
    const q = box.value.toLowerCase();
    document.querySelectorAll('[data-filter]').forEach(el=>{
      const hit = el.dataset.filter.toLowerCase().includes(q);
      el.style.display = hit ? '' : 'none';
    });
  });
})();

// Copiar texto rápido en guías de trucos
function copyText(text){
  navigator.clipboard.writeText(text).then(()=>{
    alert('Copiado al portapapeles ✔');
  });
}

// --- Menú móvil toggle ---
(function(){
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('main-menu');
  if(!btn || !menu) return;

  btn.addEventListener('click', ()=>{
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar el menú al navegar
  menu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
})();
