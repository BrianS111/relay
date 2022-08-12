import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';

interface Props {
  ListItemsText: string;
}

export default function ListItem({ ListItemsText }: Props) {
  return (
    <Title>
      {' '}
      {ListItemsText}
      <Icon>
        <Image height={15} width={15} src={blackArrowRight} alt="Open Link" />
      </Icon>
    </Title>
  );
}
const Title = styled.span``;
const Icon = styled.div``;
