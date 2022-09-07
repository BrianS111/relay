import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import RelayLogo from '../../../public/assets/images/RelayLogoWhiteBg.png';

export default function ProfileHeader() {
  return (
    <Header>
      <GoHomeContainer>
        <Image height={27} width={29} alt="Home" src={RelayLogo} />
        <RelayName>Relay</RelayName>
      </GoHomeContainer>
      <EnsContainer>
        <Logo></Logo>
        <Name>seanwbren.eth</Name>
      </EnsContainer>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 93px;
`;
const RelayName = styled.h2`
  font-weight: 600;
`;

const GoHomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 30px;
`;

const EnsContainer = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 5px;
  border-radius: 8px;
`;

const Name = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const Logo = styled.div`
  height: 28px;
  width: 28px;
  background: rgb(0, 208, 255, 0.3);
  border-radius: 4px;
`;
