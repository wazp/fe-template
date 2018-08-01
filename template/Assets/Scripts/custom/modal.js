export default function() {
    if (document.querySelector('.Modal--display')) {
        // document.getElementById('Modal--viewModal')

        // open the modal
        document.querySelector('[data-modalBtn]').addEventListener('click', function () {
            document.querySelector('.Modal--display').classList.add('Modal--show')
        })

        document.querySelector('.Modal--close').addEventListener('click', function () {
            document.querySelector('.Modal--display').classList.remove('Modal--show')
        })
    }
}
