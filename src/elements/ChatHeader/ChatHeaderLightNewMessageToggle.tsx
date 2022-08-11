import { ChatHeaderAll } from './ChatHeaderAll';

interface Props {
  subText: string;
  leftTitleText: string;
  toggleIconLeft: StaticImageData;
  toggleIconRight: StaticImageData;
  onExitClick: () => unknown;
  onMinimizeClick: () => unknown;
}

export const ChatHeaderLightNewMessageToggle = ({
  subText,
  leftTitleText,
  onExitClick,
  onMinimizeClick,
  toggleIconLeft,
  toggleIconRight,
}: Props) => {
  return (
    <ChatHeaderAll
      onMinimizeClick={onMinimizeClick}
      toggleIconLeft={toggleIconLeft}
      toggleIconRight={toggleIconRight}
      onExitClick={onExitClick}
      isMinimizeIcon={true}
      isLeftIcon={false}
      isMenuIcon={false}
      isDarkMode={false}
      subText={subText}
      LeftTitleText={leftTitleText}
    />
  );
};
