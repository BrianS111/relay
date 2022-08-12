import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';

export default function Subscribe() {
  return (
    <Container>
      <H2>Stay up to date with Oasis.app</H2>
      <InputContainer>
        <Input type="text" placeholder="Email Address" />
        <SubmitContainer>
          <Button>Subscribe</Button>
          <IconContainer>
            <Image
              height={15}
              width={15}
              alt="Submit Email"
              src={blackArrowRight}
            />
          </IconContainer>
        </SubmitContainer>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div``;

const H2 = styled.h2``;

const InputContainer = styled.div``;

const Input = styled.input``;

const SubmitContainer = styled.section``;

const Button = styled.button``;
const IconContainer = styled.div``;
