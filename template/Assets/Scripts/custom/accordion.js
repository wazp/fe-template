/*
---
name: Accordion
category: Javascript
---

Click `.Accordion-header` element will add `is-active` class.

```accordion.html
<div>
    <ul aria-label="Accordion Control Group Buttons" class="Accordion">
        <li>
            <button class="Accordion-header" aria-controls="content-1" aria-expanded="false">Accordion 1</button>
            <div class="Accordion-content" aria-hidden="true" id="content-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </li>
        <li>
            <button class="Accordion-header" aria-controls="content-2" aria-expanded="false">Accordion 2</button>
            <div class="Accordion-content" aria-hidden="true" id="content-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Caboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </li>
        <li>
            <button class="Accordion-header is-active" aria-controls="content-3" aria-expanded="false">Accordion 3</button>
            <div class="Accordion-content" aria-hidden="true" id="content-3">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </li>
    </ul>
</div>
```

```accordion.notes
1. To have one accordion open at once, update the `.Accordion` to include data-accordion attribute set like this:
`<ul aria-label="Accordion Control Group Buttons" class="Accordion" data-accordion='{"collapseOthers": true}'>`
2. Add `is-active` class to a `Accordion-header` if an accordion should be opened on page load.
```
*/

export default function () {
    let accordionContainer = document.getElementsByClassName('Accordion')

    if (accordionContainer === null) return

    for (let aIndex = 0; aIndex < accordionContainer.length; aIndex++) {
        let accordionData = accordionContainer[aIndex].getAttribute('data-accordion')
        let collapseOthers = false

        if (accordionData !== null) {
            accordionData = JSON.parse(accordionData)
            collapseOthers = (accordionData.collapseOthers === undefined ? false : accordionData.collapseOthers)
        }

        let accordionEl = accordionContainer[aIndex].getElementsByClassName('Accordion-header')

        for (let i = 0; i < accordionEl.length; i++) {
            accordionEl[i].addEventListener('click', function () {
                if (collapseOthers) {
                    // loop through and remove is-active across all in this container
                    for (let collapseIndex = 0; collapseIndex < accordionEl.length; collapseIndex++) {
                        if (collapseIndex !== i) {
                            accordionEl[collapseIndex].classList.remove('is-active')
                            accordionEl[collapseIndex].nextElementSibling.style.maxHeight = null
                        }
                    }
                }

                let isActive = !!(this.classList.contains('is-active'))
                let panel = this.nextElementSibling

                if (isActive) {
                    this.classList.remove('is-active')
                    panel.style.maxHeight = null
                } else {
                    this.classList.add('is-active')
                    panel.style.maxHeight = panel.scrollHeight + 'px'
                }
            })
        }
    }
}
