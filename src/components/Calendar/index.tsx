import Calendar from "react-calendar"
import { useContext, useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import { IoMdWater } from 'react-icons/io';
import { CyclesContext } from "../../context/CyclesContext";
import { Maker } from "./styles";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece]

export function CalendarApp() {
    const [value, onChange] = useState<Value>(new Date())
    const { cycles } = useContext(CyclesContext)
    const dataFinal = new Date(2023, 8, 8)

    return (
        <Calendar 
        tileContent={({ date, view }) => {
           const markes = cycles.map((cycle) => {
                if (view === 'month' && date >= cycle.expectedNextCycleDate && date <= dataFinal) {
                    return <Maker key={cycle.id}><IoMdWater size={20}/></Maker>
                  }
                  return null
            })
            return markes
        }}
        onChange={onChange} 
        value={value} 
        />
    )
}