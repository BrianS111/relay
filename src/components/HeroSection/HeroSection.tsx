import React from 'react';
import styled from 'styled-components';
import blackArrowRight from '../../images/blackArrowRight.png';
import whiteArrowRight from '../../images/whiteArrowWhite.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    console.log('effect');
  }, []);
  return (
    <Container>
      <H1>Message Everywhere Using Your Web3 Identity</H1>
      <HeroSubText>
        Your Web3 wallet is now even more powerful. Use it for any and all types
        of messaging —encrypted and decentralized!
      </HeroSubText>
      <Link href={'https://relay.cc'} passHref>
        <CtaLink target="_blank">
          <CallToActionButton>
            <CtaButtonText>Launch App</CtaButtonText>
            <ImageContainer>
              <Image
                src={whiteArrowRight}
                width={15}
                height={16}
                alt="Launch Relay App"
              />
            </ImageContainer>
          </CallToActionButton>
        </CtaLink>
      </Link>
      <HeroUl>
        <HeroLi>Relay</HeroLi>
        <HeroLi>Receiver</HeroLi>
        <HeroLi>Bridge</HeroLi>
        <HeroLi>Pro</HeroLi>
      </HeroUl>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;

const InnerIconContainer = styled.div`
  transform: translateX(0px);
  transition: transform 200ms ease;
  min-width: 15px;
  min-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopHeroButton = styled.button`
  cursor: pointer;
  border-radius: 99rem;
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
  display: flex;
  align-items: center;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  margin-bottom: 40px;
  border: none;
  padding: 4px;
  padding-right: 25px;
  transition: background-color 200ms;
  background-color: white;

  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
    ${InnerIconContainer} {
      transform: translateX(8px);
    }
  }
`;

const InnerLeftCircle = styled.div`
  display: flex;
  align-items: center;
  background: #fee9bf;
  padding: 8px;
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
  margin-right: 12px;
  font-weight: 600px;
  border-radius: 50px;
  padding: 10px 5px;
  width: 75px;
  justify-content: center;
`;

const InnerText = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 64px;
  font-weight: 500;
  margin-bottom: 16px;
  text-align: center;
  padding: 20px;
  line-height: 1.25;
  max-width: 900px;
  animation: pageload 500ms ease-in-out;

  @media (max-width: 950px) {
    font-size: 52px;
  }
`;

const HeroSubText = styled.p`
  color: #787a9b;
  line-height: 28px;
  margin-bottom: 32px;
  max-width: 780px;
  text-align: center;
  line-height: 28px;
  opacity: 0.8;
  font-weight: 400;
  font-size: 18px;
  padding: 0px 20px;
  animation: pageload 500ms ease-in-out;
`;

const ImageContainer = styled.div`
  position: relative;
  transition: transform 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0px);
`;

const CallToActionButton = styled.button`
  background-color: ${(props) => props.theme.colors.black};
  padding: 15px 40px;
  border: none;
  cursor: pointer;
  border-radius: 99rem;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  animation: pageload 500ms ease-in-out forwards;

  &:hover {
    background-color: #626472;

    ${ImageContainer} {
      transform: translateX(8px);
    }
  }
`;

const HeroUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  animation: pageload2 300ms ease-in-out forwards;
  margin-bottom: 100px;
`;

const HeroLi = styled.li`
  border-radius: 99rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #787a9b;
  background-color: rgb(255, 255, 255, 0.5);
  border: 1px solid #eaeaea;
  padding: 10px 32px;
  transition: background-color 200ms;
  cursor: pointer;

  :hover {
    background-color: white;
  }
`;

const ThreeDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1010px;
  padding: 0px 20px;
  width: 100%;
  margin-bottom: 125px;
  flex-wrap: wrap;
  animation: pageload 1s forwards ease-in-out;
  @media (max-width: 625px) {
    justify-content: center;
    flex-direction: column;
    gap: 40px;
  }
`;

const CtaButtonText = styled.span`
  color: white;
  font-size: 18px;
  margin-right: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H3 = styled.h3`
  color: ${(props) => props.theme.colors.light};
  font-size: 16px;
  margin-bottom: 15px;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-size: 40px;
`;

const CtaLink = styled.a`
  text-decoration: none;
`;
