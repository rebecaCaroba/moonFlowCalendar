import { styled } from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1rem 0;

    button {
        background: transparent;
        border: 5px solid ${(props) => props.theme['main-color']};
        color: ${(props) => props.theme['white']};
        border-radius: 40px;
        padding: 0.938rem;
        font-weight: 700;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
    }

    button:hover{
        background: ${(props) => props.theme['main-color']};
        transition: 0.3s;
    }
`

export const CycleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
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
    top: 30%;
    left: -10%;

    span {
        font-weight: bold;
        font-size: 3rem;
    }
`