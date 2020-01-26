import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ImageItem from './'

describe('ImageItem', () => {
  const onSelect = jest.fn()
  const defaults = {
    item: {
      images: {
        fixed_width_downsampled: {
          height: 310,
          width: 250,
          url: 'http://imageurl.com/image',
        },
      },
      title: 'Image title',
    },
    listItemClassName: '',
    onSelect,
    size: 200,
  }

  const buildSubject = (props = defaults) => render(<ImageItem {...props} />)

  test('render the image with the proper attributes', () => {
    const { getByTestId } = buildSubject()

    expect(getByTestId('ImageItemImage').getAttribute('width')).toBe(
      defaults.item.images.fixed_width_downsampled.width.toString(),
    )
    expect(getByTestId('ImageItemImage').getAttribute('height')).toBe(
      defaults.item.images.fixed_width_downsampled.height.toString(),
    )
    expect(getByTestId('ImageItemImage').getAttribute('alt')).toBe(
      defaults.item.title,
    )
    expect(getByTestId('ImageItemImage').getAttribute('src')).toBe(
      defaults.item.images.fixed_width_downsampled.url,
    )
  })

  test('render the button', () => {
    const { getByTestId } = buildSubject()

    expect(getByTestId('ImageItemButton').getAttribute('type')).toBe('button')
  })

  test('dispatch the onClick action on button click', () => {
    const { getByTestId } = buildSubject()

    fireEvent.click(getByTestId('ImageItemButton'))
    expect(onSelect).toHaveBeenCalledTimes(1)
  })

})