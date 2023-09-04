import { ReactNode, createContext, useState } from "react";
import { addDays, differenceInDays } from "date-fns";


type CreateNewCycleData = {
    lastCycle: Date;
    CycleDuration: number;
    flowDuration: number;
}

interface Cycle {
    lastCycle: Date
    CycleDuration: number
    flowDuration: number
}

interface CyclesContextType {
    cycles: Cycle[]
    calculateDaysUntilNextCycle: (NextDate: Date) => number
    calculateExpectedNextCycleDate: (lastCycle:Date, CycleDuration:number) => Date
    createNewCycle: (data:CreateNewCycleData) => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps){
    const [cycles, setCycles] = useState<Cycle[]>([])

    function createNewCycle(data: CreateNewCycleData) {

        const newCycle: Cycle = {
            lastCycle: data.lastCycle,
            CycleDuration: data.CycleDuration,
            flowDuration: data.flowDuration
        }

        const expectedNextCycleDate = calculateExpectedNextCycleDate(data.lastCycle, data.CycleDuration)
        calculateDaysUntilNextCycle(expectedNextCycleDate)
        setCycles([newCycle])
    }

    function calculateDaysUntilNextCycle(NextDate: Date) {
        const today = new Date()
        return differenceInDays(NextDate, today)
    }

    function calculateExpectedNextCycleDate(lastCycle:Date, CycleDuration:number): Date {
        const expectedNextCycleDate = addDays(lastCycle, CycleDuration);
        return expectedNextCycleDate;
    }


    return (
        <CyclesContext.Provider 
        value={
            {cycles,    
             calculateExpectedNextCycleDate, 
             createNewCycle,
             calculateDaysUntilNextCycle}
        }>
            {children}
        </CyclesContext.Provider>
    )
}