import { NFTCard } from 'elements/cards/NFTCard';
import Prof from './NFT.png';
import styled from 'styled-components';

export const Builder = () => {
  return (
    <div>
      <Container>
        <NFTCard
          nftLogo={Prof}
          nftWebsite="https://gnc.com"
          title="Azuki #8125"
        />
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 308px;
  width: 256px;
`

