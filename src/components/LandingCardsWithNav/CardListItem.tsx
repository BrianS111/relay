import styled from 'styled-components';
const black = '#25273d';
const light = '#787a9b';

interface Props {
  ListItemTitleText: string;
  ListItemDataText: string;
}

export default function CardListItem({
  ListItemTitleText,
  ListItemDataText,
}: Props) {
  return (
    <ListItem>
      <ListItemTitle>{ListItemTitleText}</ListItemTitle>
      <ListItemData>{ListItemDataText}</ListItemData>
    </ListItem>
  );
}

const ListItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
`;

const ListItemTitle = styled.span`
  color: ${light};
`;

const ListItemData = styled.div`
  color: ${black};
`;
