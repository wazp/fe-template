---
---
---
name: Slider Component
category: Vue
---

Swipe slider Vue component.

Props:

Prop | Description | Options
--- | --- | ---
:sliderstyle | Choose from one of four types of sliders. | 'autoplay', 'basic', 'thumbnail', multislide'
:arrows | Display left/right arrows. | true, false
:dots | Display dot navigation under slider. | true, false
:api | Path to endpoint. | (optional)
:model | If using global js variable on the page instead. | (optional)

```slider.html
<div>
    <slider :dots="true" :arrows="true" :sliderstyle="'basic'" :api="'/html/json/slider-basic.json'"></slider>
</div>
<hr>
<div>
    <slider :sliderstyle="'autoplay'" :api="'/html/json/slider-basic.json'"></slider>
</div>
<hr>
<div>
    <slider :dots="true" :sliderstyle="'thumbnail'" :api="'/html/json/slider-thumbnail.json'"></slider>
</div>
```

```slider.json
[
    {
        "headline": "Slide Headline 1 - Vue",
        "text": "Slide Text 1",
        "image": "https://picsum.photos/800/200?image=0",
        "id": 1
    },
    {
        "headline": "Slide Headline 2 - Vue",
        "text": "Slide Text 2",
        "image": "https://picsum.photos/800/200?image=1",
        "id": 2
    }
]
```

```slider.notes
To use a global javascript variable on the page, you can swap :api with :model. Then supply the variable name inside the :model.

Example:
<slider :dots="true" :arrows="true" :sliderstyle="'basic'" :model="'carousel'"></slider>

<script>
    window.carousel = {
        items: [
            {
                "headline": "Slide Headline 1 - Vue",
                "text": "Slide Text 1: from global variable",
                "image": "https://picsum.photos/800/200?image=0",
                "id": 1
            },
            {
                ...
            }
        ]
    }
</script>
```