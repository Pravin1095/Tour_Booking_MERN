import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
`;

export const Card = styled.div`
  background: #fff;
  padding: 2rem 2.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  width: 380px;
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  button {
    flex: 1;
    padding: 0.7rem;
    background: #f4f4f4;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    margin: 0 5px;
    transition: all 0.3s ease;

    &.active {
      background: #667eea;
      color: white;
      font-weight: bold;
    }

    &:hover {
      background: #667eea;
      color: white;
    }
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #764ba2;
  }
  `