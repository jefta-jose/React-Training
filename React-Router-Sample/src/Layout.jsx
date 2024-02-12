import { Outlet } from 'react-router-dom'
import NavBar from './layout/NavBar'
import SideNav from './layout/SideNav'

const Layout = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>

                <SideNav />
                <div style={{ display: "flex", flex: "1" }}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout