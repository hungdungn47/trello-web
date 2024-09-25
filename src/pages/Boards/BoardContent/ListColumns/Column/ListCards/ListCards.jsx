import { Box } from '@mui/material'
import TrelloCard from './Card/Card'

export default function ListCards() {
  return (
    <Box sx={{
      padding: '0 5px',
      margin: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => (`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`),
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#bdc0ca',
        borderRadius: '5px'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#aaaaaa'
      }
    }}>
      <TrelloCard/>
      <TrelloCard temporaryHideMedia />
      <TrelloCard temporaryHideMedia />
      <TrelloCard temporaryHideMedia />
      <TrelloCard temporaryHideMedia />
      <TrelloCard temporaryHideMedia />
      <TrelloCard temporaryHideMedia />
      <TrelloCard temporaryHideMedia />
    </Box>
  )
}