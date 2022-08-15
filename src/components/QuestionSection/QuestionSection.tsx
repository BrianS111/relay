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
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  flex-wrap: wrap;
`

const Header = styled.h2`
  margin-bottom: 25px;
  font-size: 32px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  text-align: center;
`;
