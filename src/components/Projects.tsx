import { GitHub, Link } from '@mui/icons-material';
import { Box, Theme, Typography, useMediaQuery } from '@mui/material';
import Centered from './Centered';

interface IProject {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  techs: string[];
}

const projects: IProject[] = [
  {
    title: 'MIG',
    description:
      'Web-based chat application, built as a learning project to explore AWS and Terraform.',
    repoUrl: 'https://github.com/sanamlimbu/mig',
    demoUrl: 'https://mig.limbu.dev',
    techs: ['React', 'Go', 'AWS', 'Terraform'],
  },
  {
    title: 'MANUNITED',
    description:
      'Terminal app that helps me track Manchester United fixtures and match results.',
    repoUrl: 'https://github.com/sanamlimbu/manunited',
    techs: ['Go'],
  },
  {
    title: 'ROSTER-BOT',
    description:
      "My personal Telegram bot that sends me my partner's roster every morning",
    repoUrl: 'https://github.com/sanamlimbu/roster-bot',
    techs: ['Go', 'AWS', 'Terraform'],
  },
];

export default function Projects({ id }: { id: string }) {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  return (
    <Centered
      id={id}
      sx={{
        backgroundColor: '#f9f9f9',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '62em',
          padding: '6em 2em',
          width: '100%',
          gap: '3em',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: isMediumScreen ? 'center' : 'space-between',
            textAlign: isMediumScreen ? 'center' : 'initial',
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
              PORTFOLIO
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: '0.5em',
                fontWeight: 'bold',
              }}
            >
              Each project is a unique piece of development 🧩
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: isMediumScreen ? 'center' : 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2em',
          }}
        >
          {projects.map((p) => (
            <Project key={p.title} project={p} />
          ))}
        </Box>
      </Box>
    </Centered>
  );
}

const Project = ({ project }: { project: IProject }) => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '24px',
        boxShadow: '0 0 10px rgba(0,0,0,.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em',
        gap: '2em',
        textAlign: isMediumScreen ? 'center' : 'initial',
      }}
    >
      <Typography sx={{ fontWeight: 'bold' }}>{project.title}</Typography>
      <ProjectDescription description={project.description} />
      <Centered sx={{ gap: '1em', flexWrap: 'wrap' }}>
        {project.techs.map((t) => (
          <Tech key={t} title={t} />
        ))}
      </Centered>
      <Centered
        sx={{
          gap: '1em',
        }}
      >
        <ProjectLink url={project.repoUrl} type="Repo" />
        {project.demoUrl && <ProjectLink url={project.demoUrl} type="Demo" />}
      </Centered>
    </Box>
  );
};

export const ProjectDescription = ({
  description,
}: {
  description: string;
}) => {
  return (
    <Typography
      sx={{
        color: 'rgb(85, 85, 85)',
        fontWeight: '500',
        fontSize: '17px',
        textAlign: 'center',
        maxWidth: '22em',
      }}
    >
      {description}
    </Typography>
  );
};

const Tech = ({ title }: { title: string }) => {
  return (
    <Typography
      sx={{
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,.1)',
        fontWeight: '600',
        padding: '0.5em 1em',
      }}
    >
      {title}
    </Typography>
  );
};

const ProjectLink = ({ url, type }: { url: string; type: 'Repo' | 'Demo' }) => {
  return (
    <Typography
      component="a"
      href={url}
      target="_blank"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        fontWeight: 'bold',
        '&:hover': {
          color: '#137efb',
        },
      }}
    >
      <span> {type === 'Repo' ? 'Code' : 'Demo'}</span>{' '}
      {type === 'Repo' ? (
        <GitHub sx={{ marginLeft: '0.2em', marginRight: '1em' }} />
      ) : (
        <Link sx={{ marginLeft: '0.2em', marginRight: '1em' }} />
      )}
    </Typography>
  );
};
