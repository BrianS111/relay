import { ReactChildren } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactChildren;
}

export const ChatComponent = (props: Props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.fillsBackground};
`;
