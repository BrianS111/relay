import styled from 'styled-components';
import QuestionCard from './QuestionCard';

export default function QuestionSection() {
  const ListItems = [
    {
      TitleText: 'Learn',
      ParagraphText: 'Dig into the relay.cc product suite',
      ListItemsText: [
        {
          itemTitle: 'Get Started',
          ItemUrl: 'https://relay.cc/about',
        },
        {
          itemTitle: 'Integrations',
          itemUrl: 'https://docs.relay.cc/relay/relay-receiver',
        },
        {
          itemTitle: 'Key Concepts',
          itemUrl: 'https://docs.relay.cc/relay/',
        },
      ],
    },
    {
      TitleText: 'Support',
      ParagraphText: 'The relay.cc team is here to help',
      ListItemsText: [
        {
          itemTitle: 'About + FAQ',
          itemUrl: 'https://relay.cc/about',
        },
        {
          itemTitle: 'Discord',
          itemUrl: 'https://discord.com/invite/ybRyHA8h',
        },
        {
          itemTitle: 'Contact us',
          itemUrl: 'relay.cc/seanwbren.eth',
        },
        {
          itemTitle: 'Twitter',
          itemUrl: 'https://twitter.com/relay_eth',
        },
      ],
    },
  ];

  return (
    <Container>
      <Header>Have Some questions?</Header>
      <CardContainer>
        {ListItems.map((e, index) => {
          return (
            <QuestionCard
              key={index}
              TitleText={e.TitleText}
              ParagraphText={e.ParagraphText}
              ListItemsText={e.ListItemsText}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 225px;
  margin-bottom: 275px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;

  @media (max-width: 897px) {
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  flex-wrap: wrap;
`;

const Header = styled.h2`
  margin-bottom: 25px;
  font-size: 48px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  text-align: center;
`;
