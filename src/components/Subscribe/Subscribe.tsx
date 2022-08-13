import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';
const black = '#25273d';
const light = '#787a9b';
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

const Container = styled.div`
  padding: 200px 0px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const H2 = styled.h2`
  margin-bottom: 25px;
  font-size: 32px;
  font-weight: 400;
`;

const InputContainer = styled.div`
  border: 1px solid #e6e9eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99rem;
  padding: 16px 24px;
  max-width: 604px;
  width: 100%;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  color: ${black};

  ::placeholder {
    color: rgb(37, 39, 61, 0.5);
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 0.5px;
  }
`;

const IconContainer = styled.div`
  min-width: 12px;
  min-height: 12px;
  transform: translateX(0px);
  transition: transform 200ms;
`;

const SubmitContainer = styled.section`
  display: flex;
  align-items: center;
  height: calc(100% + 30px);
  cursor: pointer;
  color: ${black};
  :hover {
    ${IconContainer} {
      transform: translateX(6px);
    }
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${black};
  font-size: 14px;
  cursor: pointer;
`;
