import { mount } from '@vue/test-utils'
import loadPage from '@/views/loadPage.vue'

describe('HomePage.vue', () => {
  it('renders home vue', () => {
    const wrapper = mount(loadPage)
    expect(wrapper.text()).toMatch('Ready to create an app?')
  })
})
