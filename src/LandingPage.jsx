import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import './LandingPage.css'; // Import the CSS file for styling

// Import your logos
import appLogo from '/kleandbmaiBlue.svg';
import dbLogo1 from '/Snowflake_Logo.svg';
import dbLogo2 from '/Databricks_Logo.svg';
import dbLogo3 from '/SQLServer_Logo.png';
import dbLogo4 from '/Mysql_Logo.svg';

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '0px', // Squared corners
  borderWidth: '2px', // Thicker outline
  borderStyle: 'solid', // Ensure the border is solid
  fontWeight: 'bold', // Bold inner text
  fontFamily: 'Roboto, sans-serif', // Custom font family
  color: '#1cb8f5', // Custom text color
  borderColor: '#1cb8f5', // Custom border color
  '&:hover': {
    borderWidth: '2px', // Maintain thicker outline on hover
    backgroundColor: 'rgba(28, 184, 245, 0.1)', // Light background on hover
    borderColor: '#1cb8f5', // Custom border color
  },
}));


const LandingPage = () => {
  return (
    <>
    <CssBaseline />
    <div className="landing-page">
      <div className="main-content">
        <img src={appLogo} alt="App Logo" className="app-logo" />
        <h1 className="headline"><span class="main-color">AI-Accelerated</span><br></br>Database Modeling</h1>
        <CustomButton
          variant="outlined"
          component="a"
          href="https://app.kleandbm.ai/dashboard"
          size="large"
        >Get Started</CustomButton>
      </div>
      <Typography
        component="p"
        align="center"
        paddingBottom={1}
        variant="overline"
        color="lightgray"
      >
        Supported Data Platforms
      </Typography>
      <div className="footer-logos">
        <img src={dbLogo1} alt="Database Logo 1" className="db-logo" />
        <img src={dbLogo2} alt="Database Logo 2" className="db-logo" />
        <img src={dbLogo3} alt="Database Logo 3" className="db-logo" />
        <img src={dbLogo4} alt="Database Logo 4" className="db-logo" />
      </div>
    </div>
    </>
  );
};

export default LandingPage;