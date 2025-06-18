import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 350px;
  text-align: center;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const ModalText = styled.p`
  margin-bottom: 1.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ConfirmButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;