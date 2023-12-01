import { useContext } from "react";
import { CalendarApp } from "../../components/Calendar";
import { CalendarContainer, CycleContainer, InfoCycle, MoonContainer } from "./styles";
import { CyclesContext } from "../../context/CyclesContext";

export function MoonFlow() {
    const { cycles } = useContext(CyclesContext)
    
    return (
        <CalendarContainer>
                <CycleContainer>
                        {cycles.map((cycle, key) => {
                                if(cycle.daysUntilNextCycle < 1){
                                    return (
                                    <InfoCycle key={key}>
                                        <span>{Math.abs(cycle.daysUntilNextCycle)+1}º</span>
                                        dia da menstruação
                                    </InfoCycle>
                                    )
                                }else {
                                    return (
                                    <InfoCycle key={key}>
                                        <span>{cycle.daysUntilNextCycle+1}</span>
                                        dias até a menstrução
                                    </InfoCycle>
                                    )
                                }  
                            }
                        )}
                    <MoonContainer></MoonContainer>
                </CycleContainer>
            <div>
                <CalendarApp />
            </div>
        </CalendarContainer>
    )
}