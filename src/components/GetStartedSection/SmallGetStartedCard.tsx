import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';

interface Props {
  TitleText: string;
  ParagraphText: string;
  SpanText: string;
}

export default function LittleGetStartedCard({
  TitleText,
  ParagraphText,
  SpanText,
}: Props) {
  return (
    <Container>
      <H3>{TitleText}</H3>
      <Paragraph>{ParagraphText}</Paragraph>
      <LinkContainer>
        <Span>{SpanText}</Span>
        <IconContainer>
          <Image height={15} width={15} alt="Open Link" src={blackArrowRight} />
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
