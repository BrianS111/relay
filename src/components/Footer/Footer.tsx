import styled from 'styled-components';
import Image from 'next/image';
import blackArrowRight from '../../images/blackArrowRight.png';
import SocialContainer from './SocialContainer';

const black = '#25273d';
const light = '#787a9b';

export default function FooterSubscribeSection() {
  return (
    <Container>
      <SocialContainer />
      <ListContainer>
        <List>
          <ListTitle>About</ListTitle>
          <Ul>
            <Li>Terms</Li>
            <Li>Careers</Li>
            <Li>Privacy</Li>
            <Li>Cookie Policy</Li>
          </Ul>
        </List>
        <List>
          <ListTitle>Resources</ListTitle>
          <Ul>
            <Li>Oracles</Li>
            <Li>Blog</Li>
            <Li>Knowledge Center</Li>
            <Li>Oracles</Li>
          </Ul>
        </List>
        <List>
          <ListTitle>Products</ListTitle>
          <Ul>
            <Li>Multiply</Li>
            <Li>Careers</Li>
            <Li>Privacy</Li>
            <Li>Cookie Policy</Li>
          </Ul>
        </List>
      </ListContainer>
      <ContactContainer>
        <H3>Stay up to date with Oasis.app</H3>
        <Span>Subscribe to the newsletter for Oasis updates</Span>
        <InputContainer>
          <Input placeholder={'Email Address'} />
          <RightContainer>
            <Button>Subscribe</Button>
            <IconContainer>
              <Image
                width={12}
                height={9}
                alt="Submit Email"
                src={blackArrowRight}
              />
            </IconContainer>
          </RightContainer>
        </InputContainer>
      </ContactContainer>
    </Container>
  );
}

const IconContainer = styled.div`
  min-width: 12px;
  min-height: 9px;
  transform: translateX(0px);
  transition: transform 200ms ease;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  height: 300px;
  gap: 15px;

  @media (max-width: 860px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
`;

const H3 = styled.h3`
@media (max-width: 400px) {
  text-align: center;
}
`;

const Span = styled.span`
  color: ${light};
  font-weight: 300;

  @media (max-width: 400px) {
    text-align: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e6e9eb;
  border-radius: 99rem;
  width: 378px;
  padding: 8px 24px;
  justify-content: space-between;
  &:hover {
    ${IconContainer} {
      transform: translateX(5px);
    }
  }

  @media (max-width: 390px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${black};
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Ul = styled.ul`
  color: ${black};
  font-size: 18px;
  font-weight: 600;
  max-width: 100px;
`;

const Li = styled.li`
  font-size: 16px;
  font-weight: 300;
  color: ${black};
  margin-bottom: 30px;
  cursor: pointer;
  text-align: center;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 860px) {
    order: 1;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 860px) {
    order: 2;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 15px !important;
`;
const ListTitle = styled.h3`
  color: ${black};
  text-align: center;
`;
