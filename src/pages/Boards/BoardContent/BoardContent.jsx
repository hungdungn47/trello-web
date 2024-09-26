import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { sortArray } from '../../../utils/sorts'

export default function BoardContent({ board }) {
  const orderedColumns = sortArray(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box sx={{
      height: (theme) => (theme.trello.boardContentHeight),
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      padding: '10px 0'
    }}>
      <ListColumns columns={orderedColumns}/>
    </Box>
  )
}