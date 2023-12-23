document.addEventListener('DOMContentLoaded', function () {
    var parallaxSection = document.getElementById('parallaxSection');

    function handleScroll() {
      var scrollPosition = window.scrollY;
      parallaxSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    }

    // Обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);

    // Вызываем обработчик события прокрутки при загрузке страницы (если начальная прокрутка не в самом верху)
    handleScroll();
  });