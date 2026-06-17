const iconMarkup = {
  DropIcon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3S6 10.2 6 14.6A6 6 0 0 0 18 14.6C18 10.2 12 3 12 3Z"/><path d="M9.4 15.2a2.9 2.9 0 0 0 3.8 2.5"/></svg>',
  FlameIcon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2S7 7.2 7 13a5 5 0 0 0 10 0c0-2.8-1.6-4.6-3-6 .1 2.8-1.5 4.1-3 5 .2-3.7 2-6.1 2-10Z"/></svg>',
  SnowIcon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"/><path d="M8 5l4 4 4-4M8 19l4-4 4 4M3.5 12h5.2M15.3 12h5.2"/></svg>',
  ClockIcon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l4 2"/></svg>',
  ShieldIcon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 5.8v5.8c0 4.2 2.8 7.7 7 9.4 4.2-1.7 7-5.2 7-9.4V5.8L12 3Z"/><path d="m8.8 12.3 2.1 2.1 4.4-5"/></svg>',
  FamilyIcon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3.5 19c.6-3.2 2.3-5 4.5-5s3.9 1.8 4.5 5M11.5 19c.6-3.2 2.3-5 4.5-5s3.9 1.8 4.5 5"/></svg>'
};

for (const [name, markup] of Object.entries(iconMarkup)) {
  document.querySelectorAll(name).forEach((node) => {
    node.outerHTML = markup;
  });
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
