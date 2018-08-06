import { lory } from '@/Scripts/vendor/lory.min'

export function slider(elem, sliderstyle) {
    let config = {
        infinite: 1,
        slidesToScroll: 1,
        enableMouseEvents: true,
        enableTouchEvents: true,
        classNameFrame: 'Slider-frame',
        classNameSlideContainer: 'Slider-list',
        classNamePrevCtrl: 'Slider-arrow--prev',
        classNameNextCtrl: 'Slider-arrow--next'
    }

    let isVueComponent = elem !== undefined
    let sliderEl = (isVueComponent ? elem : document.querySelectorAll('[data-slider]'))

    if (sliderEl === null) {
        return false
    }

    const create = {
        basic (el) {
            config.infinite = 1
            config.slidesToScroll = 1

            const handleDots = function (e) {
                let dotCount = el.querySelectorAll('.Slider-item').length
                let dotContainer = el.querySelector('.Slider-dots')
                let dotItem = document.createElement('li')

                if (e.type === 'before.lory.init') {
                    for (let i = 0; i < dotCount; i++) {
                        let clone = dotItem.cloneNode()

                        dotContainer.appendChild(clone)
                    }
                    dotContainer.childNodes[0].classList.add('is-active')
                }
                if (e.type === 'after.lory.init') {
                    for (let i = 0; i < (dotCount - 2); i++) {
                        dotContainer.childNodes[i].addEventListener('click', function (e) {
                            basicSlider.slideTo(Array.prototype.slice.call(e.target.parentNode.children).indexOf(e.target))
                        }, false)
                    }
                }
                if (e.type === 'after.lory.slide') {
                    for (let i = 0; i < dotContainer.childNodes.length; i++) {
                        dotContainer.childNodes[i].classList.remove('is-active')
                    }

                    dotContainer.childNodes[e.detail.currentSlide - 1].classList.add('is-active')
                }
                if (e.type === 'on.lory.resize') {
                    for (let i = 0; i < dotContainer.childNodes.length; i++) {
                        dotContainer.childNodes[i].classList.remove('is-active')
                    }
                    dotContainer.childNodes[0].classList.add('is-active')
                }
            }

            el.addEventListener('before.lory.init', handleDots, false)
            el.addEventListener('after.lory.init', handleDots, false)
            el.addEventListener('after.lory.slide', handleDots, false)
            el.addEventListener('on.lory.resize', handleDots, false)

            const basicSlider = lory(el, config)
        },

        multiSlide (el) {
            let scrollAmount = parseInt(el.dataset.sliderScroll)
            if (window.innerWidth > 768) {
                config.infinite = scrollAmount
                config.slidesToScroll = scrollAmount
            } else {
                config.infinite = 1
                config.slidesToScroll = 1
            }

            lory(el, config)
        },

        thumbnail (el) {
            config.infinite = 1
            config.slidesToScroll = 1

            const handleThumbnails = function (e) {
                let sliderItem = el.querySelectorAll('.Slider-item')
                let thumbCount = el.querySelectorAll('.Slider-item').length
                let thumbContainer = el.querySelector('.Slider-dots')
                let thumbItem = document.createElement('li')

                if (e.type === 'before.lory.init') {
                    for (let i = 0; i < thumbCount; i++) {
                        let clone = thumbItem.cloneNode()

                        let thumbnail = new Image()

                        let itemImg = sliderItem[i].getElementsByTagName('img')[0]

                        let source = itemImg.src

                        thumbnail.src = source
                        clone.appendChild(thumbnail)
                        thumbContainer.appendChild(clone)
                    }
                    thumbContainer.childNodes[0].classList.add('is-active')
                }
                if (e.type === 'after.lory.init') {
                    for (let i = 0; i < (thumbCount - 2); i++) {
                        thumbContainer.childNodes[i].addEventListener('click', function (e) {
                            thumbnailSlider.slideTo(Array.prototype.slice.call(e.target.parentNode.children).indexOf(e.target))
                        }, false)
                    }
                }
                if (e.type === 'after.lory.slide') {
                    for (let i = 0; i < thumbContainer.childNodes.length; i++) {
                        thumbContainer.childNodes[i].classList.remove('is-active')
                    }

                    thumbContainer.childNodes[e.detail.currentSlide - 1].classList.add('is-active')
                }
                if (e.type === 'on.lory.resize') {
                    for (let i = 0; i < thumbContainer.childNodes.length; i++) {
                        thumbContainer.childNodes[i].classList.remove('is-active')
                    }
                    thumbContainer.childNodes[0].classList.add('is-active')
                }
            }

            el.addEventListener('before.lory.init', handleThumbnails, false)
            el.addEventListener('after.lory.init', handleThumbnails, false)
            el.addEventListener('after.lory.slide', handleThumbnails, false)
            el.addEventListener('on.lory.resize', handleThumbnails, false)

            const thumbnailSlider = lory(el, config)
        },

        autoplay (el) {
            config.infinite = 1
            config.slidesToScroll = 1
            config.enableMouseEvents = false
            config.enableTouchEvents = false

            const handleTimer = function (e) {
                let el = e.target
                let timer = document.createElement('div')
                let timerInterval = 10000

                if (e.type === 'before.lory.init') {
                    timer.classList.add('Slider-timer')
                    el.appendChild(timer)
                }

                if (e.type === 'after.lory.init') {
                    setInterval(function () {
                        autoplaySlider.next()
                    }, timerInterval)
                }
            }

            el.addEventListener('before.lory.init', handleTimer, false)
            el.addEventListener('after.lory.init', handleTimer, false)
            el.addEventListener('after.lory.slide', handleTimer, false)
            el.addEventListener('on.lory.resize', handleTimer, false)
            const autoplaySlider = lory(el, config)
        }
    }

    for (let el in sliderEl) {
        if (!sliderEl.hasOwnProperty(el)) break

        let sliderType = (isVueComponent ? sliderstyle : sliderEl[el].getAttribute('data-slider'))

        switch (sliderType) {
        case 'basic':
            create.basic((isVueComponent ? sliderEl : sliderEl[el]))
            break

        case 'multiSlide':
            create.multiSlide((isVueComponent ? sliderEl : sliderEl[el]))
            break

        case 'thumbnail':
            create.thumbnail((isVueComponent ? sliderEl : sliderEl[el]))
            break

        case 'autoplay':
            create.autoplay((isVueComponent ? sliderEl : sliderEl[el]))
            break
        }
    }
};

