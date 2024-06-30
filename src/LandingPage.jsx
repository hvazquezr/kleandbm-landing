import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Button } from '@mui/material';
import './LandingPage.css'; // Import the CSS file for styling

// Import your logos
import appLogo from '../public/kleandbmaiBlue.svg';
import dbLogo1 from '../public/Snowflake_Logo.svg';
import dbLogo2 from '../public/Databricks_Logo.svg';
import dbLogo3 from '../public/SQLServer_Logo.png';
import dbLogo4 from '../public/Mysql_Logo.svg';


const LandingPage = () => {
  return (
    <>
    <CssBaseline />
    <div className="landing-page">
      <div className="main-content">
        <img src={appLogo} alt="App Logo" className="app-logo" />
        <h1 className="headline"><span class="main-color">AI-Accelerated</span><br></br>Database Modeling</h1>
        <Button
          variant="outlined"
          component="a"
          href="https://app.kleandbm.ai/dashboard"
          size="large"
        >Get Started</Button>
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