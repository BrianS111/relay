import { ChatHeaderAll } from './ChatHeaderAll';

export interface ChatHeaderLightWithToggleProps {
  subText: string;
  leftTitleText: string;
  toggleIconLeft: StaticImageData;
  toggleIconRight: StaticImageData;
  onExitClick: () => unknown;
  onMinimizeClick: () => unknown;
}

export const ChatHeaderLightWithToggle = ({
  subText,
  leftTitleText,
  onExitClick,
  onMinimizeClick,
  toggleIconLeft,
  toggleIconRight,
}: ChatHeaderLightWithToggleProps) => {
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
