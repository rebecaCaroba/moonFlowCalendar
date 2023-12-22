import { HomeContainer, FormContainer, InputContainer, TitleContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from "react";
import { CyclesContext } from "../../context/CyclesContext";
import { MoonFlow } from "../MoonFlow";

const newCycleFormValidationSchema = zod.object({
    lastCycle: zod.date(),
    CycleDuration: zod
        .number()
        .min(21, 'A duração do ciclo deve ter no mínimo 21 dias')
        .max(45, 'A duração do ciclo deve ter no máximo 45 dias'),
    flowDuration: zod
        .number()
        .min(1, 'A duração do fluxo deve ter no mínimo 1 dias')
        .max(10, 'A duração do fluxo deve ter no máximo 10 dias'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
    const [showCalendar, setShowCalendar] = useState(false)
    const {createNewCycle} = useContext(CyclesContext)
    const [sending, setSending] = useState(false)

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            lastCycle: new Date(),
        }
    })

    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data)
        showCalendarFunction()
        reset()
    }

    function showCalendarFunction() {
        setSending(true)
        setTimeout(() => {
            setShowCalendar(true)
        }, 2000)
    }

    const CycleDuration = watch('CycleDuration')
    const isSubmitDisabled = !CycleDuration
    return (
        <>
            {showCalendar ? 
                <MoonFlow />
                :
                <HomeContainer>
            <TitleContainer>
                Bem-vinda a
                <span> MoonFlow Calendar!</span>
            </TitleContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <InputContainer>
                        <label htmlFor="lastCycle">Quando foi sua última menstruação?</label>
                        <input
                            type="date"
                            id="lastCycle"
                            required
                            {...register('lastCycle', { valueAsDate: true })}
                        />

                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="CycleDuration">Duração média de cada ciclo</label>
                        <input
                            type="number"
                            id="CycleDuration"
                            placeholder="28 dias..."
                            min={21}
                            max={45}
                            required
                            {...register('CycleDuration', { valueAsNumber: true })}
                        />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="flowDuration">Quantos dias ela durou?</label>
                        <input
                            type="number"
                            id="flowDuration"
                            placeholder="5 dias..."
                            min={1}
                            max={10}
                            required
                            {...register('flowDuration', { valueAsNumber: true })}

                        />
                    </InputContainer>
                </FormContainer>
                <button disabled={isSubmitDisabled} type="submit">
                    {sending ? 'Calculando...': 'Prever próximo ciclo'}                    
                </button>
            </form>
        </HomeContainer>
            }
        </>
    )
}