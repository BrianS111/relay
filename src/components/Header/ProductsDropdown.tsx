import styled from 'styled-components'
import Link from 'next/link'

export default function ProductsDropdown() {
  return (
    <Container>
      <Ul>
        <Link href={'https://docs.relay.cc/relay/relay-home'} passHref>
          <A target="_blank">
            <Li>Relay</Li>
          </A>
        </Link>
        <Link href={'https://docs.relay.cc/relay/relay-receiver'} passHref>
          <A target="_blank">
            <Li>Receiver</Li>
          </A>
        </Link>
        <Link href={'https://docs.relay.cc/relay/relay-bridge'} passHref>
          <A target="_blank">
            <Li>Bridge</Li>
          </A>
        </Link>
        <Link href={'https://docs.relay.cc/relay/relay-broadcast'} passHref>
          <A target="_blank">
            <Li>Pro</Li>
          </A>
        </Link>
      </Ul>
    </Container>
  );
}

const Container = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  border-radius: 8px;
  position: absolute;
  background-color: white;
  top: 40px;
`;

const Ul = styled.ul`
display: flex;
flex-direction: column;
`

const Li = styled.li`
  list-style-type: none;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 32px 12px 16px;
  cursor: pointer;
  color: ${props => props.theme.colors.black};
 
 :hover {
  color: ${props => props.theme.colors.light};
 }
`

const A = styled.a`
  text-decoration: none;
`