import { NavLink } from "react-router-dom"
import { FaHome, FaInfoCircle, FaBook } from "react-icons/fa"

const Header = () => {
    return (
        <div style={{ width: "100vw", borderBottom: "2px solid white" }}>
            <div style={{ display: "flex", gap: "8rem", justifyContent: "space-around" }}>
                <NavLink to='/'
                    style={({ isActive }) => ({ color: isActive ? "brown" : "blue", backgroundColor: isActive ? "lightGray" : "white", display: "flex", gap: "3px", alignItems: "center", padding: "5px", textDecoration: "none", borderRadius: "5px" })}
                ><FaHome /> Home</NavLink>
                <NavLink to='/about'
                    style={({ isActive }) => ({ color: isActive ? "purple" : "black", backgroundColor: isActive ? "lightGray" : "white", display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", padding: "5px", borderRadius: "5px" })}><FaInfoCircle /> About</NavLink>

                <NavLink to='/blogs' style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", color: "green" }}><FaBook /> Blogs</NavLink>
            </div>
        </div>
    )
}

export default Header