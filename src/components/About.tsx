import { Box, Typography, useMediaQuery } from '@mui/material';
import Laptop from '../assets/laptop.jpeg';

export default function About({ id }: { id: string }) {
  const matches = useMediaQuery('(max-width:480px)');
  return (
    <Box
      id={id}
      sx={{
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '62em',
          padding: '6em 2em 6em 2em',
          width: '100%',
          '@media (max-width: 1024px)': {
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            gap: '2em',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {matches ? (
            <img
              src={Laptop}
              height={'250px'}
              style={{
                borderRadius: '16px',
              }}
            />
          ) : (
            <img
              src={Laptop}
              height={'336px'}
              style={{
                borderRadius: '16px',
              }}
            />
          )}
        </Box>
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
            A Full Stack Software Developer
            <br /> based in Perth, Australia 📍
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              color: 'rgb(85, 85, 85)',
              maxWidth: '22em',
            }}
          >
            I am a Software Developer with a demonstrated history of delivering
            high-quality web applications. I have a solid technical background
            and a proven ability to take on complex projects.
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              marginTop: '1em',
              color: 'rgb(85, 85, 85)',
              maxWidth: '22em',
            }}
          >
            I am known for my ability to adapt to new environments, learn new
            technologies, and work effectively with teams to produce scalable,
            maintainable software solutions.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
