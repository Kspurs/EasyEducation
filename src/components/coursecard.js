import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
export default function MediaCard({ coursename}) {
  const cld = new Cloudinary({
    cloud:{
      cloudName:"dkehsqtv6"
    }  
  })
  const image=cld.image('_avatar')
  return (
    <Card sx={{ maxWidth: 200,display:'inline-block',mr:'20px' }}>
    <CardContent>
        <CardMedia>
          <StaticImage src='../images/icon.png'></StaticImage>
        </CardMedia>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'20px'}} href="/courseinfo">
          {coursename}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/courseinfo' state={{coursename:coursename}}>查看详情</Link>
      </CardActions>
    </Card>
  );
}