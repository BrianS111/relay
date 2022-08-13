import styled from 'styled-components';
import BigGetStartedCard from './BigGetStartedCard';
import SmallGetStartedCard from './SmallGetStartedCard';
const black = '#25273d';

export default function GetStarted() {
  const SmallCardInfo = [
    {
      TitleText: 'Borrow Dai',
      ParagraphText:
        'Choose your preferred token as collateral and open a maker vault to get DAI',
      SpanText: 'Open vault',
    },
    {
      TitleText: 'Manage your vault',
      ParagraphText: 'Make actions on your vault whenever you want',
      SpanText: 'Connect your wallet',
    },
  ];
  return (
    <Container>
      <H2>Get Started with Oasis.app</H2>
      <CardContainer>
        <BigGetStartedCard />
        <SmallCardContainer>
          {SmallCardInfo.map((e, index) => {
           return <SmallGetStartedCard
              key={index}
              SpanText={e.SpanText}
              TitleText={e.TitleText}
              ParagraphText={e.ParagraphText}
            />;
          })}
        </SmallCardContainer>
      </CardContainer>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 964px) {
    padding: 10px;
  }
`;



const H2 = styled.h2`
font-size: 32px;
margin-bottom: 45px;
font-weight: 400;
color: ${black};
`;

const CardContainer = styled.div`
display: flex;
gap: 35px;
flex-wrap: wrap;
`;

const SmallCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  @media (max-width: 964px) {
    width: 100%;
  }
`;
