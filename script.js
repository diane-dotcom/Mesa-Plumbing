if (window.lucide) {
  window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
}

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');

menuButton?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a, .header-actions a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const service = link.getAttribute('data-service');
    const input = document.querySelector(`input[name="service"][value="${service}"]`);
    if (input) input.checked = true;
  });
});

document.querySelector('[data-lead-form]')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim().split(' ')[0] || 'there';
  const service = String(data.get('service') || 'service').toLowerCase();
  const message = form.querySelector('.form-message');

  message.textContent = `Thanks, ${name}. Your ${service} request is ready. Mesa can connect this form to email, CRM, or scheduling next.`;
  message.classList.add('is-visible');
  form.reset();
});
