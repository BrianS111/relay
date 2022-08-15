import styled from 'styled-components';
import HeroSection from '../components/HeroSection/HeroSection';
import Header from '../components/Header/Header';
import LandingCardsWithNavigation from 'components/LandingCardsWithNav/LandingCardsWithNavigation';
import QuestionSection from 'components/QuestionSection/QuestionSection';
import GetStartedSection from 'components/GetStartedSection/GetStartedSection';
import Subscribe from 'components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';

const black = '#25273d';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LandingCardsWithNavigation />
      <QuestionSection />
      <GetStartedSection />
      <Subscribe />
      <Footer />
    </>
  );
}