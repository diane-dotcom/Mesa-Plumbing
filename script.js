const createMesaIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });
  }
};

createMesaIcons();

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

document.querySelectorAll('.nav-trigger').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    if (trigger.tagName === 'A') return;
    event.preventDefault();
    const dropdown = trigger.closest('.nav-dropdown');
    if (!dropdown) return;

    const isOpen = dropdown.classList.contains('is-open');
    document.querySelectorAll('.nav-dropdown.is-open').forEach((item) => item.classList.remove('is-open'));
    dropdown.classList.toggle('is-open', !isOpen);
  });
});

document.addEventListener('click', (event) => {
  if (event.target.closest('.nav-dropdown')) return;
  document.querySelectorAll('.nav-dropdown.is-open').forEach((item) => item.classList.remove('is-open'));
});

const locationDetails = {
  boulder: {
    title: 'Boulder',
    copy: 'Mesa serves Boulder with plumbing repairs, sewer service, drain support, water heaters, HVAC, and emergency help.',
    response: 'Same-day appointments may be available',
    services: 'Plumbing, sewer, drains, water heaters, HVAC',
    map: 'https://www.google.com/maps?q=Boulder%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Boulder%2C%20Colorado',
  },
  longmont: {
    title: 'Longmont',
    copy: 'Mesa serves Longmont homeowners with reliable plumbing, sewer, drain, water heater, HVAC, and emergency support.',
    response: 'Local scheduling available',
    services: 'Plumbing repairs, sewer service, drains, HVAC',
    map: 'https://www.google.com/maps?q=Longmont%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Longmont%2C%20Colorado',
  },
  broomfield: {
    title: 'Broomfield',
    copy: 'Mesa serves Broomfield with plumbing repairs, sewer service, drain support, water heaters, HVAC, and emergency help.',
    response: 'Local scheduling available',
    services: 'Plumbing, sewer, drains, water heaters, HVAC',
    map: 'https://www.google.com/maps?q=Broomfield%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Broomfield%2C%20Colorado',
  },
  thornton: {
    title: 'Thornton',
    copy: 'Mesa serves Thornton with dependable plumbing, sewer, drain, water heater, HVAC, and urgent service support.',
    response: 'Appointments available by area route',
    services: 'Plumbing, sewer, drains, water heaters, HVAC',
    map: 'https://www.google.com/maps?q=Thornton%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Thornton%2C%20Colorado',
  },
  'commerce-city': {
    title: 'Commerce City',
    copy: 'Mesa serves Commerce City with plumbing repairs, sewer service, drain cleaning, water heaters, HVAC, and emergency support.',
    response: 'Appointments available by area route',
    services: 'Plumbing, sewer, drains, water heaters, HVAC',
    map: 'https://www.google.com/maps?q=Commerce%20City%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Commerce%20City%2C%20Colorado',
  },
  lakewood: {
    title: 'Lakewood',
    copy: 'Mesa serves Lakewood with plumbing repairs, sewer service, drain support, water heaters, HVAC, and emergency help.',
    response: 'Local scheduling available',
    services: 'Plumbing, sewer, drains, water heaters, HVAC',
    map: 'https://www.google.com/maps?q=Lakewood%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Lakewood%2C%20Colorado',
  },
  arvada: {
    title: 'Arvada',
    copy: 'Mesa serves Arvada with dependable plumbing, sewer, drain, water heater, HVAC, and emergency service support.',
    response: 'Local scheduling available',
    services: 'Plumbing, sewer, drains, water heaters, HVAC',
    map: 'https://www.google.com/maps?q=Arvada%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Arvada%2C%20Colorado',
  },
  lafayette: {
    title: 'Lafayette',
    copy: 'Mesa serves Lafayette with plumbing repairs, drain problems, sewer backups, water heaters, HVAC, and emergency help.',
    response: 'Appointments available by area route',
    services: 'Plumbing, sewer, drains, water heaters, HVAC',
    map: 'https://www.google.com/maps?q=Lafayette%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Lafayette%2C%20Colorado',
  },
  louisville: {
    title: 'Louisville',
    copy: 'Nearby Mesa service area for clean, dependable plumbing and sewer work from a local team.',
    response: 'Fast local service when available',
    services: 'Plumbing, sewer, drain, emergency help',
    map: 'https://www.google.com/maps?q=Louisville%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Louisville%2C%20Colorado',
  },
  'mesa-main': {
    title: 'Mesa Plumbing',
    copy: '1740 38th Street Boulder, CO. Mesa serves local plumbing, sewer, drain, water heater, and emergency service needs from this Boulder-area location.',
    response: 'Same-day appointments available',
    services: 'Plumbing, sewer, drains, water heaters',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.6148246577477!2d-105.245935023455!3d40.01705047986744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf1cc19a1865d%3A0xc9ce44cbcc130f0a!2sMesa%20Plumbing%2C%20Heating%20and%20Cooling!5e0!3m2!1sen!2sph!4v1781731090707!5m2!1sen!2sph',
    link: 'https://www.google.com/search?q=Mesa+Plumbing,+Heating+and+Cooling&stick=H4sIAAAAAAAA_-NgU1I1qLAwN0tKM0xONrRMNLQwM02xMqhItkxONTFJTgIKGhukGSQuYlXyTS1OVAjIKc1NysxL11HwSE0sATIUEvNSFJzz83OAbACPp1A4TgAAAA&hl=en&mat=CYEs_6XAdIs2ElcBa0lj_2hYosnL0kKF4aUrOm20SEOoZ3bRoD_fsaEW-FpXYQxSCMNUreyTY4LnwXaINVrLonftcb8tlUEJ25rz-Yrmpfy9DINMMN2ypvXlPOzbci196nk&authuser=0',
  },
  'mesa-drain-one': {
    title: 'Mesa Drain Cleaning',
    copy: '6260 Lookout Road #201 Boulder, CO. Mesa Drain Cleaning supports sewer backups, drain cleaning, clogged lines, and plumbing repair requests.',
    response: 'Drain and sewer scheduling available',
    services: 'Drain cleaning, sewer service, leak repair',
    map: 'https://www.google.com/maps?q=6260%20Lookout%20Road%20%23201%20Boulder%2C%20CO&output=embed',
    link: 'https://www.google.com/maps?q=6260%20Lookout%20Road%20%23201%20Boulder%2C%20CO',
  },
  'mesa-drain-two': {
    title: 'Mesa Sewer Repair',
    copy: '3050 Broadway Ste 311 Boulder, CO. Mesa Sewer Repair supports sewer line concerns, slow drains, backups, and emergency plumbing support.',
    response: 'Sewer repair support available',
    services: 'Sewer backups, drains, water heaters',
    map: 'https://www.google.com/maps?q=3050%20Broadway%20Ste%20311%20Boulder%2C%20CO&output=embed',
    link: 'https://www.google.com/maps?q=3050%20Broadway%20Ste%20311%20Boulder%2C%20CO',
  },
  mcadams: {
    title: 'McAdams Plumbing',
    copy: '6343 W 120th Avenue Suite 101 Broomfield, CO. McAdams Plumbing supports nearby plumbing repairs and local service details.',
    response: 'Nearby service information',
    services: 'Plumbing repairs and local service details',
    map: 'https://www.google.com/maps?q=6343%20W%20120th%20Avenue%20Suite%20101%20Broomfield%2C%20CO&output=embed',
    link: 'https://www.google.com/maps?q=6343%20W%20120th%20Avenue%20Suite%20101%20Broomfield%2C%20CO',
  },
};

