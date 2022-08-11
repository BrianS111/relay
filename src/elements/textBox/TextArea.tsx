import styled from 'styled-components';

export const TextArea = () => {
  return (
    <Container>
      <Input placeholder="Write message here..." />
    </Container>
  );
};

const Input = styled.textarea`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.fillsTextbox};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #fbfbfb;
  color: ${(props) => props.theme.colors.textSecondary};
  outline: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  resize: none;

  ::placeholder {
    font-size: 14px;
    font-weight: 450;
    line-height: 17.71px;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const Container = styled.div`
  height: 500px;
  width: 500px;
`;
