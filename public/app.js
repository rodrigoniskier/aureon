const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('is-open', expanded);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
    nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); menu.focus();
  }
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  document.querySelectorAll('.project-card').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = `${count} projeto${count === 1 ? '' : 's'} em exibição.`;
}));
document.querySelector('#briefing-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const text = `BRIEFING DE PROJETO — AUREON SYSTEMS\n\nÁrea: ${data.get('area')}\nObjetivo: ${data.get('objective')}\nPúblico: ${data.get('audience')}\nPrazo desejado: ${data.get('timeline')}\n\nDocumento preparado localmente. Não enviado à Aureon Systems. Não constitui proposta ou contratação.\n`;
  const url = URL.createObjectURL(new Blob([text], {type:'text/plain;charset=utf-8'}));
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'briefing-aureon.txt'; anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#form-status').textContent = 'Briefing gerado. O download foi solicitado ao navegador. Nenhuma informação foi enviada.';
});
