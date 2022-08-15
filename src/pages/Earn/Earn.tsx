import styled from 'styled-components';
import { CardsTwo } from '../../components/LandingCardsWithNav/CardData';
import Card from '../../components/LandingCardsWithNav/Card';

export default function index() {
  return (
    <Container>
      <H1>Oasis Earn</H1>
      <P>
        Put your crypto assets to work today. Start generating the best yields.
        Select your Earn product below.
      </P>
      <CardContainer>
        {CardsTwo.map((e: any, index: number) => {
          return (
            <Card
              key={index}
              HeaderTitleText={e.HeaderTitleText}
              HeaderParagraphText={e.HeaderParagraphText}
              MiddleTitleText={e.MiddleTitleText}
              MiddleParagraphText={e.MiddleParagraphText}
              ButtonText={e.ButtonText}
              CardListItems={e.CardListItems}
              MiddleContainerColor={e.MiddleContainerColor}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 32px;
  border-radius: 20px;

  @media (max-width: 860px) {
    gap: 20px;
  }
  @media (max-width: 500px) {
    gap: 20px;
    padding: 0px 10px;
  }
`;

const H1 = styled.h1`
  font-size: 52px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 25px;
  text-align: center;
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.light};
  width: 100%;
  padding: 0px 30px;
  text-align: center;
  margin-bottom: 50px;
`;
