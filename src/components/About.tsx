import { Box, Theme, Typography, useMediaQuery } from '@mui/material';
import Centered from './Centered';

export default function About({ id }: { id: string }) {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('lg')
  );
  return (
    <Centered
      id={id}
      sx={{
        background: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '62em',
          padding: '6em 2em 6em 2em',
          width: '100%',
          flexDirection: isLargeScreen ? 'column' : 'row',
          textAlign: isLargeScreen ? 'center' : 'initial',
          alignItems: 'center',
          gap: isLargeScreen ? '2em' : 'initials',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: '800',
              background: 'linear-gradient(to right, #007FFF, #0059B2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ABOUT ME
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: '0.5em',
              marginBottom: '0.5em',
              fontWeight: 'bold',
            }}
          >
            A Full Stack Software Developer based in Perth, Australia 📍
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              color: 'rgb(85, 85, 85)',
              marginTop: '2em',
            }}
          >
            I am a Software Developer with a demonstrated history of delivering
            high-quality web applications. I have a solid technical background
            and a proven ability to take on complex projects.
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              marginTop: '2em',
              color: 'rgb(85, 85, 85)',
            }}
          >
            I am known for my ability to adapt to new environments, learn new
            technologies, and work effectively with teams to produce scalable,
            maintainable software solutions.
          </Typography>
        </Box>
      </Box>
    </Centered>
  );
}
