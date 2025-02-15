import { Box, Typography, CircularProgress } from "@mui/material"

export default function LoadingSpinner({ caption }) {

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      gap: 2
    }}>
      <CircularProgress />
      <Typography>{caption}</Typography>
    </Box>
  )
}