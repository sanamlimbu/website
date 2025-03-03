import { GitHub, LinkedIn } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Centered from './Centered';
export default function Footer() {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );
  return (
    <Centered
      sx={{
        background: 'rgb(45,46,50)',
        margin: '0',
        padding: '0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          justifyContent: 'space-between',
          maxWidth: '62em',
          padding: isSmallScreen ? '2.5em 2em 2.5em 2em' : '3em 2em 3em 2em',
          flexWrap: 'wrap',
          width: '100%',
          gap: '1em',
          alignItems: 'center',
          textAlign: isSmallScreen ? 'center' : 'initial',
        }}
      >
        <Typography
          sx={{ color: 'white', fontWeight: 'bold', fontSize: '17px' }}
        >
          Copyright © {new Date().getFullYear()}. All rights are reserved.
        </Typography>
        <Typography
          sx={{
            color: 'white',
          }}
        >
          <IconButton
            target="_new"
            rel="noopener noreferrer"
            href={`https://www.linkedin.com/in/sanam-limbu/`}
            sx={{
              padding: '0',
              '&:hover': {
                transform: 'scale(1.2)',
              },
              marginRight: '0.5em',
            }}
          >
            <LinkedIn
              color="inherit"
              sx={{
                color: 'white',
                fontSize: '26px',
                '&:hover': {
                  background: 'none',
                },
              }}
            />
          </IconButton>
          <IconButton
            target="_new"
            rel="noopener noreferrer"
            href={`https://github.com/sanamlimbu`}
            sx={{
              padding: '0',
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
          >
            <GitHub
              sx={{
                color: 'white',
                fontSize: '26px',
                '&:hover': {
                  background: 'none',
                },
              }}
            />
          </IconButton>
        </Typography>
      </Box>
    </Centered>
  );
}
