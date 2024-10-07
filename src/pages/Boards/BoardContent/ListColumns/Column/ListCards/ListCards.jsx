import { Box } from '@mui/material'
import TrelloCard from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export default function ListCards({ cards }) {
  return (
    <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
      <Box sx={{
        padding: '0 5px 5px 5px',
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
        {cards?.map((card) => <TrelloCard key={card._id} card={card}/>)}
      </Box>
    </SortableContext>
  )
}