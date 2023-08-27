import { styled } from "styled-components"

export const HomeContainer = styled.div`
  flex: 0 1 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  input[type='text']{
    background: ${(props) => props.theme['gray-light']};
    color: ${(props) => props.theme['white']};
    border: 0;
    width: 50%;
    height: 3.125rem;
    border-radius: 8px; 
    padding: 1.25rem;
    font-size: 1rem;
    outline: none;
  }

  input[type='text']::placeholder {
    color: ${(props) => props.theme['gray-opacity']};
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  button {
        background: ${(props) => props.theme['secundary-color']};
        color: ${(props) => props.theme['white']};
        border: 0;
        outline: none;
        border-radius: 8px;
        width: 50%;
        height: 3.125rem;
        font-size: 1.25rem;
        font-weight: 700;
        cursor: pointer;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 300;
    font-size: 2rem;

    span {
        font-weight: 500;
        color: ${(props) => props.theme['main-color']}
    }

`

export const FormContainer = styled.div`
    input {
        margin-right: 10px;
        padding: 20px;
        background: ${(props) => props.theme['main-color']};
        color: ${(props) => props.theme['white']};
        border: 0;
        outline: none;
        border-radius: 8px;
        width: 12.5;
        height: 3.125rem;
        font-size: 1rem;
    }

    input::placeholder {
    color: ${(props) => props.theme['gray-opacity']};
  }
    
`