import { useContext } from "react";
import { CalendarApp } from "../../components/Calendar";
import { CalendarContainer, CycleContainer, InfoCycle, MoonContainer } from "./styles";
import { CyclesContext } from "../../context/CyclesContext";
import { HiMoon } from "react-icons/hi";

export function MoonFlow() {
    const { cycles } = useContext(CyclesContext)
    
    return (
        <CalendarContainer>
                <CycleContainer>
                        {cycles.map((cycle, key) => {
                            if(cycle.isCycleCompleted == true) {
                                return (
                                    <InfoCycle key={key}>
                                        <span><HiMoon size={24} /></span>
                                        Ciclo completo
                                    </InfoCycle>
                                    )
                                } else
                                if(cycle.daysUntilNextCycle < 0){
                                    return (
                                    <InfoCycle key={key}>
                                        <span>{Math.abs(cycle.daysUntilNextCycle)+1}º</span>
                                        dia da menstruação
                                    </InfoCycle>
                                    )
                                }else if(cycle.daysUntilNextCycle === 0){
                                    return (
                                        <InfoCycle key={key}>
                                            <span>Último</span>
                                            dia até a menstruação
                                        </InfoCycle>
                                        )
                                }
                                else {
                                    return (
                                    <InfoCycle key={key}>
                                        <span>{cycle.daysUntilNextCycle+1}</span>
                                        {`dia${cycle.daysUntilNextCycle + 1 !== 1 ? 's' : ''}`} até a menstruação
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