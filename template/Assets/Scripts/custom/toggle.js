/*
---
name: Toggle
category: Javascript
---

Click to toggle `is-active` class.

```toggle.html
<div>
    <button class="Button Toggle">
        Click to toggle
    </button>
</div>
```

```js
elem.addEventListener('click', function() {
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active')    
    } else {
        this.classList.add('is-active')
    }
})
```
*/

export default function () {
    let elem = document.querySelector('.Toggle')

    if (elem === null) return

    elem.addEventListener('click', function() {
        if (this.classList.contains('is-active')) {
            this.classList.remove('is-active')    
        } else {
            this.classList.add('is-active')
        }
    })
}
