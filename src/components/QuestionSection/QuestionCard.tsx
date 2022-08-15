import styled from 'styled-components';
import ListItem from './ListItem';
import cubes from '../../images/cubes.png';
import bubbles from '../../images/bubbles.png';
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
const Container = styled.div`
  border-radius: 16px;
  width: 100%;
  :first-of-type {
    background-image: url(${cubes.src}),
      linear-gradient(
        127.5deg,
        rgb(238, 225, 249) 0%,
        rgb(255, 236, 232) 56.77%,
        rgb(221, 255, 247) 100%
      );
    background-position: right 0px bottom 0px;
    background-repeat: no-repeat;
    background-size: 55%, cover;
    padding: 32px;
  }
  :nth-of-type(2) {
    background-image: url(${bubbles.src}),
      linear-gradient(
        135.35deg,
        rgb(254, 247, 255) 0.6%,
        rgb(254, 233, 239) 100%
      ),
      radial-gradient(
        261.45% 254.85% at 3.41% 2.19%,
        rgb(255, 250, 221) 0%,
        rgb(255, 251, 227) 0.01%,
        rgb(240, 255, 242) 52.6%,
        rgb(251, 237, 253) 100%
      );
    background-position: right 0px bottom 0px;
    background-repeat: no-repeat;
    background-size: 50%, cover;
    padding: 32px;
  }
  width: 411px;
  height: 340px;

  @media (max-width: 897px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.light};
  width: 90%;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 50px;
`;
const List = styled.ul``;
