import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';
import Link from 'next/link'

interface Props {
  ListItemsText: string;
  ListItemsUrl: string
}

export default function ListItem({ ListItemsText, ListItemsUrl }: Props) {
  return (
    <Link href={ListItemsUrl || ""} passHref>
    <A target="_blank">
    <Title>
      {' '}
      <TitleContent>{ListItemsText}</TitleContent>
      <Icon>
        <Image height={15} width={15} src={blackArrowRight} alt="Open Link" />
      </Icon>
    </Title>
    </A>
    </Link>
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
  color: ${props => props.theme.colors.black};
  :hover {
    ${Icon} {
      transform: translateX(8px);
    }
  }
`;

const A = styled.a`
  text-decoration: none;
`