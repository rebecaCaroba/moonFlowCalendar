import { styled } from "styled-components";

export const CalendarCustom = styled.div`
    .react-calendar,
    .react-calendar__navigation button,
    .react-calendar__month-view__days__day,
    .react-calendar__year-view,
    .react-calendar__decade-view__years button,
    .react-calendar__year-view__months button {
        color: ${(props) => props.theme['white']};
    }

    .react-calendar {
        background: ${(props) => props.theme['gray-550']};
        border-color:  ${(props) => props.theme['main-color']};
    }

    .react-calendar__navigation button:focus,
    .react-calendar__navigation button:hover,
    .react-calendar__decade-view__years button:hover,
    .react-calendar__year-view__months button:hover {
        background: ${(props) => props.theme['main-color']};
    }

    .react-calendar__month-view__days__day--neighboringMonth {
        color: ${(props) => props.theme['gray-200']};
        opacity: 30%;
    }

    .react-calendar__tile--active,
    .react-calendar__tile--now,
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus,
    .react-calendar__month-view__days button:hover {
        background: ${(props) => props.theme['secundary-color']};
    }
`

export const Mark = styled.div`
    height: 0.685rem;
    width: 100%;
    color: ${(props) => props.theme['main-color']};
`
