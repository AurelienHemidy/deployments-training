import { successMessage } from '@/utils/successMessage'
import { describe, it, expect } from 'vitest'

describe('SuccessMessage', () => {
  it('test the success message', () => {
    expect(successMessage('this is the success message')).toBe('this is the success message')
  })
})
