import { ExternalProfiles } from 'elements/externalProfiles/ExternalProfiles';
import Icon from './emptyprofile.png';
import styled from 'styled-components';


export const Builder = () => {
  return (
    <div>
      <Container>
        <ExternalProfiles bottomText='@username' isVerified={true} icon={Icon} title="Phaver"  />
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 120px;
  width: 254px;
`

