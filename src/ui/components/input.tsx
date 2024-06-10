import { Input, Box } from '@mui/material';

const myInput = () => {
  return (
    <Box
      sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Input placeholder="Type in here…" />
    </Box>
  );
}

export default myInput