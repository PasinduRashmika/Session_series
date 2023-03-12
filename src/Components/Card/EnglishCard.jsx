import React,{useEffect} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sessionCard1 from '../../Images/img1.png';
import "./cardElemets.css";
export default function MediaCard(props) {
  return (
    <div className="cover" >
        
    {props.data.map((details) => {
        return(
            <div style={{margin: '2%'}}>
                
        
            <Card sx={{ maxWidth: 400, minHeight:450,margin:'10% 3%'}} >
              <CardMedia
                component="img"
                height="350"
                image={sessionCard1}
                alt="Chevrolet"
              />
              <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                  {details.day}
                  
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                  {details.name}
                  
                </Typography>
                <Typography variant="body2" color="text.secondary" fontSize="15px">
                {details.speaker}
                
                </Typography>
                <Typography variant="body2" color="text.secondary" fontSize="15px">
                {details.desc}
                
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">Link</Button>
                <Button size="medium">Learn More</Button>
              </CardActions>
            </Card>  
            </div>
            )} 
     )}
        </div>
);
};