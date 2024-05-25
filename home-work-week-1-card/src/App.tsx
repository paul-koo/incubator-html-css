import React from 'react';
import styled from 'styled-components';
import { CardBody } from './components/CardBody.styled';
import { ScreenPicture } from './components/Image.styled';

function App() {
  return (
    <Wrapper>
      <CardBody>
        <ScreenPicture roads={"./images/image1.png"}></ScreenPicture>
        <input type="password"></input>
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
