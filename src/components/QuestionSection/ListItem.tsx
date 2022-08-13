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
      <TitleContent>{ListItemsText}</TitleContent>
      <Icon>
        <Image height={15} width={15} src={blackArrowRight} alt="Open Link" />
      </Icon>
    </Title>
  );
}

const TitleContent = styled.span`
  margin-right: 8px;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0px);
  transition: transform 200ms;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    ${Icon} {
      transform: translateX(8px);
    }
  }
`;
