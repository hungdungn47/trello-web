import { Box } from '@mui/material'

export default function BoardBar() {
  return (
    <Box sx={{
      height: (theme) => theme.trello.boardBarHeight,
      backgroundColor: 'primary.dark',
      display: 'flex',
      alignItems: 'center'
    }}>
      Board bar
    </Box>
  )
}