import { Box, Button, Typography } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import trelloLogo from '~/assets/trello-logo.svg'
import ModeSelect from '~/components/ModeSelect'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Account from './Menus/Account'

export default function AppBar() {
  return (
    <Box px={2} sx={{
      height: (theme) => theme.trello.appBarHeight,
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'auto'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <img src={trelloLogo} style={{ borderRadius: '4px' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button variant='outlined'>Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: '120px' }} />
        <ModeSelect/>
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }} >
            <NotificationsIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: 'primary.main' }} />
        </Tooltip>
        <Account/>
      </Box>
    </Box>
  )
}