import { useState } from "react";
import { Header, CalendarWrapper, Body, WeeksGrid } from "./styles";
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { MONTH_NAMES } from "../../const";


export function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    return (
        <CalendarWrapper>
            <Header>
                <BsChevronLeft />
                <span>{MONTH_NAMES[currentMonth]}</span>
                <BsChevronRight />
            </Header>
            <Body>
                <WeeksGrid></WeeksGrid>
            </Body>
        </CalendarWrapper>
    )
}