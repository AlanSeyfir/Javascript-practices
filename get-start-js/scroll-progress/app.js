const scrollLine = document.querySelector('.scroll-line');

//*Good practice when I use listeners with scroll use DEBOUNCE, we DON'T want to call the event every single scroll
function fillScrollLine(){
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;

    const percentScrolled = (scrolled / (fullHeight - windowHeight))  * 100;
    
    scrollLine.style.width = `${percentScrolled}%`;
}

//This function is from lodash
function debounce(func, wait = 15, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

window.addEventListener('scroll', debounce(fillScrollLine));