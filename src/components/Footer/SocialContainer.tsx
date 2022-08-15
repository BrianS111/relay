import styled from 'styled-components';
import Image from 'next/image';
import twitterblack from '../../images/twitterblack.png';
import discordblack from '../../images/discordblack.png';
import githubblack from '../../images/githubblack.png';

export default function SocialContainer() {
  return (
    <Container>
      <TwitterIcon>
        <Image width={20} height={16} src={twitterblack} alt="twitter" />
      </TwitterIcon>
      <DiscordIcon>
        <Image width={24} height={18} alt="Discord" src={discordblack} />
      </DiscordIcon>
      <GithubIcon>
        <Image height={21} width={21} src={githubblack} alt="github" />
      </GithubIcon>
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
