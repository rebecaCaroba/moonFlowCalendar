import Calendar from "react-calendar"
import { useContext, useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import { CyclesContext } from "../../context/CyclesContext";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece]

export function CalendarApp() {
    const [value, onChange] = useState<Value>(new Date())
    const { cycles } = useContext(CyclesContext)

    return (
        
        <Calendar 
        onChange={onChange} 
        value={value} 
        />
    )
}