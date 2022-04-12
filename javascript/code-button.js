
// =====================================
//MENU RESPONSIVE TOGGLE HAMBURGUER ICON
// =====================================



const ullist = document.querySelector('.ul-list');
const hamburguer = document.querySelector('.hamburguer');


hamburguer.addEventListener('click',()=>{
    ullist.classList.toggle('show');
    console.log('asdasd')


})







//==================================================================================================
//AL BOTON 'Mywork', SE LE AÑADE LA CLASE 'floating' SI isIntersecting CON EL TITULO PRINCIPAL ES == TRUE
// =================================================================================================

const trigger = document.querySelector('.titulo');
const btn = document.querySelector('.hero__btn')





const moveBtn =(e)=>{
    if(!e[0].isIntersecting){
        btn.classList.add('floating')
        
    }
    if(e[0].isIntersecting){
        btn.classList.remove('floating')

    }

}



const moveBtnObvserver = new IntersectionObserver(moveBtn);



moveBtnObvserver.observe(trigger)