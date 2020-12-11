window.addEventListener("scroll", function(){
           
    let block = document.querySelector('.block');
    //высота блока контента вместе с границами
    let height = block.offsetHeight;  
    // текущее положение скролбара    
    let scrollY = window.pageYOffset;     
    // высота внутренней области окна документа
    let window_height = window.innerHeight;      
    let coordY = scrollY + window_height;
   
    if(coordY >= height)
    {
        for (let i = 0; i<=3;i++){
            block.appendChild(renderBlock());
        }
    }
});

const renderBlock= () => {
    const item = document.createElement("div");
    item.classList.add("block__item");
    return item;
}

let writeSize = () => {
    console.log(`Ширина: ${window.innerWidth}, Высота: ${window.innerHeight}`);
};

window.addEventListener("resize", throttle(writeSize,2000));

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

    setTimeout(function() {
      isThrottled = false; 
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}