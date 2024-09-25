import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

export default function BoardContent() {
  return (
    <Box sx={{
      height: (theme) => (theme.trello.boardContentHeight),
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      padding: '10px 0'
    }}>
      <ListColumns/>
    </Box>
  )
}