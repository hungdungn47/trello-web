import { Box } from '@mui/material'
import ModeSelect from '../ModeSelect'

export default function AppBar() {
  return (
    <Box sx={{
      height: (theme) => theme.trello.appBarHeight,
      backgroundColor: 'primary.light',
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect/>
    </Box>
  )
}