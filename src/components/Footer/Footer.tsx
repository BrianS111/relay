import styled from 'styled-components';
import SocialContainer from './SocialContainer';
import Link from 'next/link';

export default function FooterSubscribeSection() {
  return (
    <Container>
      <SocialContainer />
      <ListContainer>
        <List>
          <ListTitle>About</ListTitle>
          <Ul>
            <Link href="https://realy.cc/team" passHref>
              <A target="_blank">
                <Li>Careers</Li>
              </A>
            </Link>
            <Link href="https://realy.cc/team" passHref>
              <A target="_blank">
                <Li>Privacy</Li>
              </A>
            </Link>
          </Ul>
        </List>
        <List>
          <ListTitle>Resources</ListTitle>
          <Ul>
            <Link href="https://mirror.xyz/relaycc.eth" passHref>
              <A target="_blank">
                <Li>Mirror</Li>
              </A>
            </Link>
            <Link href=" https://docs.relay.cc" passHref>
              <A target="_blank">
                <Li>Docs</Li>
              </A>
            </Link>
            <Link href="https://xmtp.com/" passHref>
              <A target="_blank">
                <Li>XMTP</Li>
              </A>
            </Link>
          </Ul>
        </List>
        <List>
          <ListTitle>Products</ListTitle>
          <Ul>
            <Link href="https://docs.relay.cc/relay/relay-home" passHref>
              <A target="_blank">
                <Li>Relay</Li>
              </A>
            </Link>
            <Link href="https://docs.relay.cc/relay/relay-receiver" passHref>
              <A target="_blank">
                <Li>Receiver</Li>
              </A>
            </Link>
            <Link href="https://docs.relay.cc/relay/relay-bridge" passHref>
              <A target="_blank">
                <Li>Bridge</Li>
              </A>
            </Link>
            <Link href="https://docs.relay.cc/relay/relay-broadcast" passHref>
              <A target="_blank">
                <Li>Pro</Li>
              </A>
            </Link>
          </Ul>
        </List>
      </ListContainer>
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
  margin-top: 150px;

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
  color: ${(props) => props.theme.colors.light};
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
  background-color: white;
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
  color: ${(props) => props.theme.colors.black};
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Ul = styled.ul`
  color: ${(props) => props.theme.colors.black};
  font-size: 18px;
  font-weight: 600;
`;

const Li = styled.li`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.black};
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
  color: ${(props) => props.theme.colors.black};
  text-align: center;
`;

const A = styled.a`
  text-decoration: none;
`