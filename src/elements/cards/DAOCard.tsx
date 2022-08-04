import styled from 'styled-components';
import Image from 'next/image';
import externalWindowBlue from '../../../public/assets/images/externalWindowBlue.png';
import Link from 'next/link';

interface DAOCardProps {
  title: string;
  daoWebsite: string;
  daoLogo: StaticImageData;
}

export const DAOCard = ({ title, daoWebsite, daoLogo }: DAOCardProps) => {
  return (
    <Container>
      <FlexRowGroup>
        <LeftLogoContainer>
          <Image
            height={ContainerHeight}
            width={ContainerHeight}
            src={daoLogo}
            alt={`${title} logo`}
          />
        </LeftLogoContainer>
        <Title>{title}</Title>
      </FlexRowGroup>
      <Link href={daoWebsite} passHref>
        <RightIconLink target="_blank">
          <RightIcon
            height={18}
            width={18}
            src={externalWindowBlue}
            alt={`Open external window to ${title}`}
          />
        </RightIconLink>
      </Link>
    </Container>
  );
};

const ContainerHeight = '48px';
// Keep this aligned with the width of the right icon and the sum of left and right margin of the icon
const RightIconSpace = '48px';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  height: ${ContainerHeight};
  box-sizing: content-box;
`;

const Title = styled.h3`
  color: #2b2b2b;
  font-weight: 600;
  font-size: 14px;
  line-height: 19.6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const RightIcon = styled(Image)`
  cursor: pointer;
`;

const LeftLogoContainer = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  min-height: ${ContainerHeight};
  min-width: ${ContainerHeight};
`;

const RightIconLink = styled.a`
  margin: 0px 15px;
  min-height: 18px;
  min-width: 18px;
`;

const FlexRowGroup = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - ${RightIconSpace});
`;
