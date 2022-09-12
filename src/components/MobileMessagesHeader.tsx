import styled from 'styled-components';
import ArrowLeftWhite from '../../public/assets/images/ArrowLeftDark.svg';
import MobileFixedHeader from './MobileFixedHeader';
import Image from 'next/image';
import useCopyClipboard from 'hooks/useCopyClipboard';
interface MobileMessageHeaderProps {
  titleText: string;
  onMenuClick: () => unknown;
  onClickBack: () => unknown;
  handleProfileToggle?: () => unknown;
  showProfile?: boolean
}

export default function MobileMessagesHeader({
  titleText,
  onMenuClick,
  onClickBack,
  handleProfileToggle,
  showProfile

}: MobileMessageHeaderProps) {
  const [isCopied, doCopy] = useCopyClipboard();

  return (
    <MobileFixedHeader>
      <Menu
        width={30}
        height={30}
        src={'/assets/images/MobileDarkHamburgerMenu.svg'}
        onClick={onMenuClick}
      />
      <UserInfo>
        <UserDisplay>
          <NameAndSvg>
            <Name>{titleText}</Name>
          </NameAndSvg>
          <LinkContainer>
              <LinkItem onClick={handleProfileToggle}>{showProfile? 'Back to conversation' : 'Profile'} </LinkItem>
            <LinkItem onClick={() => doCopy(titleText)}>
              {isCopied ? 'Copied!' : 'Copy Address'}
            </LinkItem>
          </LinkContainer>
        </UserDisplay>
      </UserInfo>
      <GoBack
        width={20}
        height={20}
        src={ArrowLeftWhite}
        onClick={onClickBack}
      />
    </MobileFixedHeader>
  );
}

const LinkContainer = styled.ul`
  position: absolute;
  align-items: center;
  align-items: center;
  gap: 10px;
  display: flex;
  font-size: 14px;
  padding: 0px 10px;
  bottom: -20px;
`;

const LinkItem = styled.li`
  cursor: pointer;
  padding: 5px;
  border-radius: 16px;
  background-color: transparent;
  transform: scale(1);
  transition: background-color 300ms, scale 300ms;

  :hover {
    transform: scale(1.1);
    background-color: rgb(90, 70, 198, 0.2);
  }
`;

const UserInfo = styled.div``;

const UserDisplay = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  color: #252727;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
  position: relative;
  cursor: pointer;
  padding: 5px 10px;
  min-width: 300px;
`;

const GoBack = styled(Image)`
  cursor: pointer;
`;

const Menu = styled(Image)`
  cursor: pointer;
`;

const NameAndSvg = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.h2`
  font-size: 24px;
  padding: 10px;
`;
