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

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.main-nav a').forEach((item) => item.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const service = link.getAttribute('data-service');
    const input = document.querySelector(`input[name="service"][value="${service}"]`);
    if (input) input.checked = true;
  });
});

document.querySelectorAll('[data-review-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('is-active');
  });
});

const locationDetails = {
  boulder: {
    title: 'Boulder',
    copy: 'Mesa provides plumbing and sewer service throughout Boulder, including clogged drains, sewer backups, leaks, water heaters, and emergency plumbing repairs.',
    response: 'Same-day appointments available',
    services: 'Plumbing, sewer, drains, water heaters',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.6148246577477!2d-105.245935023455!3d40.01705047986744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf1cc19a1865d%3A0xc9ce44cbcc130f0a!2sMesa%20Plumbing%2C%20Heating%20and%20Cooling!5e0!3m2!1sen!2sph!4v1781731090707!5m2!1sen!2sph',
  },
  longmont: {
    title: 'Longmont',
    copy: 'Longmont homeowners can call Mesa for drain cleaning, sewer troubleshooting, pipe leaks, water heater issues, and urgent plumbing repairs.',
    response: 'Fast scheduling for Longmont homes',
    services: 'Drain cleaning, sewer service, leak repair',
    map: 'https://www.google.com/maps?q=Longmont%2C%20CO&output=embed',
  },
  lafayette: {
    title: 'Lafayette',
    copy: 'Mesa serves Lafayette with dependable plumbing and sewer support, from slow drains and backups to water heater and fixture repairs.',
    response: 'Local support across Lafayette',
    services: 'Sewer backups, drains, water heaters',
    map: 'https://www.google.com/maps?q=Lafayette%2C%20CO&output=embed',
  },
  louisville: {
    title: 'Louisville',
    copy: 'Louisville residents can count on Mesa for emergency plumbing, sewer line concerns, clogged drains, and common home plumbing repairs.',
    response: 'Emergency plumbing help available',
    services: 'Emergency plumbing, sewer, drain repairs',
    map: 'https://www.google.com/maps?q=Louisville%2C%20CO&output=embed',
  },
};

document.querySelectorAll('[data-location-button]').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = locationDetails[button.dataset.location];
    if (!detail) return;

    document.querySelectorAll('[data-location-button]').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');

    document.querySelector('[data-location-title]').textContent = detail.title;
    document.querySelector('[data-location-copy]').textContent = detail.copy;
    document.querySelector('[data-location-response]').textContent = detail.response;
    document.querySelector('[data-location-services]').textContent = detail.services;
    document.querySelector('[data-location-map]').src = detail.map;
  });
});

document.querySelectorAll('[data-lead-form]').forEach((leadForm) => {
  leadForm.addEventListener('submit', (event) => {
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
});
