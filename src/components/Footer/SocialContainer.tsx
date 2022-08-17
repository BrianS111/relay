import styled from 'styled-components';
import Image from 'next/image';
import twitterblack from '../../images/twitterblack.png';
import discordblack from '../../images/discordblack.png';
import githubblack from '../../images/githubblack.png';
import mirrorblack from '../../images/mirrorblack.png';
import Link from 'next/link';

export default function SocialContainer() {
  return (
    <Container>
      <Link href={'https://twitter.com/relay_eth'} passHref>
        <A target="_blank">
          <TwitterIcon>
            <Image
              width={20}
              height={16}
              src={twitterblack}
              alt="Link to Relay Twitter"
            />
          </TwitterIcon>
        </A>
      </Link>

      <Link href={'https://discord.com/invite/ybRyHA8h'} passHref>
        <A target="_blank">
          <DiscordIcon>
            <Image
              width={24}
              height={18}
              src={discordblack}
              alt="Link to Relay Discord"
            />
          </DiscordIcon>
        </A>
      </Link>
      <Link href={'https://github.com/relaycc'} passHref>
        <A target="_blank">
          <GithubIcon>
            <Image
              height={21}
              width={21}
              src={githubblack}
              alt="Link to Relay Discord"
            />
          </GithubIcon>
        </A>
      </Link>
      <Link href={'https://mirror.xyz/relaycc.eth'} passHref>
        <A target="_blank">
          <MirrorIcon>
            <Image
              height={21}
              width={17}
              src={mirrorblack}
              alt="Link to Relay Mirror"
            />
          </MirrorIcon>
        </A>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 860px) {
    order: 3;
  }
`;

const SocialIcon = styled.div`
  cursor: pointer;
`;
const TwitterIcon = styled(SocialIcon)`
  min-height: 14px;
  min-width: 18px;
`;

const DiscordIcon = styled(SocialIcon)`
  min-height: 23px;
  min-width: 20px;
`;

const GithubIcon = styled(SocialIcon)`
  min-height: 21px;
  min-width: 21px;
`;
const MirrorIcon = styled(SocialIcon)`
  min-height: 21px;
  min-width: 21px;
`;

const A = styled.a`
  text-decoration: none;
`;
