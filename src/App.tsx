import React, { ReactPropTypes } from 'react'
import './App.css'
import PageLogin from './SuperGroup/Login/Login'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes
} from 'react-router-dom'

export const RequiredAuth = ({ children }: { children: JSX.Element }) => {
  const [isAuth, setIsAuth] = React.useState(false)

  if (isAuth) {
    return <Navigate to={'/login'} replace />
  }
  return children
}

const Layout = () => {
  return (
    <>
      <div>LANG</div>
      <Outlet />
      <div>FOOTER</div>
    </>
  )
}

function App () {
  const [isAuth, setIsAuth] = React.useState(true)

  return (
    <BrowserRouter>
      {isAuth ? (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              path='/login'
              element={
                <RequiredAuth>
                  <PageLogin />
                </RequiredAuth>
              }
            ></Route>
          </Route>
          <Route path='*' element={<PageLogin />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path='*' element={<PageLogin />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