/*
---
name: Slider
category: Javascript
---

Sliders:
- Basic: standard slider.
- Autoplay: slides autoplay, swiping is disabled.
- Multislide: slides multiple slides at once when clicking left/right.
- Thumbnail: image gallery with thumbnails.

```slider.html
<div class="Slider" data-slider="basic">
    <div class="Slider-container">
        <div class="Slider-frame">
            <ul class="Slider-list">
                <li class="Slider-item">
                    <div class="u-alignMiddleTranslate">Basic Slider 1</div>
                </li>
                <li class="Slider-item">
                    <div class="u-alignMiddleTranslate">Basic Slider 2</div>
                </li>
                <li class="Slider-item">
                    <div class="u-alignMiddleTranslate">Basic Slider 3</div>
                </li>
            </ul>
        </div>
        <span class="Slider-arrow Slider-arrow--prev"></span>
        <span class="Slider-arrow Slider-arrow--next"></span>
    </div>
    <ul class="Slider-dots"></ul>
</div>
<hr>
<div class="Slider Slider--autoplay" data-slider="autoplay">
    <div class="Slider-container">
        <div class="Slider-frame">
            <ul class="Slider-list">
                <li class="Slider-item">
                    <div class="u-alignMiddleTranslate">Autoplay Slide 1</div>
                </li>
                <li class="Slider-item">
                    <div class="u-alignMiddleTranslate">Autoplay Slider 2</div>
                </li>
                <li class="Slider-item">
                    <div class="u-alignMiddleTranslate">Autoplay Slider 3</div>
                </li>
            </ul>
        </div>
    </div>
    <ul class="Slider-dots"></ul>
</div>
<hr>
<div class="Slider" data-slider="multiSlide" data-slider-scroll="2">
    <div class="Slider-container">
        <div class="Slider-frame">
            <ul class="Slider-list">
                <li class="Slider-item u-md-size1of2">
                    <div class="u-alignMiddleTranslate">Multi Slider 1</div>
                </li>
                <li class="Slider-item u-md-size1of2">
                    <div class="u-alignMiddleTranslate">Multi Slider 2</div>
                </li>
                <li class="Slider-item u-md-size1of2">
                    <div class="u-alignMiddleTranslate">Multi Slider 3</div>
                </li>
                <li class="Slider-item u-md-size1of2">
                    <div class="u-alignMiddleTranslate">Multi Slider 4</div>
                </li>
            </ul>
        </div>
        <span class="Slider-arrow Slider-arrow--prev"></span>
        <span class="Slider-arrow Slider-arrow--next"></span>
    </div>
    <ul class="Slider-dots"></ul>
</div>
<hr>
<div class="Slider Slider--thumbnail" data-slider="thumbnail">
    <div class="Slider-container">
        <div class="Slider-frame">
            <ul class="Slider-list">
                <li class="Slider-item">
                    <img src="https://placeimg.com/500/500/tech" alt="E Series High Voltage Power Supplies" />
                </li>
                <li class="Slider-item">
                    <img src="https://placeimg.com/500/500/arch" alt="E Series High Voltage Power Supplies" />
                </li>
                <li class="Slider-item">
                    <img src="https://placeimg.com/500/500/nature" alt="E Series High Voltage Power Supplies" />
                </li>
            </ul>
        </div>
        <span class="Slider-arrow Slider-arrow--prev"></span>
        <span class="Slider-arrow Slider-arrow--next"></span>
    </div>
    <ul class="Slider-dots"></ul>
</div>
```
*/
