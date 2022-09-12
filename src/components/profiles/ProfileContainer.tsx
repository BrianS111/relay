import React from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import Web3Identity from './Web3Identity';
import ProfileNftSection from './ProfileNftSection';

interface ProfileContainerProps {
  peerAddress: string;
  peerEnsName?: string;
}

export default function ProfileContainer({
  peerAddress,
  peerEnsName,
}: ProfileContainerProps) {
  return (
    <Container>
      <UserProfile peerEnsName={peerEnsName} peerAddress={peerAddress} />
      <Web3Identity />
      <ProfileNftSection peerEnsName={peerEnsName} peerAddress={peerAddress} />
    </Container>
  );
}

const Container = styled.div`
  border-left: 1px dashed #888;
  border-right: 1px dashed #888;
  width: 100%;
  height: 100%;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
