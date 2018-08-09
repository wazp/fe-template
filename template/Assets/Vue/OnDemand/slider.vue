<template>
    <div>        
        <div class="Slider" :class="'Slider--'+sliderstyle">
            <div class="Slider-container">
                <div class="Slider-frame">
                    <ul class="Slider-list">
                        <component :is="'slide-'+sliderstyle" v-for="item in items" :key="item.id" :result="item" :slidestyle="sliderstyle"></component>
                    </ul>
                </div>
                <span class="Slider-arrow Slider-arrow--prev" v-if="arrows"></span>
                <span class="Slider-arrow Slider-arrow--next" v-if="arrows"></span>
            </div>
            <ul class="Slider-dots" v-if="dots"></ul>
        </div>
    </div>
</template>

<script>
    import { lory } from '@/Scripts/vendor/lory.min'
    import { slider } from '@/Scripts/custom/slider'

    import slideBasic from './slide-basic.vue'
    import slideAutoplay from './slide-autoplay.vue'
    import slideThumbnail from './slide-thumbnail.vue'

    export default {
        name: "slider",
        props: ['dots', 'arrows', 'sliderstyle', 'api', 'model'],
        data() {
            return {
                items: []
            }
        },
        methods: {
            init(){          
                if (this.model){
                    this.items = window[this.model].items
                } 
                else {
                    this.getData()
                }        
            },
            getData(){
                fetch(this.api).then(response => response.json()).then(response => {
                    this.items = response
                })        
            }
        },
        updated(){
            slider(this.$el, this.sliderstyle)
        },
        mounted(){
            this.init()
        },
        components: {
            slideBasic: slideBasic,
            slideAutoplay: slideAutoplay,
            slideThumbnail: slideThumbnail
        }
    };
</script>

<style lang="less" scoped>
    @import "../../../Assets/Styles/common/_variables.less";
    @import "../../../Assets/Styles/common/_mixins.less";

    .Slider {
        position: relative;
        padding: 0;

        &-container {
            position: relative;
            width: 100%;
        }

        &--thumbnail {
            width: 100%;
            padding: 0;
            margin: 0;

            .Slider-dots {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                width: 100%;
                max-width: 540px;
                margin: 0 auto;
                text-align: center;
                padding: 2rem 0;

                @media @bpMedium {
                    padding: 2rem;
                }

                li {
                    width: 60px;
                    height: 60px;
                    padding: 0.5rem;
                    border-radius: 0;
                    margin: 0;
                    background: transparent;

                    @media @bpMedium {
                        width: 20%;
                        max-width: 95px;
                        height: 95px;
                        padding: 0.75rem;
                    }

                    &.is-active,
                    &:hover {
                        background: transparent;
                    }
                }
            }

            .Slider-arrow {
                display: none;
            }
        }

        &--multiSlide {
            width: ~'calc(100% + 2rem)';
            margin: 0 -1rem;
            padding: 2rem;

            @media @bpMedium {
                padding: 2rem 0;
            }

            .Slider-item {
                width: 100%;
                padding: 0 1rem;
                vertical-align: top;

                @media @bpMedium {
                    width: 25%;
                }
            }
        }

        &--autoplay {
            padding: 0;
        }
    }

    .Slider-container {
        .backgroundColorOptions();
    }

    .Slider-frame {
        width: 100%;
        position: relative;
        font-size: 0;
        line-height: 0;
        white-space: nowrap;
        overflow: hidden;
        margin: 0 auto;
    }

    .Slider-list {
        display: block;
        margin: 0;
        padding: 0;
        display: block;
        width: 100%;
    }    

    .Slider-arrow {
        position: absolute;
        top: 50%;
        left: 1rem;
        width: 12px;
        height: 12px;
        border: solid @colorWhite;
        border-width: 0 2px 2px 0;
        transform: translateY(-50%) rotate(-225deg);
        cursor: pointer;

        &--next {
            left: auto;
            right: 1rem;
            transform: translateY(-50%) rotate(-45deg);
        }
    }

    .Slider-dots {
        list-style: none;
        padding: 1rem 0;
        margin: 0;
        display: block;
        text-align: center;

        li {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(83, 87, 90, 0.5);
            margin: 0 0.5rem;
            cursor: pointer;

            img {
                width: 100%;
                border: 1px solid @colorGrey;
                pointer-events: none;
            }

            &:active {
                img {
                    border-color: @colorGrey;
                }
            }

            &.is-active {
                background: @colorBlack;

                img {
                    border-color: @colorGrey;
                }
            }

            &:hover {
                @media @bpMedium {
                    background: @colorGrey;

                    img {
                        border-color: @colorGrey;
                    }
                }
            }
        }
    }
</style>