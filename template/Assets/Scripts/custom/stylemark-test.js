/*
---
name: Loading
category: Javascript
---

I came from js... Display a loading animation to let user know that something is processing in the background.

Types of loaders:
- Default: Standard button

```loading.html
<div>
    <span class="Loading Loading--spinning">
        <span class="Loading-icon"></span>
        <span class="Loading-text">Your profile is loading...</span>
    </span>

    <span class="Loading Loading--dots">
        <span class="Loading-icon"></span>
        <span class="Loading-text">Your profile is loading...</span>
    </span>

    <button class="Button ClickTest">
        Click Me for JS: Start loading
        <span class="Loading Loading--spinning Loading--small Loading--fill u-hidden js-loading1">
            <span class="Loading-icon"></span>
        </span>
    </button>
</div>
```

```js
$('#example').tooltip(options)
```
*/

export default function () {
    let elem = document.querySelector('.ClickTest')

    elem.addEventListener('click', function() {
        this.classList.add('is-active')
        console.log('clicked: ', this.classList)
    })
}