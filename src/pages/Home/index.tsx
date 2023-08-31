import { FormContainer, HomeContainer, InputContainer, InputText, TitleContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const newCycleFormValidationSchema = zod.object({
    Username: zod.string().min(1, 'Infome seu nome'),
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

export function Home() {
    const {register, handleSubmit, watch} = useForm({
        resolver: zodResolver(newCycleFormValidationSchema),
    })

    function handleCreateNewCycle(data: any){
        console.log(data)
    }

    const Username = watch('Username')

    const isSubmitDisabled = !Username

    return (
        <HomeContainer>
            <TitleContainer>
                Bem-vinda a
                <span> MoonFlow Calendar!</span>
            </TitleContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <InputText 
                type="text" 
                id="Username" 
                placeholder="Digite seu nome..."
                {...register('Username')}
                />
                <FormContainer>
                    <InputContainer>
                    <label htmlFor="lastCycle">Quando foi sua última menstruação?</label>
                    <input 
                    type="date" 
                    id="lastCycle"
                    {...register('lastCycle', {valueAsDate: true})}
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
                        {...register('CycleDuration', {valueAsNumber: true})}
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
                        {...register('flowDuration', {valueAsNumber: true})}

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