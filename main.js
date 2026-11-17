/* Появление секций одним спокойным движением */
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

/* Герой — один организованный момент на загрузке */
const heroReveals = document.querySelectorAll('.hero .reveal');
heroReveals.forEach((el, i) => {
  setTimeout(() => el.classList.add('is-visible'), 150 + i * 160);
});

/* Форма заявки: локальная обработка без сервера */
const form = document.getElementById('lead-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const note = form.querySelector('[data-form-note]');
    const button = form.querySelector('.lead__submit');
    button.disabled = true;
    button.textContent = 'Отправлено';
    if (note) note.hidden = false;
    form.reset();
  });
}

/* Год в подвале */
const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();
