import React from 'react';
import styled from 'styled-components';

export default function UserProfile() {
  return (
    <Container>
      <EnsAvatar></EnsAvatar>
      <EnsInfo>
        <EnsName>seanwbren.eth</EnsName>
        <WalletAddress>12323...12312</WalletAddress>
      </EnsInfo>
    </Container>
  );
}
const EnsAvatar = styled.div`
  height: 160px;
  width: 160px;
  background: #f2faff;
  border-radius: 12px;
  border: 1px solid #dbdbdb;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  border: 1px solid black;
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
