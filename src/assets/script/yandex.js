window.addEventListener("scroll", function () {
  let quantityBlocks = 9;
  let block = document.querySelector('.block');

  if ((document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight) < 1) {
    for (let i = 0; i <= quantityBlocks; i++) {
      block.appendChild(renderBlock());
    }
  }
});

const renderBlock = () => {
  const item = document.createElement("div");
  item.classList.add("block__item");
  return item;
}
// При нажатии на элемент фокус не остается
document
  .querySelector('.more-info').addEventListener('mousedown', e => e.preventDefault());
document
  .querySelector('.widgets').addEventListener('mousedown', e => e.preventDefault());
document
  .querySelector('.search__logo').addEventListener('mousedown', e => e.preventDefault());

let writeSize = () => {
  console.log(`Ширина: ${window.innerWidth}, Высота: ${window.innerHeight}`);
};
window.addEventListener("resize", throttle(writeSize, 2000));

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;
  console.log(isThrottled);

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}