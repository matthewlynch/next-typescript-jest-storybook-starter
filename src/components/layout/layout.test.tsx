import * as React from 'react';
import { render } from '@testing-library/react';

import Layout from './layout';

describe('Layout', () => {
  it('should render children', () => {
    const { getByText } = render(
      <Layout>
        <p>Hello!</p>
      </Layout>
    );

    expect(getByText('Hello!')).not.toBeNull();
  });
});
