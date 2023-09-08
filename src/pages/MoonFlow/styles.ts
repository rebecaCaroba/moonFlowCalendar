import { styled } from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 4rem 0;
    gap: 2rem;
    flex-wrap: wrap;
    
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
    width: 15.625rem;
    background: ${(props) => props.theme['secundary-color']};
    height: 15.625rem;
    border-radius: 100%; 
`

export const InfoCycle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    background: ${(props) => props.theme['gray-500']};
    width: 11.875rem;
    height: 11.875rem;
    border-radius: 100%;
    top: 4%;
    right: 30%;

    span {
        font-weight: bold;
        font-size: 3rem;
    }
`