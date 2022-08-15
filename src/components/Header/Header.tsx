import styled from 'styled-components';
import oasisLogo from '../../images/logo.svg';
import blackArrowRight from '../../images/blackArrowRight.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsHamburgerMenuOpen((isHamburgerMenuOpen) => !isHamburgerMenuOpen);
  };

  return (
    <Container>
      <LeftGroup>
        <Link href="/" passHref>
          <ImageContainer>
            <Image
              height={31}
              width={98}
              src={oasisLogo}
              alt="Panel Logo"
              priority={true}
            />
          </ImageContainer>
        </Link>
        <Nav>
          <NavUl>
            <NavLi>
              <Link href="/Multiply" passHref>
                <NavA>Multiply</NavA>
              </Link>
            </NavLi>
            <NavLi>
              <Link href="/Borrow" passHref>
                <NavA>Borrow</NavA>
              </Link>
            </NavLi>
            <NavLi>
              <Link href="/Earn" passHref>
                <NavA>Earn</NavA>
              </Link>
            </NavLi>
            <NavLi>
              <Link href="/AssetsPage" passHref>
                <NavA>Assets</NavA>
              </Link>
            </NavLi>
          </NavUl>
        </Nav>
      </LeftGroup>
      <HamburgerMenuIconContainer onClick={handleMenuClick}>
        <svg
          viewBox="0 0 20 20"
          display="inline-block"
          role="presentation"
          width="20px">
          <g fill="#25273d">
            <path d="M4 10C4 9.44772 4.44772 9 5 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H5C4.44772 11 4 10.5523 4 10Z"></path>
            <path d="M4 14C4 13.4477 4.44772 13 5 13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H5C4.44772 15 4 14.5523 4 14Z"></path>
            <path d="M4 6C4 5.44772 4.44772 5 5 5H15C15.5523 5 16 5.44772 16 6C16 6.55228 15.5523 7 15 7H5C4.44772 7 4 6.55228 4 6Z"></path>
          </g>
        </svg>
      </HamburgerMenuIconContainer>
      {isHamburgerMenuOpen && (
        <HamburgerMenu>
          <HamburgerMenuList>
            <Link href="/" passHref>
              <ImageContainer onClick={handleMenuClick}>
                <Image
                  height={31}
                  width={98}
                  src={oasisLogo}
                  alt="Panel Logo"
                  priority={true}
                />
              </ImageContainer>
            </Link>
            <HamburgerMenuListItem onClick={handleMenuClick}>
              <Link href="/Multiply" passHref>
                <HamburgerA>Multiply</HamburgerA>
              </Link>
            </HamburgerMenuListItem>
            <HamburgerMenuListItem onClick={handleMenuClick}>
              <Link href="/Borrow" passHref>
                <HamburgerA>Borrow</HamburgerA>
              </Link>
            </HamburgerMenuListItem>
            <HamburgerMenuListItem onClick={handleMenuClick}>
              <Link href="/Earn" passHref>
                <HamburgerA>Earn</HamburgerA>
              </Link>
            </HamburgerMenuListItem>
            <HamburgerMenuListItem onClick={handleMenuClick}>
              <Link href="/AssetsPage" passHref>
                <HamburgerA>Assets</HamburgerA>
              </Link>
            </HamburgerMenuListItem>
          </HamburgerMenuList>
          <ExitMenuIconContainer onClick={handleMenuClick}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.7 4.3C19.3 3.9 18.7 3.9 18.3 4.3L12 10.6L5.7 4.3C5.3 3.9 4.7 3.9 4.3 4.3C3.9 4.7 3.9 5.3 4.3 5.7L10.6 12L4.3 18.3C3.9 18.7 3.9 19.3 4.3 19.7C4.5 19.9 4.7 20 5 20C5.3 20 5.5 19.9 5.7 19.7L12 13.4L18.3 19.7C18.5 19.9 18.8 20 19 20C19.2 20 19.5 19.9 19.7 19.7C20.1 19.3 20.1 18.7 19.7 18.3L13.4 12L19.7 5.7C20.1 5.3 20.1 4.7 19.7 4.3Z"
                fill="#787a9b"
              />
            </svg>
          </ExitMenuIconContainer>
        </HamburgerMenu>
      )}
      <RightGroup>
        <NavRightButtonsContainer>
          <RightButton>
            Connect Wallet
            <ConnectArrowContainer>
              <Image
                width={14}
                height={11}
                src={blackArrowRight}
                alt="Connect"
              />
            </ConnectArrowContainer>
          </RightButton>
        </NavRightButtonsContainer>
      </RightGroup>
    </Container>
  );
}

const ImageContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  height: 41px;
  height: 41px;
  width: 98px;
  cursor: pointer;
`;

const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  max-width: 1200px;
  margin-bottom: 75px;
  overflow: none;
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

const NavLi = styled.li``;

const NavA = styled.a`
  color: #787a9b;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  transition: color 200ms ease;
  margin-right: 50px;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.black};
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

const RightButton = styled.button`
  padding: 8px 32px;
  border-radius: 99rem;
  color: ${(props) => props.theme.colors.black};
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

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
`;

const HamburgerMenuIconContainer = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: #e6e9eb;
  }
  
  @media (min-width: 861px) {
    display: none;
  }
`;

const RightGroup = styled.div`
  @media (max-width: 860px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  overflow: hidden;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HamburgerMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const HamburgerMenuListItem = styled.li``;
const HamburgerA = styled.a`
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  text-decoration: none;
`;

const ExitMenuIconContainer = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.light};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;
