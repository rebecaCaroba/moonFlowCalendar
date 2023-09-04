import { ReactNode, createContext, useState } from "react";
import { addDays, differenceInDays, format } from "date-fns";


type CreateNewCycleData = {
    lastCycle: Date;
    CycleDuration: number;
    flowDuration: number;
}

interface Cycle {
    lastCycle: Date
    CycleDuration: number
    flowDuration: number
    expectedNextCycleDate: Date | string
    daysUntilNextCycle: number
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
        const expectedNextCycleDate = calculateExpectedNextCycleDate(data.lastCycle, data.CycleDuration)
        const formattedExpectedNextCycleDate = format(expectedNextCycleDate, 'yyyy-MM-dd')
        const daysUntilNextCycle = calculateDaysUntilNextCycle(expectedNextCycleDate)
        

        const newCycle: Cycle = {
            lastCycle: data.lastCycle,
            CycleDuration: data.CycleDuration,
            flowDuration: data.flowDuration,
            expectedNextCycleDate: formattedExpectedNextCycleDate,
            daysUntilNextCycle,
        }

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