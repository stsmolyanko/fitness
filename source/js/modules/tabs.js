const tabItems = document.querySelectorAll('.tabs__button-item');
const contentItems = document.querySelectorAll('.tabs__content-item');

const initTabs = () => {
  tabItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      tabItems.forEach((child) => {
        child.classList.remove('tabs__button-item--active');
      });

      contentItems.forEach((child) => {
        child.classList.remove('tabs__content-item--active');
      });

      item.classList.add('tabs__button-item--active');

      const id = e.target.getAttribute('href').replace('#', '');
      const tabActive = document.getElementById(id);
      tabActive.classList.add('tabs__content-item--active');
    });
  });
};

export {initTabs};
