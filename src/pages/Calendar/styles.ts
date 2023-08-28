import { styled } from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 3rem 0;

    button {
        background: transparent;
        border: 5px solid ${(props) => props.theme['main-color']};
        color: ${(props) => props.theme['white']};
    }
`

export const CycleContainer = styled.div`
    display: flex;
    position: relative;
`

export const MoonContainer = styled.div`
    width: 250px;
    background: ${(props) => props.theme['secundary-color']};
    height: 250px;
    border-radius: 100%; 
`

export const InfoCycle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    background: ${(props) => props.theme['gray-500']};
    width: 190px;
    height: 190px;
    border-radius: 100%;
    top: 10%;
    left: -10%;

    span {
        font-weight: bold;
        font-size: 3rem;
    }
`

export const CalendarContent = styled.div`
    background: ${(props) => props.theme['gray-400']};
    width: 400px;
    height: 400px;
`