import { ReactNode, createContext, useState } from "react";
import { addDays, differenceInDays } from "date-fns";
type CreateNewCycleData = {
    lastCycle: Date;
    CycleDuration: number;
    flowDuration: number;
}

interface Cycle {
    id: number
    lastCycle: Date
    CycleDuration: number
    flowDuration: number
    expectedNextCycleDate: Date
    daysUntilNextCycle: number
    endDayNextCycle: Date
    isCycleCompleted: boolean
}

interface CyclesContextType {
    cycles: Cycle[]
    calculateDaysUntilNextCycle: (NextDate: Date) => number
    calculateExpectedNextCycleDate: (lastCycle: Date, CycleDuration: number) => Date
    createNewCycle: (data: CreateNewCycleData) => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
    const [cycles, setCycles] = useState<Cycle[]>([])

    function createNewCycle(data: CreateNewCycleData) {
        const expectedNextCycleDate = calculateExpectedNextCycleDate(data.lastCycle, data.CycleDuration)
        const daysUntilNextCycle = calculateDaysUntilNextCycle(expectedNextCycleDate)
        const endDayNextCycle = calculateEndDayNextCycle(expectedNextCycleDate, data.flowDuration)

        const isCycleCompleted = endDayNextCycle <= new Date()

        const newCycle: Cycle = {
            id: 1,
            lastCycle: data.lastCycle,
            CycleDuration: data.CycleDuration,
            flowDuration: data.flowDuration,
            expectedNextCycleDate,
            daysUntilNextCycle,
            endDayNextCycle,
            isCycleCompleted,
        }

        setCycles([newCycle])
    }

    function calculateEndDayNextCycle(NextDate:Date, Flow:number): Date{
        return addDays(NextDate, Flow)
    }
    
    function calculateDaysUntilNextCycle(NextDate: Date) {
        const today = new Date()
        return differenceInDays(NextDate, today)
    }

    function calculateExpectedNextCycleDate(lastCycle: Date, CycleDuration: number): Date {
        const expectedNextCycleDate = addDays(lastCycle, CycleDuration);
        return expectedNextCycleDate;
    }

    return (
        <CyclesContext.Provider
            value={
                {
                    cycles,
                    calculateExpectedNextCycleDate,
                    createNewCycle,
                    calculateDaysUntilNextCycle
                }
            }>
            {children}
        </CyclesContext.Provider>
    )
}