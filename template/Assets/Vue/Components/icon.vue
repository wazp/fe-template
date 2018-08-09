<template>
    <svg v-bind:viewBox="viewbox" v-bind:width="width" height="100%">
        <use v-bind:xlink:href="icon"></use>
    </svg>
</template>

<script>
    export default {
        name: 'icon',
        props: ['type'],
        mounted: function () {
            this.viewbox = this.getViewbox();
            this.width = this.calcWidth();
        },
        data() {
            return {
                icon: "#" + this.type,
                viewbox: null,
                width: null
            }
        },
        methods: {
            getViewbox: function () {
                let id = this.type,
                    svg = document.getElementById(id),
                    viewbox = svg.getAttribute('viewBox');

                return viewbox;
            },

            calcWidth: function () {
                let id = this.type,
                    svg = document.getElementById(id),
                    viewbox = svg.getAttribute('viewBox'),
                    viewboxArr = viewbox.split(/\s+|,/),
                    width = ((viewboxArr[2] / viewboxArr[3]) / 2 ) * 100 + '%';

                return width;
            }
        }
    }
</script>
