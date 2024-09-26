import { Box, Button, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import { DashboardOutlined } from '@mui/icons-material'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '../../../utils/formatters'

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
        <Chip
          icon={<DashboardOutlined color='primary.main'/>}
          label={board?.title}
          clickable
          sx={ CHIP_STYLE }
        ></Chip>
        <Chip
          icon={<VpnLockIcon color='primary.main'/>}
          label={capitalizeFirstLetter(board?.type)}
          clickable
          sx={ CHIP_STYLE }
        ></Chip>
        <Chip
          icon={<AddToDriveIcon color='primary.main'/>}
          label="Add To Google Drive"
          clickable
          sx={ CHIP_STYLE }
        ></Chip>
        <Chip
          icon={<BoltIcon color='primary.main'/>}
          label="Automation"
          clickable
          sx={ CHIP_STYLE }
        ></Chip>
        <Chip
          icon={<FilterListIcon color='primary.main'/>}
          label="Filters"
          clickable
          sx={ CHIP_STYLE }
        ></Chip>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button startIcon={<PersonAddIcon/>} variant='outlined' sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}>Invite</Button>
        <AvatarGroup max={4} sx={{
          '& .MuiAvatar-root': {
            border: 'none',
            width: 34,
            height: 34,
            fontSize: '16px',
            cursor: 'pointer',
            '&:first-of-type': {
              bgcolor: '#a4b0be'
            }
          }
        }}>
          <Tooltip title='Hung Dung'>
            <Avatar alt="Hung Dung" src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/440983867_122108403140287491_5964265283365421005_n.jpg?stp=c211.100.385.385a_dst-jpg_s384x384&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFZyFnHJgNwF-im7QV_S_zdloJPzrS_INuWgk_OtL8g20NvNN1paOJhj4W7Xl4UPZWcL5xj1oRAHRpF5PmzjKf_&_nc_ohc=4nyPlEQerVEQ7kNvgHtFt1_&_nc_ht=scontent.fhan3-2.fna&_nc_gid=AcAovUomnVN6El56V4_L01u&oh=00_AYDnfqnAQE-x9UfM2Cfkj9rhQmyuOyqrmcVbc-35MYgLDg&oe=66F84B34" />
          </Tooltip>
          <Tooltip title='Yen Trang'>
            <Avatar alt="Yen Trang" src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/455968914_1508640776449360_6887073065191820819_n.jpg?stp=dst-jpg_s480x480&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFjlOsSfgdjuazMHNqvY05-0DKPKeva2SjQMo8p69rZKNM60UbYwWBs8ZuBfqcyVVswUXgDumKsJPiInn_tBjoq&_nc_ohc=eow8Tb18GcQQ7kNvgGqj_fu&_nc_ht=scontent.fhan3-2.fna&_nc_gid=AK7kG9cXbUGXJCtsmaV_6XM&oh=00_AYD6eZwHNTxN3LlkPyK1dBaePBhwwA3zhdDlN330wJvpOw&oe=66F848A5" />
          </Tooltip>
          <Tooltip title='Duc Anh'>
            <Avatar alt="Duc Anh" src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-1/452103128_1035697394790214_7111286425642160217_n.jpg?stp=dst-jpg_s480x480&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHNoFPC9OAayHAHeao8-4yg3DwiGgGYrpfcPCIaAZiul5xQgiWluP1QWV8T1uL5lImiHcuDu8of5uweV0OmUhwR&_nc_ohc=qHnZJF5j6ucQ7kNvgH-bvCB&_nc_ht=scontent.fhan3-5.fna&_nc_gid=AL_jW8f5qIRWg5kmeIv4O1n&oh=00_AYAENv2xPbhlm0xouTPSRaZVQ9sB5c4GbpU6Yi-eW-eLzQ&oe=66F83FA7" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}