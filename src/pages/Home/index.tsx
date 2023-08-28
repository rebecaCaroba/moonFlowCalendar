import { FormContainer, HomeContainer, InputContainer, InputText, TitleContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <TitleContainer>
                Bem-vinda a
                <span> MoonFlow Calendar!</span>
            </TitleContainer>
            <form>
                <InputText 
                type="text" 
                id="name" 
                placeholder="Digite seu nome..."
                />
                <FormContainer>
                    <InputContainer>
                        <label htmlFor="lastCycle">Quando foi sua última menstruação?</label>
                    <input 
                    type="date" 
                    name="lastCycle" 
                    id="lastCycle"
                    />
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="CycleDuration">Duração média do ciclo (dias)</label>
                        <input
                        type="number"
                        name="CycleDuration"
                        id="CycleDuration"
                        placeholder="28 dias..."
                        min={21}
                        max={45}
                        />
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="flowDuration">Quantos dias ela durou?</label>
                        <input
                        type="number"
                        id="flowDuration"
                        name="flowDuration"
                        placeholder="5 dias..."
                        min={1}
                        max={14}
                        />
                    </InputContainer>

                </FormContainer>
                <button type="submit">
                    Calcular ciclo
                </button>
            </form>
        </HomeContainer>
    )
}