/*
---
name: Toggle
category: Javascript
---
Click to toggle `is-active` class to the parent.
```toggle.html
<div class="Toggle js-module" data-module="toggle" data-toggle='{ "button": ".Toggle-button", "details": ".Toggle-details" }'>
    <button class="Button Toggle-button">Toggle Button 1</button>
    <div class="Toggle-details">Toggle Details 1</div>
</div>
```
*/

export function init(el) {
    let initParams = {
        button: '.Toggle-button',
        details: '.Toggle-details'
    }
    let toggleElem = el
    let toggleParams

    // Get the data params
    if (toggleElem.hasAttribute('data-toggle')) {
        toggleParams = toggleElem.getAttribute('data-toggle')
        toggleParams = JSON.parse(toggleParams)
    } else {
        toggleParams = initParams
    }

    // Find elem from param: button, details
    let button = toggleParams.button
    // let details = toggleParams.details

    // Bind events
    toggleElem.querySelector(button).addEventListener('click', function () {
        if (toggleElem.classList.contains('is-active')) {
            toggleElem.classList.remove('is-active')
        } else {
            toggleElem.classList.add('is-active')
        }
    })
}
