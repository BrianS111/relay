import styled from 'styled-components';
import oasisLogo from '../../images/logo.svg';
import blackArrowRight from '../../images/blackArrowRight.png';
import Image from 'next/image';

const black = '#25273d';

export default function Header() {
  return (
    <Container>
      <LeftGroup>
        <ImageContainer>
          <Image height={31} width={98} src={oasisLogo} alt="Panel Logo" />
        </ImageContainer>
        <Nav>
          <NavUl>
            <NavLi>Multiply</NavLi>
            <NavLi>Borrow</NavLi>
            <NavLi>Earn</NavLi>
            <NavLi>Assets</NavLi>
          </NavUl>
        </Nav>
      </LeftGroup>
      <RightGroup>
        <NavRightButtonsContainer>
          <LeftButton>
            Connect Wallet
            <ConnectArrowContainer>
              <Image
                width={14}
                height={11}
                src={blackArrowRight}
                alt="Connect"
              />
            </ConnectArrowContainer>
          </LeftButton>
          <LanguageDropdown>English</LanguageDropdown>
        </NavRightButtonsContainer>
      </RightGroup>
    </Container>
  );
}

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  height: 41px;
  height: 41px;
  width: 98px;
`;

const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  max-width: 1200px;
  margin-bottom: 75px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 860px) {
    display: none;
  }
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const NavLi = styled.li`
  color: #787a9b;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  transition: color 200ms ease;
  margin-right: 50px;
  &:hover {
    color: ${black};
  }
`;

const NavRightButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ConnectArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 11px;
  min-width: 14px;
  margin-left: 8px;
  transform: translateX(0px);
  transition: transform 200ms ease;
`;

const LeftButton = styled.button`
  padding: 8px 32px;
  border-radius: 99rem;
  color: ${black};
  line-height: 24px;
  font-size: 16px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  display: flex;
  border: none;
  background-color: white;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
  transition: background-color 200ms ease;
  &:hover {
    background: #e6e9eb;

    ${ConnectArrowContainer} {
      transform: translateX(10px);
    }
  }
`;

const LanguageDropdown = styled.div`
  cursor: pointer;
  color: #78789b;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RightGroup = styled.div`
  @media (max-width: 860px) {
    display: none;
  }
`;
