import React from 'react';
import styled from 'styled-components';
import { CardBody } from './components/CardBody.styled';
import { ScreenPicture } from './components/Image.styled';
import { Title } from './components/Title.styled';
import { Paragraph } from './components/Paragraph.styled';
import { Button } from './components/Button.styled';
import { ButtonContainer } from './components/ButtonContainer.styled';

function App() {
  return (
    <Wrapper>
      <CardBody>
        <ScreenPicture road={"./images/image1.png"}/>
        <Title>Headline</Title>
        <Paragraph>Faucibus. Faucibus. Sit sit sapien sit <br/> tempusrisu ut. Sit molestie ornare in venen.</Paragraph>
        <ButtonContainer>
          <Button status={"active"}>See more</Button>
          <Button status={"inactive"}>Save</Button>
        </ButtonContainer>
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