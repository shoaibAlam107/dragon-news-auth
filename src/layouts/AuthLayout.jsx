import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div>
      Auth Laypout
      <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout
