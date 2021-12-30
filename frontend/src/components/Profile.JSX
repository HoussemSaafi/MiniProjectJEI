import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Profile(props)
{
    const user=props.user;
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={user.img}
              alt="image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {user.fName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.class}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}
export default Profile