import HeroSection from '../components/HeroSection/HeroSection';
import LandingCardsWithNavigation from 'components/LandingCardsWithNav/LandingCardsWithNavigation';
import QuestionSection from 'components/QuestionSection/QuestionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LandingCardsWithNavigation />
      <QuestionSection />
    </>
  );
}
