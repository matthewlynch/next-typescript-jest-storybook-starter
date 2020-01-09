import * as React from 'react';

// Make sure this rule is updated in /.storybook/preview-head.html!
const FontFace = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `@font-face {
  font-family: 'Nexa';
  src: url('/fonts/Nexa_Free_Bold-webfont.woff2') format('woff2'),
    url('/fonts/Nexa_Free_Bold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`,
    }}
  />
);

export default FontFace;
