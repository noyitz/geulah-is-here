const purchaseForm = document.querySelector('#purchase-form');
purchaseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!purchaseForm.reportValidity()) return;
  const data = new FormData(purchaseForm);
  const body = [
    'Purchase request: Alef Opens the Door — Hebrew edition',
    '',
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Copies: ${data.get('quantity')}`,
    `City & country: ${data.get('location')}`,
    `Notes: ${data.get('notes') || '—'}`,
    '',
    'Please contact me with pricing, payment, and delivery details.'
  ].join('\n');
  document.querySelector('#request-copy').value = body;
  document.querySelector('#email-fallback').hidden = false;
  document.querySelector('#request-status').textContent = 'Your request is ready. Send it in your email app, or copy it below.';
  window.location.href = `mailto:noyitz@gmail.com?subject=${encodeURIComponent('Book purchase request — Alef Opens the Door')}&body=${encodeURIComponent(body)}`;
});
