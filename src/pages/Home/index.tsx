import { FormContainer, HomeContainer, TitleContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <TitleContainer>
                Bem-vinda a
                <span> MoonFlow Calendar!</span>
            </TitleContainer>
            <form>
                <input type="text" id="name" placeholder="Digite seu nome..."/>
                <FormContainer>
                    <input type="date" id="lastCycle" />
                    <input type="number" id="CycleDuration" placeholder="Duração do ciclo..." />
                    <input type="number" id="flowDuration" placeholder="Duração do fluxo..." />
                </FormContainer>
                <button type="submit">
                    Calcular ciclo
                </button>
            </form>
        </HomeContainer>
    )
}