import styled from 'styled-components';
import CardContainer from './CardContainer';
import { useState } from 'react';
const black = '#25273d';
const light = '#787a9b';

export default function LandingCardsWithNavigation() {
  const [itemOneActive, setItemOneActive] = useState(true);
  const [itemTwoActive, setItemTwoActive] = useState(false);
  const [itemThreeActive, setItemThreeActive] = useState(false);

  const handleItemOneClick = () => {
    setItemTwoActive(false);
    setItemThreeActive(false);
    setItemOneActive(true);
  };
  const handleItemTwoClick = () => {
    setItemTwoActive(true);
    setItemThreeActive(false);
    setItemOneActive(false);
  };

  const handleItemThreeClick = () => {
    setItemTwoActive(false);
    setItemThreeActive(true);
    setItemOneActive(false);
  };

  return (
    <Container>
      <Navbar>
        <NavItems>
          <NavItemOne
            itemOneActive={itemOneActive}
            onClick={handleItemOneClick}>
            Multiply on Oasis
          </NavItemOne>
          <NavItemTwo
            itemTwoActive={itemTwoActive}
            onClick={handleItemTwoClick}>
            Borrow on Oasis
          </NavItemTwo>
          <NavItemThree
            itemThreeActive={itemThreeActive}
            onClick={handleItemThreeClick}>
            Earn on Oasis
          </NavItemThree>
        </NavItems>
      </Navbar>
      <Paragraph>
        Multiply your exposure to your favorite crypto assets. Browse our
        featured products here. See all Multiply collateral types
      </Paragraph>
      <CardContainer />
    </Container>
  );
}

interface StyleProps {
  itemOneActive?: boolean;
  itemTwoActive?: boolean;
  itemThreeActive?: boolean;
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

const Navbar = styled.nav``;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  list-style: none;
  border-radius: 99rem;
  box-sizing: content-box;
`;

const NavItem = styled.li`
  color: ${light};
  font-size: 16px;
  padding: 20px 30px;
  border-radius: 99rem;
  cursor: pointer;
  box-sizing: content-box;

  :hover {
    color: ${black};
  }
`;

const Paragraph = styled.p`
  padding: 32px 64px;
  color: ${light};
  text-align: center;
  max-width: 700px;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 10px;
`;

const NavItemOne = styled(NavItem)<StyleProps>`
  background-color: ${(props) => (props.itemOneActive ? 'white' : '#f1f3f4')};
  box-shadow: ${(props) =>
    props.itemOneActive ? 'rgb(37 39 61 / 15%) 0px 1px 6px;' : 'none'};
`;
const NavItemTwo = styled(NavItem)<StyleProps>`
  background-color: ${(props) => (props.itemTwoActive ? 'white' : 'f1f3f4')};
  box-shadow: ${(props) =>
    props.itemTwoActive ? 'rgb(37 39 61 / 15%) 0px 1px 6px;' : 'none'};
`;
const NavItemThree = styled(NavItem)<StyleProps>`
  background-color: ${(props) => (props.itemThreeActive ? 'white' : 'f1f3f4')};
  box-shadow: ${(props) =>
    props.itemThreeActive ? 'rgb(37 39 61 / 15%) 0px 1px 6px;' : 'none'};
`;
