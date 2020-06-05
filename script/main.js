const menuBtn = document.querySelector('.m-menu'),
menuSidebar = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', (e) => {
   let target = e.target;
   menuSidebar.classList.toggle('active')
});