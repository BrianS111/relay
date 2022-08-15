import HeroSection from '../components/HeroSection/HeroSection';
import LandingCardsWithNavigation from 'components/LandingCardsWithNav/LandingCardsWithNavigation';
import QuestionSection from 'components/QuestionSection/QuestionSection';
import GetStartedSection from 'components/GetStartedSection/GetStartedSection';
import Subscribe from 'components/Subscribe/Subscribe';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LandingCardsWithNavigation />
      <QuestionSection />
      <GetStartedSection />
      <Subscribe />
    </>
  );
}
