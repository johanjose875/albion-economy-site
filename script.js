// Marca activa en el menú
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (path==='index.html' && href==='index.html'))
      a.classList.add('active');
  });
})();

// Menú móvil toggle
(function(){
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('main-menu');
  if(!btn || !menu) return;

  btn.addEventListener('click', ()=>{
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
})();

// Búsqueda en guías
(function(){
  const box = document.getElementById('search');
  if(!box) return;
  box.addEventListener('input', ()=>{
    const q = box.value.toLowerCase();
    document.querySelectorAll('[data-filter]').forEach(el=>{
      el.style.display = el.dataset.filter.toLowerCase().includes(q) ? '' : 'none';
    });
  });
})();

// Copiar texto rápido
function copyText(text){
  navigator.clipboard.writeText(text).then(()=>alert('Copiado al portapapeles ✔'));
}
