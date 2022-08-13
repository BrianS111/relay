import styled from 'styled-components';
import Card from './Card';
import { CardsOne } from './CardData';
import { CardsTwo } from './CardData';
import { CardsThree } from './CardData';

interface Props {
  itemOneActive: boolean;
  itemTwoActive: boolean;
  itemThreeActive: boolean;
}

export default function CardContainer({
  itemOneActive,
  itemTwoActive,
  itemThreeActive,
}: Props) {
  return (
    <Container>
      {itemOneActive &&
        CardsOne.map((e: any, index: number) => {
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
      {itemTwoActive &&
        CardsTwo.map((e: any, index: number) => {
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
      {itemThreeActive &&
        CardsThree.map((e: any, index: number) => {
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
    </Container>
  );
}

const Container = styled.div`
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
`;
