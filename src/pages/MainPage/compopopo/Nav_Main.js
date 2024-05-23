import { Outlet } from "react-router-dom"
import './Nav.css'

function Nav_Main() {
    return (
        <div className="nav">
            이곳은 나브바 입니다. <Outlet></Outlet>
        </div>
    )
}

export default Nav_Main