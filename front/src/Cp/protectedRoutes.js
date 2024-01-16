import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthenticateContext } from "./AuthContext"

const ProtectedRoutes= ()=>{
    const [authInfo] = useContext(AuthenticateContext)
    return (authInfo.isAuthenticated) ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes