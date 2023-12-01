import Logo from "../../assets/Logo.png"
import { HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} width={50} />
        </HeaderContainer>
    )
}