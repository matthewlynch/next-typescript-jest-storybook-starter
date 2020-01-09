import styled from 'styled-components';

import Layout from '../components/layout/layout';

const Welcome = styled.h1`
  text-align: center;
  margin: 3rem 0;
`;

const Home = () => (
  <Layout title="Hello world!">
    <Welcome>Hello world!</Welcome>
  </Layout>
);

export default Home;
