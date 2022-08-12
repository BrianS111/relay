import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';

export default function FooterSubscribeSection() {
  return (
    <Container>
      <H3></H3>
      <Span></Span>
      <InputContainer>
        <Input />
        <IconContainer>
          <Image
            width={12}
            height={9}
            alt="Submit Email"
            src={blackArrowRight}
          />
        </IconContainer>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div``;

const H3 = styled.h3``;
const Span = styled.span``;
const InputContainer = styled.div``;

const Input = styled.input``;

const IconContainer = styled.div``;
