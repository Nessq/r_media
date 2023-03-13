
const loader = document.querySelector('.loader');
const header = document.querySelector('.header');
const site = document.querySelector('.site');

const menuItems = document.querySelectorAll('.menu-item');
const detailItems = document.querySelectorAll('.detail-item');
const closeDetailItems = document.querySelectorAll('.detail-item__back');

const btnMenu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btnMenu.addEventListener('click', (e) => {
  e.preventDefault();
  nav.classList.toggle('active');
  document.body.classList.toggle('mobile-menu-open');
});

for (const item of menuItems) {
  item.addEventListener('click', (e) => {
    document.body.classList.remove('open-detail', 'reverse');

    const dataIndx = e.currentTarget.dataset.indx;
    const detailItem = document.querySelector(`.detail-item[data-indx="${dataIndx}"]`);
    const bodyClasses = ['open-detail'];
    dataIndx % 2 === 0 && bodyClasses.push('reverse');
    document.body.classList.add(...bodyClasses);
    detailItem.classList.add('active');
  });
}

for(const item of closeDetailItems) {
  
  item.addEventListener('click', (e) => {
    const dataIndx = e.currentTarget.closest('.detail-item').dataset.indx;
    const detailItem = document.querySelector(`.detail-item[data-indx="${dataIndx}"]`);
    gridLoaded(dataIndx % 2 === 0 ? 'left' : 'right');
    document.body.classList.remove('open-detail', 'reverse');
    detailItem.classList.remove('active');
  });
}


function initSite(){
  document.body.classList.add('loading');
  setTimeout(() => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
    
    gridLoaded('right');
    setTimeout(()=>{
      loader.remove();
    },500)
  },2000);
}

function gridLoaded(direction){
  if(direction == 'left'){
    document.body.classList.add('grid-loaded');
  }else if(direction == 'right'){
    document.body.classList.add('grid-loaded-reverse');
  }

  setTimeout(()=>{
    document.body.classList.remove('grid-loaded','grid-loaded-reverse');
  }, 500)
}

initSite();