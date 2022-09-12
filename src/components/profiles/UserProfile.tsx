import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar'


interface UserProfileProps {
  peerAddress: string;
  peerEnsName?: string;
}

export default function UserProfile({peerAddress, peerEnsName}: UserProfileProps) {
  return (
    <Container>
      <EnsAvatar>
        <Avatar address={peerAddress} size='full' />
      </EnsAvatar>
      <EnsInfo>
        <EnsName>{peerEnsName ? peerEnsName : "" }</EnsName>
        <WalletAddress>{peerAddress}</WalletAddress>
      </EnsInfo>
    </Container>
  );
}
const EnsAvatar = styled.div`
  height: 160px;
  width: 160px;
  background: #c3e3f7;
  border-radius: 50%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const EnsName = styled.h1`
  font-weight: 600;
  font-size: 24px;
`;
const WalletAddress = styled.span`
  font-weight: 500;
  color: #0052ff;
`;

const EnsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500px;
  font-size: 14px;
`;
