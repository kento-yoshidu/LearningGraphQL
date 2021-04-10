window.addEventListener('DOMContentLoaded', () => {

  const width = window.outerWidth;

  let ele = document.getElementById('js-width');

  ele.innerHTML = width;

  window.addEventListener('resize', () => {
    ele.innerHTML = width;
  })
})