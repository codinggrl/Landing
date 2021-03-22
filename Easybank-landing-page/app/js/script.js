 const btnHamburger = document.querySelector('#btnHamburger');
 const body = document.querySelector('body');
 const header = document.querySelector('.header');
 const overlay = document.querySelector('.overlay');
 const fadeElements =document.querySelectorAll('.has-fade');
 
 btnHamburger.addEventListener('click', ()  => {
    // console.log('clik hamburger');
    // console.log(btnHamburger);

    if(header.classList.contains('open')) {
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeElements.forEach(function(element) {

            element.classList.remove('fadeIn');
            element.classList.add('fadeOut');
        });

    } else {
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadeElements.forEach(function(element) {

            element.classList.remove('fadeOut');
            element.classList.add('fadeIn');

        });
    }
});        