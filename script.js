const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');
function closeMenu() {
  siteNav?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}
menuButton?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
siteNav?.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && siteNav?.classList.contains('is-open')) {
    closeMenu();
    menuButton?.focus();
  }
});
const filters = document.querySelector('.product-filters');
const products = [...document.querySelectorAll('.product[data-category]')];
const filterStatus = document.querySelector('#filter-status');
if (filters && products.length) {
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target instanceof Element ? event.target.closest('button[data-filter]') : null;
    if (!button) return;
    const category = button.dataset.filter;
    filters.querySelectorAll('button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    let visibleCount = 0;
    products.forEach((product) => {
      product.hidden = category !== 'all' && product.dataset.category !== category;
      if (!product.hidden) visibleCount += 1;
    });
    if (filterStatus) filterStatus.textContent = button.textContent.trim() + ' ' + visibleCount + '개 제품';
  });
}
const imageDialog = document.querySelector('.image-dialog');
const dialogImage = document.querySelector('.dialog-image');
const dialogCaption = document.querySelector('#image-caption');
const dialogOriginal = document.querySelector('.dialog-original');
let imageTrigger = null;
document.querySelectorAll('button[data-image]').forEach((button) => {
  button.addEventListener('click', () => {
    const source = button.dataset.image;
    if (!source) return;
    if (!(imageDialog instanceof HTMLDialogElement) || typeof imageDialog.showModal !== 'function') {
      window.open(source, '_blank', 'noopener,noreferrer');
      return;
    }
    imageTrigger = button;
    dialogImage.src = source;
    dialogImage.alt = button.querySelector('img')?.alt || button.dataset.caption || '';
    dialogCaption.textContent = button.dataset.caption || '';
    dialogOriginal.href = source;
    document.body.classList.add('has-dialog');
    imageDialog.showModal();
    imageDialog.querySelector('.dialog-close')?.focus();
  });
});
imageDialog?.querySelector('.dialog-close')?.addEventListener('click', () => imageDialog.close());
imageDialog?.addEventListener('click', (event) => {
  if (event.target !== imageDialog) return;
  const bounds = imageDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageDialog.close();
});
imageDialog?.addEventListener('close', () => {
  document.body.classList.remove('has-dialog');
  imageTrigger?.focus();
  imageTrigger = null;
});
