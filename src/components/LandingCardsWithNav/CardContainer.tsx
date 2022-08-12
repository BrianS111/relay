import ListItem from 'components/QuestionSection/ListItem';
import styled from 'styled-components';
import Card from './Card';

export default function CardContainer() {
  const Cards = [
    {
      HeaderTitleText: 'Highest ETH multiple option',
      HeaderParagraphText:
        'The biggest possible Multiple to maximize your exposure to ETH',
      MiddleTitleText: 'With 79.00 ETH 👇',
      MiddleParagraphText: 'Get up to 342.07 ETH exposure',
      ButtonText: 'Multiply',
      CardListItems: [
        {
          ListItemTitleText: 'Max Multiple',
          ListItemDataText: '4.33x',
        },
        {
          ListItemTitleText: 'Current Liquidity Available',
          ListItemDataText: '21.26M',
        },
        {
          ListItemTitleText: 'Variable Annual Fee',
          ListItemDataText: '4.00%',
        },
        {
          ListItemTitleText: 'Protocall',
          ListItemDataText: 'Maker (ETH-B)',
        },
      ],
    },
    {
      HeaderTitleText: 'Highest wBTC multiple option',
      HeaderParagraphText:
        'The biggest possible Multiple to maximize your exposure to WBTC',
      MiddleTitleText: 'With 6.0000 WBTC 👇',
      MiddleParagraphText: 'Get up to 25.98 WBTC exposure',
      ButtonText: 'Multiply',
      CardListItems: [
        {
          ListItemTitleText: 'Max Multiple',
          ListItemDataText: '4.33x',
        },
        {
          ListItemTitleText: 'Current Liquidity Available',
          ListItemDataText: '21.26M',
        },
        {
          ListItemTitleText: 'Variable Annual Fee',
          ListItemDataText: '4.00%',
        },
        {
          ListItemTitleText: 'Protocall',
          ListItemDataText: 'Maker (ETH-B)',
        },
      ],
    },
    {
      HeaderTitleText: 'StETH with medium cost and multiple',
      HeaderParagraphText:
        'Great for Borrowing or Multiplying while earning staking rewards',
      MiddleTitleText: 'With 75.00 WSTETH 👇',
      MiddleParagraphText: 'Get up to 199.50 WSTETH exposure',
      ButtonText: 'Multiply',
      CardListItems: [
        {
          ListItemTitleText: 'Max Multiple',
          ListItemDataText: '4.33x',
        },
        {
          ListItemTitleText: 'Current Liquidity Available',
          ListItemDataText: '21.26M',
        },
        {
          ListItemTitleText: 'Variable Annual Fee',
          ListItemDataText: '4.00%',
        },
        {
          ListItemTitleText: 'Protocall',
          ListItemDataText: 'Maker (ETH-B)',
        },
      ],
    },
  ];

  return (
    <Container>
      {Cards.map((e, index: number) => {
        return (
          <Card
            key={index}
            HeaderTitleText={e.HeaderTitleText}
            HeaderParagraphText={e.HeaderParagraphText}
            MiddleTitleText={e.MiddleTitleText}
            MiddleParagraphText={e.MiddleParagraphText}
            ButtonText={e.ButtonText}
            CardListItems={e.CardListItems}
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
  padding: 32px;
  border-radius: 20px;
`;
