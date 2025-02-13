import Board from './pages/Boards/_id'
import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/boards/670901d62903edebcb188b99' replace={true} />} />
      <Route path='/boards/:boardId' element={<Board />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
