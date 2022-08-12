import styled from 'styled-components';
import ListItem from './ListItem';

interface Props {
  ListItemsText: any;
  TitleText: string;
  ParagraphText: string;
}

export default function QuestionCard({
  ListItemsText,
  TitleText,
  ParagraphText,
}: Props) {
  return (
    <Container>
      <Title>{TitleText}</Title>
      <Paragraph>{ParagraphText}</Paragraph>
      <List>
        {ListItemsText.map((e: any, index: any) => {
          return <ListItem key={index} ListItemsText={e.itemTitle} />;
        })}
      </List>
    </Container>
  );
}

const Container = styled.div``;
const Title = styled.h3``;
const Paragraph = styled.p``;
const List = styled.ul``;
