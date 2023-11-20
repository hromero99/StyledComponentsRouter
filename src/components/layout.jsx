import { Outlet } from "react-router-dom"
import { NavBarStyled } from "./navStyled.js"



export const Layout = () => {

    return (
        <>
            <NavBarStyled>
                <li>Inicio</li>
                <li>Contact</li>
            </NavBarStyled>
            <Outlet/>
        </>
    )
}