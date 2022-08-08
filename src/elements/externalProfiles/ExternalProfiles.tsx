import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import GreenBadge from '../../../public/assets/images/greenbadge.png';

interface ExternalProfilesProps {
  title: string;
  icon: StaticImageData;
  bottomText: string;
  isVerified: boolean;
  onClickCard?: () => unknown;
  onClickButton?: () => unknown;
}

export const ExternalProfiles = ({
  title,
  icon,
  bottomText,
  isVerified,
  onClickCard,
  onClickButton,
}: ExternalProfilesProps) => {
  return (
    <Container
      onClick={onClickCard}
      style={{ cursor: onClickCard == null ? 'default' : 'pointer' }}>
      <TopHalf>
        <TopImageContainer>
          <TopImage height={40} width={40} alt={`${title} logo`} src={icon} />
        </TopImageContainer>
        <Title>{title}</Title>
      </TopHalf>
      <BottomHalf isVerified={isVerified}>
        <BottomText isVerified={isVerified}>{bottomText}</BottomText>
        <RightBadgeContainer isVerified={isVerified}>
          <Image
            width={18}
            height={22}
            alt="Verification badge"
            src={GreenBadge}
          />
        </RightBadgeContainer>
        <BottomButton
          style={{ cursor: onClickButton == null ? 'default' : 'pointer' }}
          onClick={onClickButton}
          isVerified={isVerified}>
          Verify Now
        </BottomButton>
      </BottomHalf>
    </Container>
  );
};

interface isVerifiedProps {
  isVerified: boolean;
}

const Container = styled.div`
  border: 1px solid #dbdbdb;
  padding: 0px 16px;
  border-radius: 16px;
`;

const TopHalf = styled.div`
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  padding-top: 16px;
`;

const Title = styled.h3`
  color: #2b2b2b;
  font-weight: 500;
  line-height: 16.94px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
`;

const BottomHalf = styled.div<isVerifiedProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isVerified ? 'space-between' : 'flex-end'};
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 11px;
`;

const RightBadgeContainer = styled.div<isVerifiedProps>`
  display: ${(props) => (props.isVerified ? 'block' : 'none')};
`;

const BottomText = styled.span<isVerifiedProps>`
  color: #5b5b5b;
  font-weight: 500;
  font-size: 12px;
  display: ${(props) => (props.isVerified ? 'block' : 'none')};
`;

const TopImageContainer = styled.div`
  min-height: 22px;
  min-width: 18px;
  margin-right: 8px;
`;

const TopImage = styled(Image)`
  border-radius: 50%;
`;

const BottomButton = styled.button<isVerifiedProps>`
  background-color: #5a46c6;
  color: white;
  height: 33px;
  width: 92px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  display: ${(props) => (props.isVerified ? 'none' : 'block')};
  border: 1px solid #dbdbdb;
`;
