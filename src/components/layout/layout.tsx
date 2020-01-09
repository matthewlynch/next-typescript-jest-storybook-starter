import * as React from 'react';
import Head from 'next/head';

export type LayoutProps = {
  title?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title = 'Default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export default Layout;
