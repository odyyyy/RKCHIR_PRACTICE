// ������� ��� �������� ��������� ��������
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ������� ��� ���������� ������ ��� ��������� ��������
function showElementOnScroll(element) {
  if (isElementInViewport(element)) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    window.removeEventListener('scroll', function () {
      showElementOnScroll(element);
    });
  }
}

// �������� ��� ��������
const articleCards = document.querySelectorAll('.article-card');

// �� ������ �������� ��������� ��������
articleCards.forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  window.addEventListener('scroll', function () {
    showElementOnScroll(card);
  });
});

// ���������� �������� ��������� ��� �������� ��������
window.addEventListener('load', function () {
  articleCards.forEach((card) => {
    showElementOnScroll(card);
  });
});
