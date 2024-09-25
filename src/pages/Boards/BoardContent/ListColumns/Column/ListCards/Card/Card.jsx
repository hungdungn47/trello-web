import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { Button, Typography } from '@mui/material'

export default function TrelloCard({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <Card sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
        overflow: 'unset'
      }}>
        <CardContent sx={{
          padding: 1.5,
          '&:last-child': {
            padding: 1.5
          }
        }}>
          <Typography>
            hehehehe
          </Typography>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://chuyentactical.com/wp-content/uploads/2023/09/kinh-nghiem-du-lich-ta-xua-4-chuyentactical.com_.jpg"
        title="green iguana"
      />
      <CardContent sx={{
        padding: 1.5,
        '&:last-child': {
          padding: 1.5
        }
      }}>
        <Typography>
          Hung Dung
        </Typography>
      </CardContent>
      <CardActions sx={{
        padding: '0 4px 8px 4px'
      }}>
        <Button startIcon={<GroupIcon/>} size="small">20</Button>
        <Button startIcon={<CommentIcon/>} size="small">17</Button>
        <Button startIcon={<AttachmentIcon/>} size="small">8</Button>
      </CardActions>
    </Card>
  )
}