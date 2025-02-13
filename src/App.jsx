import Board from './pages/Boards/_id'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/boards/670901d62903edebcb188b99' replace={true} />} />
      <Route path='/boards/:boardId' element={<Board />} />
      <Route path='*' element={<div>Not found</div>} />
    </Routes>
  )
}

export default App
