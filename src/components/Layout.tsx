import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BackgroundSvg from 'images/BackgroundSvg';

export default function Layout(props: any) {
  return (
    <FullContainer>
      <BackgroundSvgContainer>
        <BackgroundSvg />
      </BackgroundSvgContainer>
      <Header />
      {props.children}
      <Footer />
    </FullContainer>
  );
}

const FullContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BackgroundSvgContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -100px;
  width: 100%;
  z-index: -10;
  overflow: hidden;
`;
