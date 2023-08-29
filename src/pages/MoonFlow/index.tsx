import { Calendar } from "../../components/Calendar";
import { CalendarContainer, CycleContainer, InfoCycle, MoonContainer } from "./styles";

export function MoonFlow() {
    return (
        <CalendarContainer>
            <div>
                <CycleContainer>
                <button type="button">
                    <span>Registrar menstruação</span>
                </button>
                    <InfoCycle>
                        <span>9</span>dias até a menstruação
                    </InfoCycle>
                    <MoonContainer></MoonContainer>
                </CycleContainer>
            </div>
            <div>
                <Calendar />
            </div>
        </CalendarContainer>
    )
}