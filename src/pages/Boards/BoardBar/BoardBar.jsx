import { Box, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import { DashboardOutlined } from '@mui/icons-material'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import { capitalizeFirstLetter } from '../../../utils/formatters'
import BoardUserGroup from './BoardUserGroup'

const CHIP_STYLE = { color: 'white', border: 'none', bgcolor: 'transparent', padding: '5px', '.MuiSvgIcon-root': { color: 'white' }, borderRadius: '4px', '&:hover': { bgcolor: 'primary.50' } }

export default function BoardBar({ board }) {
  return (
    <Box sx={{
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white',
      paddingX: 2,
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            icon={<DashboardOutlined color='primary.main' />}
            label={board?.title}
            clickable
            sx={CHIP_STYLE}
          ></Chip>
        </Tooltip>
        <Chip
          icon={<VpnLockIcon color='primary.main' />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
          sx={CHIP_STYLE}
        ></Chip>
        <Chip
          icon={<AddToDriveIcon color='primary.main' />}
          label="Add To Google Drive"
          clickable
          sx={CHIP_STYLE}
        ></Chip>
        <Chip
          icon={<BoltIcon color='primary.main' />}
          label="Automation"
          clickable
          sx={CHIP_STYLE}
        ></Chip>
        <Chip
          icon={<FilterListIcon color='primary.main' />}
          label="Filters"
          clickable
          sx={CHIP_STYLE}
        ></Chip>
      </Box>

      {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button startIcon={<PersonAddIcon />} variant='outlined' sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}>Invite</Button>
        
      </Box> */}

      <BoardUserGroup boardUsers={board?.FE_allUsers} />
    </Box>
  )
}