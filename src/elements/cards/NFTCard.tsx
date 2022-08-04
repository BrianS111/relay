import styled from 'styled-components';
import externalWindowBlue from '../../../public/assets/images/externalWindowBlue.png';

import Image from 'next/image';
import Link from 'next/link';

interface NFTCardProps {
  title: string;
  nftWebsite: string;
  nftLogo: StaticImageData;
}

export const NFTCard = ({ title, nftWebsite, nftLogo }: NFTCardProps) => {
  return (
    <Container>
      <ImageContainer>
        <TopLogo layout="fill" alt="yay" src={nftLogo} />
      </ImageContainer>
      <BottomLabel>
        <Title>{title}</Title>
        <Link href={nftWebsite} passHref>
          <RightIconLink target="_blank">
            <Image
              height={18}
              width={18}
              src={externalWindowBlue}
              alt={`Open external window to ${title}`}
            />
          </RightIconLink>
        </Link>
      </BottomLabel>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 1px transparent;
  padding-bottom: 10px;
  height: 100%;
`;

const Title = styled.h3`
  color: #2b2b2b;
  font-weight: 600;
  font-size: 14px;
  line-height: 19.6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 80%;
`;

const BottomLabel = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 15px;
  padding-bottom: 0px;
  width: 100%;
`;

const RightIconLink = styled.a`
  margin-left: 15px;
  min-height: 18px;
  min-width: 18px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-radius: 12px;
`;

const TopLogo = styled(Image)`
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
