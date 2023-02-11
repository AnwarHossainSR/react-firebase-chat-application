import SendIcon from '@mui/icons-material/Send';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { useEffect, useRef, useState } from 'react';

const BottomBar = () => {
  const emojiRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState('');

  const addEmoji = (e) => {
    let sym = e.unified.split('-');
    let codesArray = [];
    sym.forEach((el) => codesArray.push(`0x${el}`));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const handleClickOutside = (e) => {
    if (emojiRef.current && !emojiRef.current.contains(e.target)) {
      setShowEmojis(false);
    }
  };

  useEffect(() => {
    //close the emoji picker when clicked outside
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Stack
      sx={{
        height: '10%',
        borderTop: '1px solid #36404a',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
          //justifyContent: 'space-between',
        }}
      >
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
            width: '60%',
            ml: 2,
            borderTop: '1px solid #36404a',
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            placeholder="Write a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            InputProps={{ disableUnderline: true }}
            sx={{
              input: {
                color: '#A6AECB',
                px: 4,
              },
            }}
          />
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Stack ref={emojiRef}>
            {showEmojis && (
              <Picker
                onSelect={addEmoji}
                theme="dark"
                style={{
                  position: 'absolute',
                  top: '-13rem',
                  left: '48%',
                  transform: 'translate(-50%, -50%)',
                }}
                onClickOutside={() => setShowEmojis(false)}
              />
            )}
            <Typography
              onClick={() => setShowEmojis(!showEmojis)}
              cursor="pointer"
            >
              <span role="img" aria-label="so cool">
                😀
              </span>
            </Typography>
          </Stack>
          <Button
            sx={{
              backgroundColor: '#6159CB',
              py: 1,
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
            }}
          >
            <SendIcon
              sx={{
                color: '#fff',
              }}
            />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BottomBar;
