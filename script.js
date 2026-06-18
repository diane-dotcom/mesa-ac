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

const locationDetails = {
  boulder: {
    title: 'Boulder',
    copy: 'Primary Mesa service area for plumbing repairs, sewer service, drain cleaning, water heaters, and emergency plumbing help.',
    response: 'Same-day appointments may be available',
    services: 'Plumbing, sewer, drains, water heaters',
    map: 'https://www.google.com/maps?q=Boulder%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Boulder%2C%20Colorado',
  },
  longmont: {
    title: 'Longmont',
    copy: 'North Boulder County service area for homeowners needing reliable plumbing, sewer, drain, and water heater support.',
    response: 'Local scheduling available',
    services: 'Plumbing repairs, sewer service, drain cleaning',
    map: 'https://www.google.com/maps?q=Longmont%2C%20Colorado&output=embed',
    link: 'https://www.google.com/maps?q=Longmont%2C%20Colorado',
  },
  lafayette: {
    title: 'Lafayette',
    copy: 'East Boulder County service area for plumbing issues, drain problems, sewer backups, and water heater needs.',
    response: 'Appointments available by area route',
    services: 'Drains, sewer backups, water heaters, repairs',
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
    copy: 'Main Mesa listing for Boulder plumbing and sewer service, including clogged drains, sewer backups, leaks, water heaters, and emergency plumbing repairs.',
    response: 'Same-day appointments available',
    services: 'Plumbing, sewer, drains, water heaters',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.6148246577477!2d-105.245935023455!3d40.01705047986744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf1cc19a1865d%3A0xc9ce44cbcc130f0a!2sMesa%20Plumbing%2C%20Heating%20and%20Cooling!5e0!3m2!1sen!2sph!4v1781731090707!5m2!1sen!2sph',
    link: 'https://www.google.com/search?q=Mesa+Plumbing,+Heating+and+Cooling&stick=H4sIAAAAAAAA_-NgU1I1qLAwN0tKM0xONrRMNLQwM02xMqhItkxONTFJTgIKGhukGSQuYlXyTS1OVAjIKc1NysxL11HwSE0sATIUEvNSFJzz83OAbACPp1A4TgAAAA&hl=en&mat=CYEs_6XAdIs2ElcBa0lj_2hYosnL0kKF4aUrOm20SEOoZ3bRoD_fsaEW-FpXYQxSCMNUreyTY4LnwXaINVrLonftcb8tlUEJ25rz-Yrmpfy9DINMMN2ypvXlPOzbci196nk&authuser=0',
  },
  'mesa-drain-one': {
    title: 'Mesa Drain Cleaning',
    copy: 'Mesa Drain Cleaning & Sewer Repair listing for sewer backups, drain cleaning, clogged lines, and plumbing repair requests.',
    response: 'Drain and sewer scheduling available',
    services: 'Drain cleaning, sewer service, leak repair',
    map: 'https://www.google.com/maps?q=Mesa%20Drain%20Cleaning%20%26%20Sewer%20Repair&output=embed',
    link: 'https://www.google.com/search?q=Mesa+Drain+Cleaning+%26+Sewer+Repair&stick=H4sIAAAAAAAA_-NgU1I1qLAwN0tKTTMxMTI0NTA3MUmxMqgwM7NItUhLSTExMTdKMk5LW8Sq5JtanKjgUpSYmafgnJOamJeZl66gphCcWp5apBCUWpCYWQQAySroZk4AAAA&hl=en&mat=CZU_Tn_-o1YcElYBa0lj_-J1FLMy9X-0kmUYo0SW8hRg_DbWnKBBCszY1aG0EpRBX4jpp_ys9u0XtV3nGJp-cxUZVjNenhRnAD4rLP9MEQx2wq7FGyHtGGY4uaKPq_y_Fg&authuser=0',
  },
  'mesa-drain-two': {
    title: 'Mesa Sewer Repair',
    copy: 'Second Mesa Drain Cleaning & Sewer Repair listing focused on sewer line concerns, slow drains, backups, and emergency plumbing support.',
    response: 'Sewer repair support available',
    services: 'Sewer backups, drains, water heaters',
    map: 'https://www.google.com/maps?q=Mesa%20Drain%20Cleaning%20%26%20Sewer%20Repair%20Boulder%20CO&output=embed',
    link: 'https://www.google.com/search?q=Mesa+Drain+Cleaning+%26+Sewer+Repair&stick=H4sIAAAAAAAA_-NgU1I1qLAwN0tKM000MrAwMzVKSTK3MqgwS00xMEmyTElLMk9JNUg0XcSq5JtanKjgUpSYmafgnJOamJeZl66gphCcWp5apBCUWpCYWQQA-hWyQk4AAAA&hl=en&mat=CXD5B814YDrjElYBa0lj_0qUJ_Ne8FJ0cjF9LWA3ybgyDg5XZC1P_xFPbD9OFgjzq2p90RrghUnnjIaZWe8cJZEiM3MlFm65xcD5MrLTD6obZ8fEtiv7BSC8XLIEYEe6Tg&authuser=0',
  },
  mcadams: {
    title: 'McAdams Plumbing',
    copy: 'McAdams Plumbing listing included in the local Boulder-area plumbing set. Use this entry to compare nearby plumbing service information.',
    response: 'Nearby listing information',
    services: 'Plumbing repairs and local service details',
    map: 'https://www.google.com/maps?q=McAdams%20Plumbing%2C%20Heating%20%26%20Cooling&output=embed',
    link: 'https://www.google.com/search?q=McAdams+Plumbing,+Heating+%26+Cooling&stick=H4sIAAAAAAAA_-NgU1I1qLAwN0uySDQxTTEwTrKwMLe0MqiwNDZKMzO3MEw1SjZPNDMzXsSq7JvsmJKYW6wQkFOam5SZl66j4JGaWAJkKKgpOOfn5wBZAIPEytpPAAAA&hl=en&mat=CVSfbDHnPPq7ElcBa0lj_zRq3ELP3QBd4tlHbAjBR1a-qBMEBRx-DwE6noNorUPsZVWR4A4dFrJhyw326AbJ_C6WSaF1GrG1CIeFh_zu66tjEa09gJzy-UjZSPwfweHOvvM&authuser=0&zx=1781736830856',
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
