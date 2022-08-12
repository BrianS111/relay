import styled from 'styled-components';
import Logo from '../../images/logo.svg';
import Image from 'next/image';
import SocialContainer from './SocialContainer';
import FooterUL from './FooterUL';
import FooterSubscribeSection from './FooterSubscribeSection';

export default function Footer() {
  const FooterListInfo = [
    {
      Title: 'About',
      Items: [
        {
          ItemName: 'Team',
        },
        {
          ItemName: 'Careers',
        },
        {
          ItemName: 'Privacy',
        },
        {
          ItemName: 'Cookie Policy',
        },
        {
          ItemName: 'Terms',
        },
        {
          ItemName: 'Contact',
        },
      ],
    },
    {
      Title: 'Resources',
      Items: [
        {
          ItemName: 'Blog',
        },
        {
          ItemName: 'FAQ',
        },
        {
          ItemName: 'Knowledge Centre',
        },
        {
          ItemName: 'Oracles',
        },
        {
          ItemName: 'Referrals',
        }
      ]
    },
    {
      Title: 'Products',
      Items: [
        {
          ItemName: 'Dai Wallet',
        },
        {
          ItemName: 'Borrow',
        },
        {
          ItemName: 'Multiply',
        },
      ]
    }
  ];
  return (
    <Container>
      <LogoSocialContainer>
        <Logo>
          <Image width={128} height={34} src={Logo} alt="panel Logo" />
        </Logo>
        <SocialContainer />
      </LogoSocialContainer>
        {FooterListInfo.map((e, index) => {
            return <FooterUL key={index} Title={e.Title} Items={e.Items} />
        })}

      <FooterSubscribeSection />
    </Container>
  );
}
const Container = styled.section``;

const LogoSocialContainer = styled.div``;
