import React from 'react';
import styled from 'styled-components';
import ProfileNft from './ProfileNft';
import { useFetchOwnedNFTs } from 'hooks';

interface ProfileNftSectionProps {
  peerAddress?: string;
  peerEnsName?: any;
}

export default function ProfileNftSection({
  peerAddress,
  peerEnsName,
}: ProfileNftSectionProps) {


  const { isLoading, isError, nfts } =
    useFetchOwnedNFTs(peerAddress);

  if (isLoading) {
    console.log('load');
    return <div>Load</div>;
  }
  if (isError) {
    console.log('error');
    return <div>error</div>;
  }
  if (!nfts) {
    console.log('nonfts');
    return <div>nonfts</div>;
  }

  if (!isLoading && !isError && nfts) {
    return (
      <Container>
        Image
        <SectionTitle>NFT Collection</SectionTitle>
        <NftContainer>
          {nfts?.ownedNfts.map((e, index) => {
            if (index < 7) {
              return (
                <ProfileNft key={index} pic={e.metadata.image} title={e.title} />
              )
            }
          })}
        </NftContainer>
        <Button>View More</Button>
      </Container>
    )
  }
  null
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: #1d1d1d;
  margin-bottom: 20px;
`;

const NftContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
`;

const Button = styled.button`
  border: 1px solid black;
  font-weight: 500;
  font-size: 12px;
  width: max-content;
  border-radius: 12px;
  padding: 12px 16px;
  background-color: #f8f7ff;
  align-self: center;
  margin-top: 40px;
  cursor: pointer;
`;
