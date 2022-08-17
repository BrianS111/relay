import styled from 'styled-components';
import CardList from './CardList';
import Link from 'next/link'
interface Props {
  HeaderTitleText: string;
  HeaderParagraphText: string;
  MiddleTitleText: string;
  MiddleParagraphText: string;
  ButtonText: string;
  CardListItems: any;
  MiddleContainerColor: string;
  ButtonUrl: string;
}

export default function Card({
  HeaderTitleText,
  HeaderParagraphText,
  MiddleTitleText,
  MiddleParagraphText,
  ButtonText,
  CardListItems,
  MiddleContainerColor,
  ButtonUrl,
}: Props) {
  return (
    <Container>
      <Header>
        <HeaderText>
          <HeaderTitle>{HeaderTitleText}</HeaderTitle>
          <HeaderParagraph>{HeaderParagraphText}</HeaderParagraph>
        </HeaderText>
        <HeaderImage>
          <ImagePlaceholder />
        </HeaderImage>
      </Header>
      <MiddleContainer MiddleContainerColor={MiddleContainerColor}>
        <MiddleTitle>{MiddleTitleText}</MiddleTitle>
        <MiddleParagraph>{MiddleParagraphText}</MiddleParagraph>
      </MiddleContainer>
      <CardList CardListItems={CardListItems} />
      <Link href={ButtonUrl || ""} passHref>
        <ButtonLink>
      <Button>{ButtonText}</Button>
      </ButtonLink>
      </Link>
    </Container>
  );
}

const ImagePlaceholder = styled.div`
  height: 125px;
  width: 125px;
  border-radius: 50%;
  background: #333;

  @keyframes rotate {
    100% {
      transform: rotateY(360deg);
    }
  }
`;

const Container = styled.div`
  padding: 32px;
  border-radius: 20px;
  margin: 15px;
  width: 379px;
  @media (max-width: 925px) {
    width: 100%;
  }
  @media (max-width: 400px) {
  }

  :hover {
    ${ImagePlaceholder} {
      animation: rotate 750ms forwards;
    }
  }

  :first-of-type {
    background: linear-gradient(
      160.47deg,
      rgb(240, 243, 253) 0.35%,
      rgb(252, 240, 253) 99.18%
    );
    animation: cardload1 500ms ease-in forwards;
  }
  :nth-of-type(2) {
    background: linear-gradient(
      147.66deg,
      rgb(254, 241, 225) 0%,
      rgb(253, 242, 202) 88.25%
    );
    animation: cardload2 500ms ease-in forwards;
  }
  :nth-of-type(3) {
    background: linear-gradient(
      158.87deg,
      rgb(226, 247, 249) 0%,
      rgb(211, 243, 245) 100%
    );
    animation: cardload3 500ms ease-in forwards;
  }
`;

interface StyleProps {
  MiddleContainerColor: string;
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
  margin-right: 10px;
`;
const HeaderTitle = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  text-align: left;
  line-height: 1.5;
`;
const HeaderParagraph = styled.p`
  color: ${(props) => props.theme.colors.light};
  font-size: 14px;
  text-align: left;
  line-height: 1.5;
  font-weight: 300;
`;
const HeaderImage = styled.div`
  background-color: white;
  border-radius: 50%;
`;

const MiddleContainer = styled.div<StyleProps>`
  padding: 16px;
  border-radius: 20px;
  min-height: 116px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  margin: 35px 0px;
  position: relative;
  background-color: ${(props) => props.MiddleContainerColor};
`;
const MiddleTitle = styled.h3`
  color: ${(props) => props.theme.colors.light};
  font-size: 16px;
`;

const MiddleParagraph = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  line-height: 28px;
  font-size: 18px;
  text-align: center;
`;

const Button = styled.button`
  border-radius: 32px;
  background-color: ${(props) => props.theme.colors.black};
  padding: 8px 16px;
  cursor: pointer;
  color: white;
  width: 100%;
  text-align: center;
  padding: 18px 0px;
  font-size: 18px;
  border: none;
  box-shadow: rgb(0 0 0 / 13%) 0px 2px 8px;
`;

const ButtonLink = styled.a`
text-decoration: none;
`