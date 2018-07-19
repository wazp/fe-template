/*
// Example test for a vue component. This does not take the vuex store into consideration, and only checks if
// the correct text is being rendered in an element, as an example.
*/
import { mount } from 'vue-test-utils'
import store from '@/Scripts/store'
import second from '@/Vue/OnDemand/secondondemand'

describe('secondondemand.vue', () => {
  const wrapper = mount(second, {
    store
  })

  it('should render correct contents', async () => {
    expect(wrapper.find('div>p:first-child').text()).toEqual('This is another test vue component, which is loaded on demand when you want it.')
  })
})