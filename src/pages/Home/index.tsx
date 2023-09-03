import { FormContainer, HomeContainer, InputContainer, TitleContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { addDays, differenceInDays, format } from "date-fns";

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

interface Cycle {
    lastCycle: Date
    CycleDuration: number
    flowDuration: number
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            lastCycle: new Date(),
            CycleDuration: 0,
            flowDuration: 0,
        }
    })

    function handleCreateNewCycle(data: NewCycleFormData) {

        const newCycle: Cycle = {
            lastCycle: data.lastCycle,
            CycleDuration: data.CycleDuration,
            flowDuration: data.flowDuration
        }

        const expectedNextCycleDate = calculateExpectedNextCycleDate(data.lastCycle, data.CycleDuration)
        const today = new Date()
        const daysUntilNextCycle = differenceInDays(expectedNextCycleDate, today)
        console.log('Data prevista', format(expectedNextCycleDate, 'yyyy-MM-dd'), 'Dias restantes',daysUntilNextCycle)
        setCycles([newCycle])
        reset()
    }

    function calculateExpectedNextCycleDate(lastCycle:Date, CycleDuration:number) {
        const expectedNextCycleDate = addDays(lastCycle, CycleDuration);
        return expectedNextCycleDate;
    }

    const CycleDuration = watch('CycleDuration')
    const isSubmitDisabled = !CycleDuration

    return (
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
                        <label htmlFor="CycleDuration">Duração média do ciclo (dias)</label>
                        <input
                            type="number"
                            id="CycleDuration"
                            placeholder="28 dias..."
                            min={21}
                            max={45}
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
                            {...register('flowDuration', { valueAsNumber: true })}

                        />
                    </InputContainer>
                </FormContainer>
                <button disabled={isSubmitDisabled} type="submit">
                    Calcular ciclo
                </button>
            </form>
        </HomeContainer>
    )
}