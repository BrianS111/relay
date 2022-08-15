import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';
import pills from '../../images/pills.png';

export default function BigGetStartedCard() {
  return (
    <Container>
      <H3>Multiply your assets</H3>
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

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0px);
  transition: transform 200ms ease;
`;

const Container = styled.div`
  width: 379px;
  height: 475px;
  background-image: url(${pills.src}),
    linear-gradient(
      141.11deg,
      rgb(235, 250, 255) 0.79%,
      rgb(235, 242, 255) 98.94%
    ),
    linear-gradient(
      127.5deg,
      rgb(238, 225, 249) 0%,
      rgb(255, 236, 232) 56.77%,
      rgb(221, 255, 247) 100%
    );
  background-position: right 0px bottom 0px;
  background-repeat: no-repeat;
  background-size: 300px, cover;
  border-radius: 16px;
  padding: 32px;
  cursor: pointer;
  @media (max-width: 964px) {
    width: 100%;
    height: 250px;
    background-size: 320px, cover;
  }

  :hover {
    ${IconContainer} {
      transform: translateX(8px);
    }
  }
`;
const H3 = styled.h3`
  margin: 8px 0px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
`;
const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.light};
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  margin-right: 8px;
`;
