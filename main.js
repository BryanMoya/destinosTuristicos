// wow

const menu = document.querySelector('#bannerMenu');

const nav = document.querySelector('#hamburguer button');
nav.addEventListener('click', e=>{
    nav.classList.toggle('open');
    menu.classList.toggle('show');
});
// 

// mostar al scroll


let animacionScroll=document.querySelectorAll(".animacion-scroll-arriba");

function mostrarScroll(){
    let scrollTop1=document.documentElement.scrollTop;
    for(let i=0;i < animacionScroll.length ;i++){
        let alturaAnimnado=animacionScroll[i].offsetTop;
        if(alturaAnimnado-300<scrollTop1){
            animacionScroll[i].style.opacity=1;
            animacionScroll[i].classList.add("mostrarAarriba");
        }
    }
}

// fin

window.addEventListener('scroll',mostrarScroll);

// mostrar background header al hacer scroll

window.addEventListener('scroll', function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY>0);

});
// 