import * as React from 'react';
import renderer from 'react-test-renderer';

import FontFact from './font-face';

describe('FontFact', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<FontFact />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
