const navSlide=()=> {
    const burger=document.querySelector('.burger');
    const nav= document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
   
    burger.addEventListener('click',()=>{
        
         // nav in action,animation 
        nav.classList.toggle('nav-active');

            //links in action,animation
    navLinks.forEach((link,index)=>{
        if (link.style.animation){
            link.style.animation='';
        }else {
        link.style.animation=`navLinkFade 0.5s ease forwards ${index/5+0.3}s `;
        }
    });

        //cross reveal at verticle nav
        burger.classList.toggle('toggle');

  });


};
navSlide();