import { ChatHeaderAll } from './ChatHeaderAll';

interface Props {
  badgeCount: string;
  leftTitleText: string;
  onExitClick: () => unknown;
}

export const ChatHeaderDarkWithBadgeCount = ({
  leftTitleText,
  onExitClick,
  badgeCount,
}: Props) => {
  return (
    <ChatHeaderAll
      badgeCount={badgeCount}
      isLeftIcon={false}
      onExitClick={onExitClick}
      isMenuIcon={false}
      isDarkMode={true}
      LeftTitleText={leftTitleText}
    />
  );
};
