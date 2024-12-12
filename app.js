// Gérer le bouton burger pour le responsive // 

const btnBurger = document.querySelector('#burger-menu'); 
const menu = document.querySelector('.navigation'); 

const linkNav = document.querySelectorAll('.navigation a'); 
const sesction = document.querySelectorAll('section'); 
const nav = document.querySelectorAll('nav'); 



btnBurger.addEventListener('click',()=>{
    menu.classList.toggle('active')
    btnBurger.classList.toggle('bx-x')
}); 

linkNav.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.remove('active')
        btnBurger.classList.remove('bx-x')

    })
})

window.addEventListener('scroll',()=>{
    menu.classList.remove('active')
    btnBurger.classList.remove('bx-x')
    

})

window.addEventListener('scroll',()=>{
    nav.classList.toggle('active', window.scrollY>0)
})

const scrollActive = ()=>{
    sesction.forEach(section=>{
        let top = window.scrollY; 
        let offset = section.offsetTop -150;
        let height = section.offsetHeight; 
        let id = section.getAttribute('id')

        if(top >= offset && top< offset + height){
            linkNav.forEach(links=>{
                links.classList.remove('active'); 
                document.querySelector(`.navigation a[href*=${id}`).classList.add('active');
            })

        }

    })
}

window.addEventListener('scroll',scrollActive)