import React from 'react'
import { render, act, fireEvent } from '@testing-library/react-native'
import ListItem from './ListItem'

describe('ListItem component', () => {
  it('renders correctly', () => {
    const defaultProps = {
      name: 'a name',
      image: 'image uri',
      reputation: '1',
    }
    const { getByTestId, unmount } = render(<ListItem {...defaultProps} />)
    expect(getByTestId('list item')).toBeDefined()
    unmount()
  })
})
