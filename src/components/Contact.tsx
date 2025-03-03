import { Box, Theme, Typography, useMediaQuery } from '@mui/material';
import Envelope from '../assets/envelope.svg';
import Location from '../assets/location.svg';
import Centered from './Centered';
import { ImageContainer } from './Home';

export default function Contact({ id }: { id: string }) {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );
  return (
    <Centered
      id={id}
      sx={{
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '62em',
          padding: '6em 2em',
          width: '100%',
          flexDirection: isSmallScreen ? 'column' : 'row',
          textAlign: isSmallScreen ? 'center' : 'initial',
          alignItems: isSmallScreen ? 'center' : 'initial',
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
              flexDirection: isSmallScreen ? 'column' : 'row',
              alignItems: isSmallScreen ? 'center' : 'initial',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '1em',
                alignItems: 'center',
                flexDirection: isSmallScreen ? 'column' : 'row',
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
                flexDirection: isSmallScreen ? 'column' : 'row',
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
      </Box>
    </Centered>
  );
}
