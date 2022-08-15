import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';
import dai from '../../images/dai.png';
import safe from '../../images/safe.png';
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
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 200ms ease;
  transform: translateX(0px);
`;

const Container = styled.div`
  width: 533px;
  height: 220px;
  border-radius: 16px;
  padding: 32px;
  background-size: 220px, cover;
  background-position: right 0px bottom 0px;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 964px) {
    width: 100%;
    height: 250px;
    background-size: 280px, cover;
  }

  :hover {
    ${IconContainer} {
      transform: translateX(8px);
    }
  }

  :first-of-type {
    background-image: url(${dai.src}),
      linear-gradient(
        98.21deg,
        rgb(255, 251, 232) 2.63%,
        rgb(255, 240, 232) 99.63%
      ),
      linear-gradient(
        127.5deg,
        rgb(228, 249, 201) 0%,
        rgb(232, 255, 245) 49.48%,
        rgb(249, 225, 235) 100%
      );
  }

  :nth-of-type(2) {
    background-image: url(${safe.src}),
      linear-gradient(
        127.5deg,
        rgb(232, 234, 255) 0%,
        rgb(238, 240, 255) 0%,
        rgb(255, 243, 250) 100%
      ),
      linear-gradient(
        127.5deg,
        rgb(221, 255, 247) 0%,
        rgb(232, 234, 255) 61.98%,
        rgb(249, 225, 239) 100%
      );
  }
`;
const H3 = styled.h3`
  margin: 8px 0px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.light};
  line-height: 1.5;
  width: 70%;
  font-weight: 400;
  margin-bottom: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  margin-right: 8px;
  color: ${(props) => props.theme.colors.black};
`;
