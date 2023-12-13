import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WelcomeCard = () => {
  return (
    <div>
      <Card variant="elevation">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {' '}
            Welcome Contributors{' '}
          </Typography>
          <Typography variant="body1">
            We appreciate your contributions to our project. Thank you for being
            a part of our community! Now start working on the project
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeCard;
