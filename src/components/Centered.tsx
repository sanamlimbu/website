import { Box, SxProps, Theme } from '@mui/material';

interface CenteredProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  id?: string;
}

export default function Centered({ children, sx, id }: CenteredProps) {
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
