import SearchIcon from '@mui/icons-material/Search';
import { Stack, TextField } from '@mui/material';

const Search = () => {
  return (
    <Stack
      sx={{
        //p: 1,
        backgroundColor: '#36404A',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        p: 0.5,
        gap: 1,
        borderRadius: 1,
      }}
    >
      <SearchIcon />
      <TextField
        fullWidth
        variant="standard"
        placeholder="search users"
        name="name"
        // onChange={handleChange}
        autoComplete="off"
        InputProps={{ disableUnderline: true }}
        sx={{
          input: { color: '#A6AECB' },
        }}
      />
    </Stack>
  );
};

export default Search;
