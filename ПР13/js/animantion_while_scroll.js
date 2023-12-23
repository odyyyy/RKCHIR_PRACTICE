window.addEventListener('scroll', function() {
    var categoryElementsList = document.querySelectorAll('.category-container');
  
    // Получаем текущую y-координату прокрутки
    var scrollY = window.scrollY || document.documentElement.scrollTop;
  
    // Проверяем условие, когда y-координата равна или больше 500
    if (scrollY >= 300) {
      // Добавляем класс с анимацией
      categoryElementsList[0].classList.add('fadeInFromLeft');
    } else {
      // Убираем класс, если прокрутка менее 500
      categoryElementsList[0].classList.remove('fadeInFromLeft');
    }

    if (scrollY >= 1200) {
        // Добавляем класс с анимацией
        categoryElementsList[1].classList.add('fadeInFromLeft');
      } else {
        categoryElementsList[1].classList.remove('fadeInFromLeft');
      }

      if (scrollY >= 2000) {
        // Добавляем класс с анимацией
        categoryElementsList[2].classList.add('fadeInFromLeft');
      } else {
        // Убираем класс, если прокрутка менее 500
        categoryElementsList[2].classList.remove('fadeInFromLeft');
      }
  });
  