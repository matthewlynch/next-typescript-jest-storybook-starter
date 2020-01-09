import React from 'react';

import GlobalStyle from '../src/components/global-styles/global-styles';

const PageDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export default PageDecorator;
