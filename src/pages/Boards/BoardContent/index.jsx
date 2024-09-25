import { Box, Button, Typography } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'
import { AddCardRounded, ContentCopy, ContentPaste } from '@mui/icons-material'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

export default function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      height: (theme) => (theme.trello.boardContentHeight),
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      padding: '10px 0'
    }}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
        <Box sx={{
          width: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          marginLeft: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) => (`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`)
        }}>
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography variant="h6" sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>Column title</Typography>
            <Box>
              <Tooltip title='More options'>
                <ExpandMoreIcon
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                  id="basic-button-workspaces"
                  aria-controls={open ? 'basic-menu-workspaces' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  endicon={<ArrowDropDownIcon/>}
                ></ExpandMoreIcon>
              </Tooltip>
              <Menu
                id="basic-menu-workspaces"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button-workspaces'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon><DeleteIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          <Box sx={{
            padding: '0 5px',
            margin: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => (`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`),
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#bdc0ca',
              borderRadius: '5px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#aaaaaa'
            }
          }}>
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
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                padding: 1.5,
                '&:last-child': {
                  padding: 1.5
                }
              }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                padding: 1.5,
                '&:last-child': {
                  padding: 1.5
                }
              }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                padding: 1.5,
                '&:last-child': {
                  padding: 1.5
                }
              }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                padding: 1.5,
                '&:last-child': {
                  padding: 1.5
                }
              }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                padding: 1.5,
                '&:last-child': {
                  padding: 1.5
                }
              }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                padding: 1.5,
                '&:last-child': {
                  padding: 1.5
                }
              }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddCardRounded/>}>Add new cards</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon/>
            </Tooltip>
          </Box>
        </Box>
        <Box sx={{
          width: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          marginLeft: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) => (`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`)
        }}>
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography variant="h6" sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>Column title</Typography>
            <Box>
              <Tooltip title='More options'>
                <ExpandMoreIcon
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                  id="basic-button-workspaces"
                  aria-controls={open ? 'basic-menu-workspaces' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  endicon={<ArrowDropDownIcon/>}
                ></ExpandMoreIcon>
              </Tooltip>
              <Menu
                id="basic-menu-workspaces"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button-workspaces'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon><DeleteIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          <Box sx={{
            padding: '0 5px',
            margin: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => (`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`),
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#bdc0ca',
              borderRadius: '5px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#aaaaaa'
            }
          }}>
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
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                padding: 1.5,
                '&:last-child': {
                  padding: 1.5
                }
              }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                padding: 1.5,
                '&:last-child': {
                  padding: 1.5
                }
              }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset'
            }}>
              <CardContent sx={{
                padding: 1.5,
                '&:last-child': {
                  padding: 1.5
                }
              }}>
                <Typography>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddCardRounded/>}>Add new cards</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon/>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}