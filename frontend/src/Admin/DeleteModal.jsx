import React from 'react';
import { ButtonGroup, CancelButton, ConfirmButton, ModalBox, ModalOverlay, ModalText, ModalTitle } from './DeleteModal.styles';


const DeleteModal = ({ onConfirm, onCancel, itemName = '' }) => {
  if (!itemName) return null;

  return (
    <ModalOverlay>
      <ModalBox>
        <ModalTitle>Confirm Deletion</ModalTitle>
        <ModalText>Are you sure you want to delete <strong>{itemName.name}</strong>?</ModalText>
        <ButtonGroup>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <ConfirmButton onClick={()=>onConfirm(itemName)}>Delete</ConfirmButton>
        </ButtonGroup>
      </ModalBox>
    </ModalOverlay>
  );
};

export default DeleteModal;
