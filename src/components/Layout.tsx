import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout(props: any) {
  return (
    <FullContainer>
      <Header />
      {props.children}
      <Footer />
    </FullContainer>
  );
}

const FullContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
