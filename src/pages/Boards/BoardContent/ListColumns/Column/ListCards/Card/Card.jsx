import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { Button, Typography } from '@mui/material'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useDispatch } from 'react-redux'
import { updateCurrentActiveCard } from '~/redux/activeCard/activeCardSlice'
import { showModalActiveCard } from '~/redux/activeCard/activeCardSlice'

export default function TrelloCard({ card }) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: card._id, data: { ...card } })

  const dispatch = useDispatch()

  const dndKitCardStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined
  }

  const showCardActions = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  const setActiveCard = () => {
    dispatch(updateCurrentActiveCard(card))
    dispatch(showModalActiveCard())
  }

  return (
    <Card
      onClick={setActiveCard}
      ref={setNodeRef}
      style={dndKitCardStyle}
      {...attributes}
      {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
        overflow: 'unset',
        display: card?.FE_PlaceholderCard ? 'none' : 'block',
        border: '1px solid transparent',
        '&:hover': { borderColor: (theme) => theme.palette.primary.main }
      }}>
      {card?.cover && <CardMedia
        sx={{ height: 140 }}
        image={card?.cover}
      />}
      <CardContent sx={{
        padding: 1.5,
        '&:last-child': {
          padding: 1.5
        }
      }}>
        <Typography>
          {card?.title}
        </Typography>
      </CardContent>
      {showCardActions() &&
        <CardActions sx={{
          padding: '0 4px 8px 4px'
        }}>
          {!!card?.memberIds?.length && <Button startIcon={<GroupIcon />} size="small">{card?.memberIds?.length}</Button>}
          {!!card?.comments?.length && <Button startIcon={<CommentIcon />} size="small">{card?.comments?.length}</Button>}
          {!!card?.attachments?.length && <Button startIcon={<AttachmentIcon />} size="small">{card?.attachments?.length}</Button>}
        </CardActions>}
    </Card>
  )
}