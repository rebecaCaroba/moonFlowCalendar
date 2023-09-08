import { useContext } from "react";
import { CalendarApp } from "../../components/Calendar";
import { CalendarContainer, CycleContainer, InfoCycle, MoonContainer } from "./styles";
import { CyclesContext } from "../../context/CyclesContext";
import { HiMoon } from "react-icons/hi";

export function MoonFlow() {
    const { cycles } = useContext(CyclesContext)
    
    return (
        <CalendarContainer>
            <div>
                <CycleContainer>

                        {cycles.map((cycle, key) => {
                            if(cycle.isCycleCompleted == true) {
                                return (
                                    <InfoCycle key={key}>
                                        <span><HiMoon size={24} /></span>
                                        Ciclo completo
                                    </InfoCycle>
                                    )
                            }else if(cycle.daysUntilNextCycle < 0){
                                    return (
                                    <InfoCycle key={key}>
                                        <span>{Math.abs(cycle.daysUntilNextCycle)+1}º</span>
                                        dia da menstruação
                                    </InfoCycle>
                                    )
                                }else {
                                    return (
                                    <InfoCycle key={key}>
                                        <span>{Math.abs(cycle.daysUntilNextCycle)+1}</span>
                                        dias até a menstrução
                                    </InfoCycle>
                                    )
                                }  
                            }
                        )}
                    <MoonContainer></MoonContainer>
                </CycleContainer>
            </div>
            <div>
                <CalendarApp />
            </div>
        </CalendarContainer>
    )
}