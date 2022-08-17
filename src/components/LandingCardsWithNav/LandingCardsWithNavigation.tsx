import styled from 'styled-components';
import CardContainer from './CardContainer';
import { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import downarrow from '../../images/downarrow.png';

export default function LandingCardsWithNavigation() {
  const [itemOneActive, setItemOneActive] = useState(false);
  const [itemTwoActive, setItemTwoActive] = useState(true);
  const [itemThreeActive, setItemThreeActive] = useState(true);
  const [itemFourActive, setItemFourActive] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);

  //This is here to get rid of page glitch on first renders
  useLayoutEffect(() => {
    setItemOneActive(true);
    setItemTwoActive(false);
    setItemThreeActive(false);
    setItemFourActive(false);
    setIsDropdownVisible(false);
  }, []);

  const handleItemOneClick = () => {
    setItemTwoActive(false);
    setItemThreeActive(false);
    setItemFourActive(false);
    setItemOneActive(true);
  };

  const handleItemTwoClick = () => {
    setItemTwoActive(true);
    setItemThreeActive(false);
    setItemFourActive(false);
    setItemOneActive(false);
  };

  const handleItemThreeClick = () => {
    setItemTwoActive(false);
    setItemThreeActive(true);
    setItemOneActive(false);
    setItemFourActive(false);
  };

  const handleItemFourClick = () => {
    setItemTwoActive(false);
    setItemThreeActive(false);
    setItemOneActive(false);
    setItemFourActive(true);
  };

  const handleDropdownItemOneClick = () => {
    setItemTwoActive(false);
    setItemThreeActive(false);
    setItemFourActive(false);
    setItemOneActive(true);
  };

  const handleDropdownItemTwoClick = () => {
    setItemTwoActive(true);
    setItemThreeActive(false);
    setItemFourActive(false);
    setItemOneActive(false);
  };

  const handleDropdownItemThreeClick = () => {
    setItemTwoActive(false);
    setItemThreeActive(true);
    setItemOneActive(false);
    setItemFourActive(false);
  };

  const handleDropdownItemFourClick = () => {
    setItemTwoActive(false);
    setItemThreeActive(false);
    setItemOneActive(false);
    setItemFourActive(true);
  };

  const handleDropdownClick = () => {
    setIsDropdownVisible((isDropdownVisible) => !isDropdownVisible);
  };

  return (
    <Container>
      <H2>Products</H2>
      <Navbar>
        <NavDropdown onClick={handleDropdownClick}>
          <DropDownTitle>
            {itemOneActive && 'Relay'}
            {itemTwoActive && 'Receiver'}
            {itemThreeActive && 'Bridge'}
            {itemFourActive && 'Pro'}
            <FlexRow>
              <Line />
              <DownArrowContainer>
                <Image
                  height={20}
                  width={20}
                  alt="Click to open dropdown menu"
                  src={downarrow}
                />
              </DownArrowContainer>
            </FlexRow>
          </DropDownTitle>
          {isDropdownVisible && (
            <DropDownItems>
              <DropdownItem onClick={handleDropdownItemOneClick}>
                Relay
              </DropdownItem>
              <DropdownItem onClick={handleDropdownItemTwoClick}>
                Receiver
              </DropdownItem>
              <DropdownItem onClick={handleDropdownItemThreeClick}>
                Bridge
              </DropdownItem>
              <DropdownItem onClick={handleDropdownItemFourClick}>
                Pro
              </DropdownItem>
            </DropDownItems>
          )}
        </NavDropdown>
        <NavItems>
          <NavItemOne
            itemOneActive={itemOneActive}
            onClick={handleItemOneClick}>
            Relay
          </NavItemOne>
          <NavItemTwo
            itemTwoActive={itemTwoActive}
            onClick={handleItemTwoClick}>
            Receiver
          </NavItemTwo>
          <NavItemThree
            itemThreeActive={itemThreeActive}
            onClick={handleItemThreeClick}>
            Bridge
          </NavItemThree>
          <NavItemFour
            itemFourActive={itemFourActive}
            onClick={handleItemFourClick}>
            Pro
          </NavItemFour>
        </NavItems>
      </Navbar>
      <Paragraph>
        {itemOneActive && 'XMTP message inbox and web3 profiles'}
        {itemTwoActive &&
          'A chat box for any website, for users to communicate with other users or the website'}
        {itemThreeActive && 'Send mass messages to a criteria of wallets'}
        {itemFourActive && 'An XMTP bot that can send and receive messages'}
      </Paragraph>
      <CardContainer
        itemOneActive={itemOneActive}
        itemTwoActive={itemTwoActive}
        itemThreeActive={itemThreeActive}
        itemFourActive={itemFourActive}
      />
    </Container>
  );
}

