import React from 'react';
import styled from 'styled-components';
import { CardBody } from './components/CardBody.styled';

function App() {
  return (
    <Wrapper>
      <CardBody>
      </CardBody>
      <CardBody>
      </CardBody>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export default App;
