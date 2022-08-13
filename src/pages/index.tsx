import styled from 'styled-components';
import HeroSection from '../components/HeroSection/HeroSection';
import Header from '../components/Header/Header';
import LandingCardsWithNavigation from 'components/LandingCardsWithNav/LandingCardsWithNavigation';
import QuestionSection from 'components/QuestionSection/QuestionSection';
import GetStartedSection from 'components/GetStartedSection/GetStartedSection';
import Subscribe from 'components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <FullContainer>
      <Header />
      <HeroSection />
      <LandingCardsWithNavigation />
      <QuestionSection />
      <GetStartedSection />
      <Subscribe />
      <Footer />
    </FullContainer>
  );
}

const FullContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
