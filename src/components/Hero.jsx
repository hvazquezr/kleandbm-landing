import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TypeAnimation } from 'react-type-animation';


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack direction="column" spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            AI-Accelerated
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) => theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Database Modeling
            </Typography>
          </Typography>
          <Typography variant="overline" textAlign="center" color="text.secondary">
          <TypeAnimation
              preRenderFirstString={false}
              sequence={[
              500,
              'What were last quarter\'s top-selling products?', 
              1000,
              'What\'s the connection between marketing spend and website traffic?',
              1000,
              'What possibilities await when you accelerate database modeling with AI?',
              500,
              ]}
              speed={50}
              style={{ fontSize: '1em', height:80, display: 'block' }}
              repeat={0}
          />
          </Typography>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/Hero.png")'
                : 'url("/Hero.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