interface StyleProps {
  itemOneActive?: boolean;
  itemTwoActive?: boolean;
  itemThreeActive?: boolean;
  itemFourActive?: boolean;
}

const Container = styled.section`
  width: 100%;
  max-width: 1450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 99rem;
`;

const H2 = styled.h2`
  font-size: 52px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 30px;
  animation: pageload3 1s forwards ease-in;
`;

const Navbar = styled.nav`
  animation: pageload3 1s forwards ease-in;

  @media (max-width: 925px) {
    width: 100%;
    padding: 0px 15px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  list-style: none;
  border-radius: 99rem;
  box-sizing: content-box;

  @media (max-width: 925px) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-size: 16px;
  padding: 20px 30px;
  border-radius: 99rem;
  cursor: pointer;
  box-sizing: content-box;

  :hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

const Paragraph = styled.p`
  padding: 32px 64px;
  color: ${(props) => props.theme.colors.light};
  text-align: center;
  max-width: 700px;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 10px;
  animation: pageload3 1s forwards ease-in;
`;

const NavItemOne = styled(NavItem)<StyleProps>`
  color: ${(props) => (props.itemOneActive ? '#25273d' : '#787a9b')};
  background-color: ${(props) => (props.itemOneActive ? 'white' : '#f1f3f4')};
  box-shadow: ${(props) =>
    props.itemOneActive ? 'rgb(37 39 61 / 15%) 0px 1px 6px;' : 'none'};
`;
const NavItemTwo = styled(NavItem)<StyleProps>`
  color: ${(props) => (props.itemTwoActive ? '#25273d' : '#787a9b')};
  background-color: ${(props) => (props.itemTwoActive ? 'white' : 'f1f3f4')};
  box-shadow: ${(props) =>
    props.itemTwoActive ? 'rgb(37 39 61 / 15%) 0px 1px 6px;' : 'none'};
`;
const NavItemThree = styled(NavItem)<StyleProps>`
  color: ${(props) => (props.itemThreeActive ? '#25273d' : '#787a9b')};
  background-color: ${(props) => (props.itemThreeActive ? 'white' : 'f1f3f4')};
  box-shadow: ${(props) =>
    props.itemThreeActive ? 'rgb(37 39 61 / 15%) 0px 1px 6px;' : 'none'};
`;

const NavItemFour = styled(NavItem)<StyleProps>`
  color: ${(props) => (props.itemFourActive ? '#25273d' : '#787a9b')};
  background-color: ${(props) => (props.itemFourActive ? 'white' : 'f1f3f4')};
  box-shadow: ${(props) =>
    props.itemFourActive ? 'rgb(37 39 61 / 15%) 0px 1px 6px;' : 'none'};
`;

const NavDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;

  @media (min-width: 926px) {
    display: none;
  }
`;

const DropdownItem = styled.div`
  font-weight: 400;
  padding: 15px 15px;
  cursor: pointer;

  :hover {
    background-color: #f3f7fa;
  }
`;

const DropDownTitle = styled.div`
  background-color: white;
  border: 1px solid rgb(204, 204, 204);
  padding: 5px;
  padding-left: 15px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
`;

const DownArrowContainer = styled.div`
  position: relative;
`;

const Line = styled.div`
  width: 1px;
  height: 20px;
  background-color: rgb(204, 204, 204);
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const DropDownItems = styled.div`
  border-radius: 4px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  border: 1px solid rgb(204, 204, 204);
  background-color: white;
`;
