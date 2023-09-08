import { styled } from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;
    background-color: ${(props) => props.theme['gray-500']};
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    @media (max-width: 730px) {
        height: auto;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`