import { useContext } from "react";
import { CalendarApp } from "../../components/Calendar";
import { CalendarContainer, CycleContainer, InfoCycle, MenstruationRecorderBtn, MoonContainer } from "./styles";
import { CyclesContext } from "../../context/CyclesContext";

export function MoonFlow() {
    const { cycles } = useContext(CyclesContext)
    
    return (
        <CalendarContainer>
            <div>
                <CycleContainer>
                <MenstruationRecorderBtn type="button">
                    <span>Registrar menstruação</span>
                </MenstruationRecorderBtn>
                        {cycles.map((cycle, key) => {
                            if(cycle.daysUntilNextCycle){
                                return (
                                <InfoCycle key={key}>
                                    <span>{cycle.daysUntilNextCycle}</span>
                                    dias até a menstrução
                                </InfoCycle>
                                )
                            }
                        })}
                    <MoonContainer></MoonContainer>
                </CycleContainer>
            </div>
            <div>
                <CalendarApp />
            </div>
        </CalendarContainer>
    )
}