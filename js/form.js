// Contact form custom validation
const form = document.getElementById('contactForm');
if (form) {
  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const messageEl = document.getElementById('message');
  const nameErr = document.getElementById('nameErr');
  const emailErr = document.getElementById('emailErr');
  const messageErr = document.getElementById('messageErr');
  const formStatus = document.getElementById('formStatus');

  function validateName(value) {
    const v = String(value).trim();
    if (v.length < 2) return 'Name must be at least 2 characters.';
    return '';
  }
  function validateEmail(value) {
    const v = String(value).trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!re.test(v)) return 'Enter a valid email.';
    return '';
  }
  function validateMessage(value) {
    const v = String(value).trim();
    if (v.length < 10) return 'Message must be at least 10 characters.';
    return '';
  }

  nameEl.addEventListener('input', () => { nameErr.textContent = validateName(nameEl.value); formStatus.textContent = ''; });
  emailEl.addEventListener('input', () => { emailErr.textContent = validateEmail(emailEl.value); formStatus.textContent = ''; });
  messageEl.addEventListener('input', () => { messageErr.textContent = validateMessage(messageEl.value); formStatus.textContent = ''; });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const n = validateName(nameEl.value);
    const m = validateEmail(emailEl.value);
    const b = validateMessage(messageEl.value);
    nameErr.textContent = n; emailErr.textContent = m; messageErr.textContent = b;
    const errs = [n, m, b].filter(Boolean);
    if (errs.length) { formStatus.textContent = errs[0]; return; }
    formStatus.textContent = 'Thanks! Your message has been sent.';
    form.reset();
  });
}


