export default function () {
    console.log('nav js works')
    var mainNav = document.querySelectorAll('.Nav > li')

    for (var i = 0; i < mainNav.length; i++) {
        mainNav[i].addEventListener('mouseover', function () {
            this.querySelector('.Nav--subNav').classList.add('is-Active')
        })

        mainNav[i].addEventListener('mouseout', function () {
            this.querySelector('.Nav--subNav').classList.remove('is-Active')
        })
    }
    console.log('out of loop test')

     // Responsive hamburger menu js
     let navResponsive = document.querySelector('.navResponsive')
     let mobileNav = document.querySelector('.Nav--mobile')
 
     navResponsive.addEventListener('click', function () {
         navResponsive.classList.toggle('change')
         setTimeout(function () {
             mobileNav.classList.toggle('mobile')
         }, 350)
     })
}
