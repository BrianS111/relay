import styled from 'styled-components';

interface Props {
  fromMe: boolean;
}

export default function conversationBubble({ fromMe }: Props) {
  return (
    <Container fromMe={fromMe}>
      <Message fromMe={fromMe}></Message>
      <Timestamp></Timestamp>
    </Container>
  );
}

const Container = styled.div<Props>`
  background-color: ${(props) => (props.fromMe ? '#5A46C6' : '#F8F7FF')};
  padding: 12px 16px;
`;

const Message = styled.p<Props>`
  color: ${(props) => (props.fromMe ? 'white' : '##060028')};
  font-size: 14px;
  font-weight: 450;
`;
const Timestamp = styled.span<Props>`
  color: ${(props) => (props.fromMe ? '#CFC6FF' : '#4E4773')};
  margin-top: 8px;
  font-weight: 450;
  font-size: 10px;
  border-radius: ${(props) => props.fromMe ? '16px 16px 4px 16px' : '16px 16px 16px 4px;'};
`;