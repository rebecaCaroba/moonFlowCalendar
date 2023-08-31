import Calendar from "react-calendar"
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece]

export function CalendarApp() {
    const [value, onChange] = useState<Value>(new Date())

    return (
        <Calendar 
        onChange={onChange} 
        value={value} 
        />
    )
}