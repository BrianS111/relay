import { FunctionComponent, ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Image from 'next/image';

export interface CreateGroupModalProps {
  isOpen: boolean;
  onRequestClose: () => unknown;
  onCreateGroup: (peerAddresses: string[]) => unknown;
}

export const CreateGroupModal: FunctionComponent<CreateGroupModalProps> = ({
  isOpen,
  onRequestClose,
  onCreateGroup,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [peerAddresses, setPeerAddresses] = useState<Set<string>>(new Set());

  const addPeerAddress = (peerAddress: string) => {
    setPeerAddresses((prev) => {
      const result = new Set(prev);
      result.add(peerAddress);
      return result;
    });
  };

  const removePeerAddress = (peerAddress: string) => {
    setPeerAddresses((prev) => {
      const result = new Set(prev);
      result.delete(peerAddress);
      return result;
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}>
      <ModalHeader>
        <ModalTitle>Create a Group</ModalTitle>
        <ModalClose>
          <Image
            src="/assets/images/MobileX.svg"
            alt="plus"
            height={16}
            width={16}
          />
        </ModalClose>
      </ModalHeader>
      <ModalFormTitle>ADD ADDRESSES</ModalFormTitle>

      <ModalForm
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          inputValue.length > 0 && addPeerAddress(inputValue);
          setInputValue('');
        }}>
        <ModalFormItem>
          <AddAddressInput
            // type="submit"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              console.log(e);
              console.log('changed');
              setInputValue(e.target.value);
            }}
            placeholder="Enter an address..."
            spellCheck={false}
          />
          <Image
            src="/assets/images/plus-grey.svg"
            alt="plus"
            height={16}
            width={16}
          />
        </ModalFormItem>
      </ModalForm>
      {peerAddresses.size > 0 || (
        <AtLeastOneAddress>Enter at least one address...</AtLeastOneAddress>
      )}

      {peerAddresses.size > 0 && (
        <AddressesList>
          {Array.from(peerAddresses)
            .reverse()
            .map((peerAddress) => {
              return (
                <ModalFormItem key={peerAddress}>
                  <AddressItem>{peerAddress}</AddressItem>
                  <RemoveAddress onClick={() => removePeerAddress(peerAddress)}>
                    <Image
                      src="/assets/images/MobileTrashCan.svg"
                      alt="plus"
                      height={16}
                      width={16}
                    />
                  </RemoveAddress>
                </ModalFormItem>
              );
            })}
        </AddressesList>
      )}
      <Buttons>
        <ModalButton
          onClick={() => onCreateGroup(Array.from(peerAddresses))}
          disabled={peerAddresses.size < 1}>
          Create Group
        </ModalButton>
        <ModalCancel onClick={() => null}>Cancel</ModalCancel>
      </Buttons>
    </Modal>
  );
};

const AtLeastOneAddress = styled.h2`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  text-align: center;
  min-height: 23vh;
`;

const AddressesList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 23vh;
  max-height: 50vh;
  overflow-y: scroll;
`;

const RemoveAddress = styled.button`
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  background: none;
  cursor: pointer;
`;

const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  width: 467px;
  background: #100817;
  border: 2px solid #402b5b;
  border-radius: 8px;
`;

const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ModalTitle = styled.h3`
  height: 24px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 24px;
  color: #ffffff;
  margin-left: auto;
`;

const ModalClose = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  margin-left: auto;
`;

const ModalForm = styled.form``;

const ModalFormItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  background: rgba(23, 15, 38, 0.5);
  border-radius: 8px;
  margin: 12px 0;
  margin-bottom: 12px;
  color: #75668c;
  padding: 12px 16px;
`;

const AddAddressInput = styled.input`
  outline: none;
  border: none;
  background: none;
  color: #75668c;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  ::placeholder {
    color: #75668c;
  }
`;

const ModalFormTitle = styled.h1`
  height: 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #75668c;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const AddressItem = styled.h6`
  color: #75668c;
  font-size: 14px;
`;

const ModalButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  height: 3rem;
  background: #271d47;
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  :disabled {
    color: #75668c;
    background: #31243c;
    cursor: default;
  }
  margin-bottom: 12px;
`;

const ModalCancel = styled(ModalButton)`
  background: none;
  border: 2px solid #1c1026;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  width: 100%;
  margin-bottom: -12px;
`;
