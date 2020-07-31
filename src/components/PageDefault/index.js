import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 0px;
    padding-right: 5%;
    padding-left: 5%;

`;

function PageDefault(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
