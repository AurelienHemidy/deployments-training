import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TaskItem from '../TaskItem.vue'

describe('TaskItem', () => {
  it('renders properly', () => {
    const wrapper = mount(TaskItem, { props: { text: 'This is task number one' } })
    expect(wrapper.text()).toContain('This is task number one')
  })
})
