import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

export default function ListColumns() {
  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      <Column/>
      <Column/>
      <Column/>

      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        marginX: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: '#ffffff3d'
      }}>
        <Button
          startIcon={<NoteAddIcon/>}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            paddingLeft: 2.5,
            paddingY: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}