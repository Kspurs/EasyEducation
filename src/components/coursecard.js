import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

export default function MediaCard({ coursename}) {
  const cld = new Cloudinary({
    cloud:{
      cloudName:"dkehsqtv6"
    }  
  })
  const image=cld.image('_avatar')
  return (
    <Card sx={{ maxWidth: 300 }}>
    <CardContent>
        <CardMedia>
          <AdvancedImage cldImg={image} ></AdvancedImage>
        </CardMedia>
        <Typography gutterBottom variant="h5" component="div" href="/courseinfo">
          {coursename}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/courseinfo/${coursename}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}