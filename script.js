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
