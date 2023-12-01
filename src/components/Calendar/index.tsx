import Calendar from "react-calendar";
import { useContext, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { IoMdWater } from 'react-icons/io';
import { CyclesContext } from "../../context/CyclesContext";
import { Mark, CalendarCustom } from "./styles";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece]

export function CalendarApp() {
    const [value, onChange] = useState<Value>(new Date())
    const { cycles } = useContext(CyclesContext)

    const firstCycle = cycles[0]
    const initialMonth = firstCycle ? new Date(firstCycle.expectedNextCycleDate) : new Date()

    return (
        <CalendarCustom>
            <Calendar 
            tileContent={({ date, view }) => {
                const marks = cycles.map((cycle, key) => {
                    if (view === 'month' && date >= cycle.expectedNextCycleDate && date <= cycle.endDayNextCycle) {
                        return <Mark key={key}><IoMdWater size={20}/></Mark>
                    }
                    return null
                })

                return marks.length > 0 ? marks : null
            }}
            onChange={onChange} 
            value={value} 
            view={"month"}
            activeStartDate={initialMonth}
        />
        </CalendarCustom>
    )
}
