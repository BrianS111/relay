import styled from 'styled-components';

export const TextInput = () => {
  return <Input type="text" placeholder="Select address or ENS name" />;
};

const Input = styled.input`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.fillsTextbox};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #fbfbfb;
  color: ${(props) => props.theme.colors.textSecondary};
  outline: none;

  ::placeholder {
    font-size: 14px;
    font-weight: 450;
    line-height: 17.71px;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
