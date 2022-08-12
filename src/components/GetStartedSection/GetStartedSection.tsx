import styled from 'styled-components';
import BigGetStartedCard from './BigGetStartedCard';
import SmallGetStartedCard from './SmallGetStartedCard';

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
            <SmallGetStartedCard
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

const Container = styled.section``;
const H2 = styled.h2``;

const CardContainer = styled.div``;
const SmallCardContainer = styled.div``;
