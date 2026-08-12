const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

function order(product) {
  const phone = '919582037458';
  const text = `Hi TORTEX, I want to order the "${product}" hamper. Please share the details.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

function customOrder() {
  const phone = '919582037458';
  const text = `Hi TORTEX, I want a customised gift hamper. My budget and occasion are: `;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}
