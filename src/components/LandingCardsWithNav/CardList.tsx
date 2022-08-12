import styled from 'styled-components';
import CardListItem from './CardListItem';

interface Props {
  CardListItems: any;
}

export default function CardList({ CardListItems }: Props) {
  return (
    <Ul>
      {CardListItems.map((e: any, index: number) => {
        return (
          <CardListItem
            key={index}
            ListItemTitleText={e.ListItemTitleText}
            ListItemDataText={e.ListItemDataText}
          />
        );
      })}
    </Ul>
  );
}
const Ul = styled.ul`
display: flex;
width: 100%;
flex-direction: column;
margin-bottom: 30px;
`;
