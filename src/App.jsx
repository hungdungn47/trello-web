import { Button } from '@mui/material'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import { useColorScheme } from '@mui/material/styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}>
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon/>
            Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon/>
            Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon/>
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <>
      <ModeSelect/>
      <ModeToggle/>
      <div>Hello</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarm/>
      <ThreeDRotation/>
    </>
  )
}

export default App
