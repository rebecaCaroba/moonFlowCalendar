import { styled } from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 4rem 0;
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
    top: 4%;
    right: 30%;

    span {
        font-weight: bold;
        font-size: 3rem;
    }
`