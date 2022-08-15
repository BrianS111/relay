import { ChatHeaderAll } from './ChatHeaderAll';

export interface ChatHeaderDarkMenuIconProps {
  leftTitleText: string;
  subText: string;
  onExitClick: () => unknown;
  onMinimizeClick: () => unknown;
  onMenuClick: () => unknown;
}

export const ChatHeaderDarkMenuIcon = ({
  leftTitleText,
  onExitClick,
  onMinimizeClick,
  subText,
}: ChatHeaderDarkMenuIconProps) => {
  return (
    <ChatHeaderAll
      isLeftIcon={true}
      onExitClick={onExitClick}
      onMinimizeClick={onMinimizeClick}
      isMenuIcon={true}
      isDarkMode={true}
      LeftTitleText={leftTitleText}
      subText={subText}
      isMinimizeIcon={true}
    />
  );
};
