import styled, {css} from "styled-components";

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 30px 40px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #2c3e50;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
`;

export const ButtonContainer = styled.div`
display : flex;
flex-direction : row;
gap : 8px;
`
export const CancelButton = styled.button`
background-color:white;
  color: black;
  cursor: pointer;
`

export const Button = styled.button`
 ${({ fromEdit }) => !fromEdit && css`
    width: 100%;
  `};
  
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;