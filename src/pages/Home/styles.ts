import { styled } from "styled-components"

export const HomeContainer = styled.div`
  flex: 0 1 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
 
  button {
        background: ${(props) => props.theme['secundary-color']};
        color: ${(props) => props.theme['white']};
        border: 0;
        outline: none;
        border-radius: 8px;
        width: 100%;
        height: 3.125rem;
        font-size: 1.25rem;
        font-weight: 700;
        cursor: pointer;
    }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const TitleContainer = styled.div`
  text-align: center;
  align-items: center;
  font-weight: 300;
  font-size: 2rem;
  margin-top: 1rem;
  max-width: 300px; 

  span {
      font-weight: 500;
      color: ${(props) => props.theme['main-color']}
  }

`

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`


export const InputContainer = styled.div`
  text-align: center;
  
  input {
      padding: 20px;
      background: ${(props) => props.theme['main-color']};
      color: ${(props) => props.theme['white']};
      border: 0;
      outline: none;
      border-radius: 8px;
      width: 100%;
      height: 3.125rem;
      font-size: 1rem;
  }

  &:nth-child(2) {
    margin-right: 10px;
    margin-left: 10px;
  }

  input::placeholder {
  color: ${(props) => props.theme['white']};
  opacity: 50%;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  @media (max-width: 728px) {
    width: 100%;
    margin-bottom: 1.5rem;

    &:nth-child(2) {
      margin-right: 0;
      margin-left: 0;
    }

    label {
      text-align: left;
    }
  }

`