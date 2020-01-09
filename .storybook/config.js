import { configure, addDecorator } from '@storybook/react';

import PageDecorator from './page-decorator';

addDecorator(PageDecorator);
configure(require.context('../src', true, /\.stories\.tsx$/), module);
