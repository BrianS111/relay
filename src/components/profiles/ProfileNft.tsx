import React from 'react';
import styled from 'styled-components';
import NewWindowBlue from '../../../public/assets/images/NewWindowBlue.png';
import Image from 'next/image'


interface ProfileNftProps {
  title?: any;
  pic?: any;
}

export default function ProfileNft({title, pic}: ProfileNftProps) {
  console.log(pic + " newest")
  return (
    <Container>
      <NftLogo src={pic} />
      <Footer>
        <Title>{title}</Title>
        <IconContainer>
          <NewWindowIcon
            height={18}
            width={18}
            src={NewWindowBlue}></NewWindowIcon>
        </IconContainer>
      </Footer>
    </Container>
  );
}

interface styleProps {
  pic: string
}

const NftLogo = styled.img`
  height: 200px;
  width: 200px;
  background-image: url(pic);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px
`;

const Container = styled.div`
  border: 1px solid black;
  width: 254px;
  border-radius: 12px;
`;

const Footer = styled.div`
  padding: 14px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #2b2b2b;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 6px;
`;

const NewWindowIcon = styled(Image)`
  cursor: pointer;
`;

const IconContainer = styled.div`
  min-height: 18px;
  min-width: 18px;
`;
