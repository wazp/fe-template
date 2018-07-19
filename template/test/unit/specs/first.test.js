/*
// Example test for a vue component. This does not take the vuex store into consideration, and only checks if
// the correct text is being rendered in an element, as an example.
*/
import { mount } from 'vue-test-utils'
import first from '@/Vue/Components/first'

describe('first.vue', () => {
  const wrapper = mount(first)

  it('should render correct contents', () => {
    expect(wrapper.find('div>p').text()).toEqual('This is a test vue component, which is part of the initial build process.')
  })

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})