const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    bar.style.display='none';

})


const inp = document.getElementById('inp');
const bar = document.getElementById('bar')
const body = document.getElementById('body');

inp.addEventListener('click', () => {
    bar.style.display='block';
    body.style.background='rgb(0, 0, 0, 0.3)';

} )

const down = document.getElementById('iconDown');
const itemMenu = document.getElementById('item__menu');

down.addEventListener('click', function(){
    itemMenu.style.display='block'
})


