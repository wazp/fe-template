export default function () {
    let backToTop = document.getElementById('back-to-top')

    window.onscroll = function () {
        scrollFunction()
    }

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTop.classList.add('is-active')
        } else {
            backToTop.classList.remove('is-active')
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    backToTop.addEventListener('click', function (e) {
        e.preventDefault()
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
}
