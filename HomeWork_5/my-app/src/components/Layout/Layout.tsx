import Header from "../Header/Header"
import { Outlet } from 'react-router-dom';

interface ILayoutProps {
  callback: () => void
}

const Layout = ({callback}: ILayoutProps) => {
  return (
    <>
        <Header callback={callback}/>
        <Outlet/>
    </>
  )
}

export default Layout