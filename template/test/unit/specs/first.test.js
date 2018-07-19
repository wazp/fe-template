/*
// Example test for a vue component. This does not take the vuex store into consideration, and only checks if
// the correct text is being rendered in an element, as an example.
*/
import Vue from 'vue'
import first from '@/Vue/Components/first'

describe('first.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(first)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('div>p').textContent).toEqual('This is a test vue component, which is part of the initial build process.')
  })
})