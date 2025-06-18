import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
`;

export const Card = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem;
`;

export const Description = styled.p`
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  color: #555;
`;

export const InfoRow = styled.div`
  font-size: 0.9rem;
  margin: 0.25rem 0;
`;

export const ButtonRow = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${(props) => (props.danger ? '#e74c3c' : '#3498db')};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.danger ? '#c0392b' : '#2980b9')};
  }
`;
