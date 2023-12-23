window.addEventListener('scroll', function() {
    var categoryElementsList = document.querySelectorAll('.category-container');
  
    var scrollY = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollY >= 500) {
      categoryElementsList[0].classList.add('fadeInFromLeft');
    } else {
      categoryElementsList[0].classList.remove('fadeInFromLeft');
    }

    if (scrollY >= 1500) {
        categoryElementsList[1].classList.add('fadeInFromLeft');
      } else {
        categoryElementsList[1].classList.remove('fadeInFromLeft');
      }

      if (scrollY >= 2200) {
        categoryElementsList[2].classList.add('fadeInFromLeft');
      } else {
        categoryElementsList[2].classList.remove('fadeInFromLeft');
      }
  });
  