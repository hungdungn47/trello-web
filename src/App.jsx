import Board from './pages/Boards/_id'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import Auth from '~/pages/Auth/Auth'
import AccountVerification from './pages/Auth/AccountVerification'
import Settings from '~/pages/Settings/Settings'
import { useSelector } from "react-redux"
import { selectCurrentUser } from "./redux/user/userSlice"
import Boards from './pages/Boards/index'

function ProtectRoute({ user }) {
  if (!user) return <Navigate to='/login' replace={true} />
  return <Outlet />
}

function App() {

  const currentUser = useSelector(selectCurrentUser)

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/boards/670901d62903edebcb188b99' replace={true} />} />
      <Route element={<ProtectRoute user={currentUser} />}>
        <Route path='/boards/:boardId' element={<Board />} />
        <Route path='/boards' element={<Boards />} />

        <Route path='/settings/account' element={<Settings />} />
        <Route path='/settings/security' element={<Settings />} />
      </Route>

      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
      <Route path='/account/verification' element={<AccountVerification />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
