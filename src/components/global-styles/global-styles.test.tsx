import * as React from 'react';
import renderer from 'react-test-renderer';

import GlobalStyles from './global-styles';

describe('GlobalStyles', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<GlobalStyles />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
