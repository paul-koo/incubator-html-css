import React from 'react';
import styled from 'styled-components';
import { CardBody } from './components/CardBody.styled';
import { ScreenPicture } from './components/Image.styled';
import { Title } from './components/Title.styled';

function App() {
  return (
    <Wrapper>
      <CardBody>
        <ScreenPicture roads={"./images/image1.png"}></ScreenPicture>
        <Title>Headline</Title>
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
  justify-content: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
`

export default App;
