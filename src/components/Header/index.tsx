import Logo from "../../assets/Logo.png"
import { FaRegCalendarDays } from 'react-icons/fa6';
import { IoMdWater } from 'react-icons/io';
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} width={50} />
            <nav>
                <NavLink to="/" title="Home">
                    <IoMdWater size={24} />
                </NavLink>
                <NavLink to="/moonflow" title="Ciclo">
                    <FaRegCalendarDays size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}