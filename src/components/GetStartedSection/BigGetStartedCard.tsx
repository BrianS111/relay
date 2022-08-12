import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';

export default function BigGetStartedCard() {
  return (
    <Container>
      <H3>Multiply Your Assets</H3>
      <Paragraph>
        In a single transaction you can open a Maker vault, generate Dai, and
        spend them for more collateral.
      </Paragraph>
      <LinkContainer>
        <Span>Open vault</Span>
        <IconContainer>
          <Image height={15} width={15} src={blackArrowRight} alt="Open Link" />
        </IconContainer>
      </LinkContainer>
    </Container>
  );
}

const Container = styled.div``;
const H3 = styled.h3``;
const Paragraph = styled.p``;

const LinkContainer = styled.div``;
const Span = styled.span``;

const IconContainer = styled.div``;
