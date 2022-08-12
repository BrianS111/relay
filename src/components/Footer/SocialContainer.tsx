import styled from 'styled-components'
import Image from 'next/image'
import twitterblack from '../../images/twitterblack.png'
import discordblack from '../../images/discordblack.png'
import githubblack from '../../images/githubblack.png'

export default function SocialContainer() {
  return (
    <Container>
      <SocialIcon>
        <Image
        width={18}
        height={14}
        src={twitterblack}
        alt="twitter"
        />
      </SocialIcon>
      <SocialIcon>
        <Image
        width={20}
        height={23}
        alt="Discord"
        src={discordblack}
        />
      </SocialIcon>
      <SocialIcon>
        <Image 
          height={21}
          width={21}
          src={githubblack}
          alt="github"
        />
      </SocialIcon>
    </Container>
  )
}
const Container = styled.div`
  
`

const SocialIcon = styled.div`
  
`