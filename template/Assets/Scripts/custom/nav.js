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
}
