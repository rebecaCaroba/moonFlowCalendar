import { styled } from "styled-components";

export const CalendarWrapper = styled.div`
    background: ${(props) => props.theme['gray-700']};
    border: 2px solid ${(props) => props.theme['gray-550']};
    border-radius: 8px;
    width: 500px;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;

    svg {
        cursor: pointer;
    }
`

export const Body = styled.div`
    margin: 5px;
`

export const WeeksGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`

export const Mark = styled.div`
    height: 0.685rem;
    width: 100%;
    color: ${(props) => props.theme['main-color']};

`