const bindMesaContent = (root = document) => {
  createMesaIcons();

  root.querySelectorAll('[data-service]:not([data-mesa-bound])').forEach((link) => {
    link.dataset.mesaBound = 'true';
    link.addEventListener('click', () => {
      const service = link.getAttribute('data-service');
      const input = document.querySelector(`input[name="service"][value="${service}"]`);
      const select = document.querySelector('select[name="service"]');
      if (input) input.checked = true;
      if (select) select.value = service;
    });
  });

  root.querySelectorAll('[data-review-toggle]:not([data-mesa-bound])').forEach((button) => {
    button.dataset.mesaBound = 'true';
    button.addEventListener('click', () => {
      button.classList.toggle('is-active');
    });
  });

  root.querySelectorAll('[data-location-button]:not([data-mesa-bound])').forEach((button) => {
    button.dataset.mesaBound = 'true';
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
      const locationLink = document.querySelector('[data-location-link]');
      if (locationLink) locationLink.href = detail.link;
    });
  });

  root.querySelectorAll('.location-hero-chips [data-location]:not([data-mesa-bound])').forEach((chip) => {
    chip.dataset.mesaBound = 'true';
    chip.addEventListener('click', (event) => {
      event.preventDefault();
      const detail = locationDetails[chip.dataset.location];
      if (!detail) return;

      const heroMap = document.querySelector('[data-hero-location-map]');
      const heroTitle = document.querySelector('[data-hero-location-title]');
      const heroCopy = document.querySelector('[data-hero-location-copy]');
      const heroResponse = document.querySelector('[data-hero-location-response]');
      const heroServices = document.querySelector('[data-hero-location-services]');

      document.querySelectorAll('.location-hero-chips [data-location]').forEach((item) => item.classList.remove('is-active'));
      chip.classList.add('is-active');

      if (heroMap) {
        heroMap.src = detail.map;
        heroMap.title = `${detail.title} service area map`;
      }
      if (heroTitle) heroTitle.textContent = `${detail.title}, CO`;
      if (heroCopy) heroCopy.textContent = `Mesa provides trusted plumbing, heating, cooling, sewer, and drain service in ${detail.title}. Local experts. Fast response. Here when you need us.`;
      if (heroResponse) heroResponse.textContent = '24/7 Emergency Service';
      if (heroServices) heroServices.textContent = 'Licensed & Insured';
    });
  });

  root.querySelectorAll('.faq-accordion details:not([data-mesa-bound])').forEach((details) => {
    details.dataset.mesaBound = 'true';
    details.addEventListener('toggle', () => {
      if (!details.open) return;

      details.closest('.faq-accordion')?.querySelectorAll('details').forEach((item) => {
        if (item !== details) item.open = false;
      });
    });
  });

  root.querySelectorAll('[data-lead-form]:not([data-mesa-bound])').forEach((leadForm) => {
    leadForm.dataset.mesaBound = 'true';
    leadForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);
      const name = String(data.get('name') || '').trim().split(' ')[0];
      const service = String(data.get('service') || 'service').toLowerCase();
      const message = form.querySelector('.form-message');

      message.textContent = `${name ? `Thanks, ${name}.` : 'Thanks.'} Your ${service} request is ready. Mesa can connect this form to email, CRM, or scheduling next.`;
      message.classList.add('is-visible');
      form.reset();
    });
  });
};

bindMesaContent();
document.addEventListener('mesa:content-loaded', () => bindMesaContent());
