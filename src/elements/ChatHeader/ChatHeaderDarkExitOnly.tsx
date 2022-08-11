import { ChatHeaderAll } from './ChatHeaderAll';

interface Props {
  badgeCount: string;
  leftTitleText: string;
  onExitClick: () => unknown;
}

export const ChatHeaderDarkExitOnly = ({
  leftTitleText,
  onExitClick,
}: Props) => {
  return (
    <ChatHeaderAll
      isLeftIcon={false}
      onExitClick={onExitClick}
      isMenuIcon={false}
      isDarkMode={true}
      LeftTitleText={leftTitleText}
    />
  );
};
