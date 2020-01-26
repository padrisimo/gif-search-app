import React from 'react';
import { render } from '@testing-library/react';
import ExpandedImage from './';

describe('ExpandedImage', () => {
  const defaults = {
    gif: {
      type: 'gif',
      id: 'xT1XGPDVdqIWOX1DTG',
      url:
        'https://giphy.com/gifs/nba-kobe-bryant-los-angeles-lakers-kobes-last-game-xT1XGPDVdqIWOX1DTG',
      slug:
        'nba-kobe-bryant-los-angeles-lakers-kobes-last-game-xT1XGPDVdqIWOX1DTG',
      bitly_gif_url: 'https://gph.is/1VX6UU1',
      bitly_url: 'https://gph.is/1VX6UU1',
      embed_url: 'https://giphy.com/embed/xT1XGPDVdqIWOX1DTG',
      username: 'nba',
      source: 'https://nba.com',
      title: 'Los Angeles Lakers Applause GIF by NBA',
      rating: 'g',
      content_url: '',
      source_tld: 'nba.com',
      source_post_url: 'https://nba.com',
      is_sticker: 0,
      import_datetime: '2016-04-14 02:37:29',
      trending_datetime: '2020-01-26 20:14:37',
      images: {
        original: {
          url:
            'https://media1.giphy.com/media/xT1XGPDVdqIWOX1DTG/giphy.gif?cid=e8452e686158368f25bdbf53edd659d832b09890b51be0da&rid=giphy.gif'
        }
      }
    }
  };

  const buildSubject = (props = defaults) =>
    render(<ExpandedImage {...props} />);

  test('render the image with the proper attributes', () => {
    const { getByTestId } = buildSubject();

    expect(getByTestId('ExpandedImage').children[1].getAttribute('src')).toBe(
      defaults.gif.images.original.url
    );
  });
});
