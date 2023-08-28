import { CalendarContainer, CalendarContent, CycleContainer, InfoCycle, MoonContainer } from "./styles";

export function Calendar() {
    return (
        <CalendarContainer>
            <div>
                <button>Editar ciclo</button>
                <CycleContainer>
                    <InfoCycle><span>9 </span>dias até a menstruação</InfoCycle>
                    <MoonContainer></MoonContainer>
                </CycleContainer>
            </div>
            <div>
                <CalendarContent>Calendario</CalendarContent>
            </div>
        </CalendarContainer>
    )
}