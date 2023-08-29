import { CalendarContainer, CalendarContent, CycleContainer, InfoCycle, MoonContainer } from "./styles";

export function Calendar() {
    return (
        <CalendarContainer>
            <div>
                <CycleContainer>
                <button>Editar ciclo</button>
                    <InfoCycle>
                        <span>9</span>dias até a menstruação
                    </InfoCycle>
                    <MoonContainer></MoonContainer>
                </CycleContainer>
            </div>
            <div>
                <CalendarContent>Calendario</CalendarContent>
            </div>
        </CalendarContainer>
    )
}