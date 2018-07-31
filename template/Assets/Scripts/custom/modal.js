export default function() {
    if (document.getElementById('Modal--viewModal')) {
        document.getElementById('Modal--viewModal')

        // open the modal
        document.getElementById('Modal-Btn').addEventListener('click', function () {
            document.getElementById('Modal--viewModal').style.display = 'flex'
        })

        // close the modal
        let modalClose = document.querySelectorAll('.Modal--close')
        for (let i = 0; i < modalClose.length; i++) {
            modalClose[i].addEventListener('click', function (e) {
                this.parentNode.style.display = 'none'
            })
        }
    }
}
