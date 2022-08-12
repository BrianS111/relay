import styled from 'styled-components';
import QuestionCard from './QuestionCard';

export default function QuestionSection() {
  const ListItems = [
    {
      TitleText: 'Learn',
      ParagraphText: 'Deep dive into oasis.app functionalities and glossary',
      ListItemsText: [
        {
          itemTitle: 'Get Started',
        },
        {
          itemTitle: 'Tutorials',
        },
        {
          itemTitle: 'Key Concepts',
        },
      ],
    },
    {
      TitleText: 'Support',
      ParagraphText: 'Contact Oasis.app team whenever you need',
      ListItemsText: [
        {
          itemTitle: 'FAQ',
        },
        {
          itemTitle: 'Discord',
        },
        {
          itemTitle: 'Contact us',
        },
        {
          itemTitle: 'Twitter',
        },
      ],
    },
  ];

  return (
    <Container>
      <Header>Have Some questions?</Header>
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
    </Container>
  );
}

const Container = styled.section``;

const Header = styled.h2``;
