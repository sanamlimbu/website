import { Box, Typography } from '@mui/material';
import Envelope from '../assets/envelope.svg';
import Location from '../assets/location.svg';
import { ImageContainer } from './Home';

export default function Contact({ id }: { id: string }) {
  return (
    <Box
      id={id}
      sx={{
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '62em',
          padding: '6em 2em',
          width: '100%',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
          },
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
            CONTACT
          </Typography>
          <Typography
            variant="h5"
            sx={{ marginTop: '0.5em', fontWeight: 'bold' }}
          >
            Feel free to reach out to me! 👇
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '4em',
              marginTop: '3em',
              '@media (max-width: 768px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1em',
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              }}
            >
              <ImageContainer sx={{ padding: '1.3em' }}>
                <img src={Location} height={'28px'} />
              </ImageContainer>
              <div>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                  Location
                </Typography>
                <Typography
                  sx={{
                    color: 'gray',
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#137efb',
                    },
                    fontSize: '18px',
                  }}
                >
                  Perth, Australia
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1em',
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              }}
            >
              <ImageContainer sx={{ padding: '1.3em' }}>
                <img src={Envelope} height={'28px'} />
              </ImageContainer>
              <Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                  Mail
                </Typography>
                <Typography
                  component="a"
                  href="mailto:sudosanam@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#137efb',
                    },
                    color: 'gray',
                    fontSize: '18px',
                    textDecoration: 'none',
                  }}
                >
                  sudosanam@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <div></div>
      </Box>
    </Box>
  );
}
