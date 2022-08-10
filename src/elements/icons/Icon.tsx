import styled from 'styled-components';
import alert from './alert.png';
import Image from 'next/image';

interface AlertProps {
  onClick?: () => null;
  onMouseEnter?: () => null;
  onMouseLeave?: () => null;
  url?: string;
}

export default function Alert({
  onClick,
  onMouseEnter,
  onMouseLeave,
}: AlertProps) {
  return (
    <Icon
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      height={19}
      width={21}
      src={alert.src}
      alt="icon"
    />
  );
}

const Icon = styled(Image)`
  background: green;
`;
