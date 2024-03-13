import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
];

const darkLogos = [
  'Snowflake_Logo.svg',
  'Databricks_Logo.svg',
  'Mysql_Logo.svg',
  'SQLServer_Logo.png'
];

const logoStyle = {
  width: 'auto',
  height: '35px',
  margin: '0 32px',
  opacity: 0.6,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Supported Data Platforms
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 5}}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt='Company Logo'
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
