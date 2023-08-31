import { CalendarApp } from "../../components/Calendar";
import { CalendarContainer, CycleContainer, InfoCycle, MenstruationRecorderBtn, MoonContainer } from "./styles";

export function MoonFlow() {
    return (
        <CalendarContainer>
            <div>
                <CycleContainer>
                <MenstruationRecorderBtn type="button">
                    <span>Registrar menstruação</span>
                </MenstruationRecorderBtn>
                    <InfoCycle>
                        <span>9</span>dias até a menstruação
                    </InfoCycle>
                    <MoonContainer></MoonContainer>
                </CycleContainer>
            </div>
            <div>
                <CalendarApp />
            </div>
        </CalendarContainer>
    )
}