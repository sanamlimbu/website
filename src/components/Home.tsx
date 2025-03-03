import {
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { styled, Theme } from '@mui/system';
import AWS from '../assets/aws.svg';
import CSS from '../assets/css.svg';
import GitHub from '../assets/github.svg';
import Go from '../assets/go.svg';
import HTML from '../assets/html.svg';
import JavaScript from '../assets/javascript.svg';
import LinkedIn from '../assets/linkedin.svg';
import Postgres from '../assets/postgres.svg';
import React from '../assets/react.svg';
import TypeScript from '../assets/typescript.svg';
import Waving from '../assets/waving.png';
import Centered from './Centered';
export default function Home({ id }: { id: string }) {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  const isExtraLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <Centered
      id={id}
      sx={{
        backgroundColor: '#f9f9f9',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '62em',
          width: '100%',
          padding: isSmallScreen
            ? '9em 2em 5em 2em'
            : isMediumScreen
            ? '9em 2em 6em 2em'
            : isLargeScreen
            ? '11em 2em 6em 2em'
            : isExtraLargeScreen
            ? '13em 2em 9em 2em'
            : '13em 2em 9em 2em',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '4em',
            flexWrap: 'wrap-reverse',
            '@media (max-width: 978px)': {
              textAlign: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <Box>
            <Typography
              variant={isMediumScreen ? 'h4' : 'h2'}
              fontWeight="bold"
              sx={{
                display: 'inline-flex',
                gap: '0.5em',
                overflow: 'wrap',
                alignItems: 'center',
              }}
            >
              Full Stack Software Developer
              {isMediumScreen ? (
                <img src={Waving} height={'40em'} />
              ) : (
                <img src={Waving} height={'70em'} />
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
                marginTop: '3em',
                color: 'rgb(85, 85, 85)',
                marginBottom: '3em',
              }}
            >
              Hi, I'm Sanam Limbu. A passionate Software Developer based in
              Perth, Australia. 📍
              <br />
              Aside from software engineering, I enjoy going to the gym, and
              watching Manchester United playing soccer.
            </Typography>
            <Typography
              sx={{
                marginTop: '1em',
              }}
            >
              <IconButton
                target="_new"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/in/sanam-limbu/`}
                sx={{
                  padding: '0',
                  '&:hover': {
                    background: 'none',
                  },
                  marginRight: '0.5em',
                }}
              >
                <img src={LinkedIn} height={'42'} />
              </IconButton>
              <IconButton
                target="_new"
                rel="noopener noreferrer"
                href={`https://github.com/sanamlimbu`}
                sx={{
                  padding: '0',
                  '&:hover': {
                    background: 'none',
                  },
                }}
              >
                <img src={GitHub} height={'42'} />
              </IconButton>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              marginBottom: '1em',
              marginTop: '3em',
              '@media (max-width: 912px)': {
                textAlign: 'center',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '0.5em',
              }}
            >
              Tech Stack
            </Typography>
            <Divider />
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '1em',
              flexWrap: 'wrap',
              marginBottom: '1em',
              '@media (max-width: 912px)': {
                justifyContent: 'center',
              },
            }}
          >
            <ImageContainer>
              <StyledImg src={HTML} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={CSS} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={JavaScript} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={React} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={Go} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={TypeScript} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={Postgres} />
            </ImageContainer>
            <ImageContainer>
              <StyledImg src={AWS} />
            </ImageContainer>
          </Box>
        </Box>
      </Box>
    </Centered>
  );
}

const StyledImg = styled('img')(() => ({
  height: '2em',
}));

export const ImageContainer = styled(Box)(() => ({
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: 'white',
  borderRadius: '50%',
  padding: '1em',
  boxShadow: '0 0 10px rgba(0,0,0,.09)',
}));
