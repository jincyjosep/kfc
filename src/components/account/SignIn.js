import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SignIn() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Grid container spacing={2}>
    <Grid item xs={4}>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 540 }}>
      <CardHeader
        style={{paddingLeft:"180px"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        title="Sign In / Sign up"
      />
      <img src="/KFC_logo_KFC.svg" alt='' style={{height:"20px", paddingLeft:"240px"}}/>
      <CardContent>
        <Typography 
            variant="body10" 
            color="text.secondary" 
            style={{ fontWeight: "800", fontFamily:"American Purpose", letterSpacing:"-1px", paddingLeft:"15px",}}
        >
            LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <input id="standard-email" name="email" label={<span style={{fontFamily:"American Purpose"}}>Email</span>} variant="standard" style={{width:"400px", marginLeft:"50px"}}/>
        </Grid>
        <Grid item xs={12}>
        <TextField id="standard-password" name="password" label={<span style={{fontFamily:"American Purpose"}}>Password</span>} variant="standard" style={{width:"400px", marginLeft:"50px"}}/>
        </Grid>
        <Grid item xs={12}>
        <Typography
              variant="body10" 
              color="text.secondary" 
              style={{ fontWeight: "800", fontFamily:"American Purpose", letterSpacing:"-1px", paddingLeft:"15px",}}
            >
                By “logging in to KFC”, you agree to our 
                <a 
                 style={{color:"black"}} 
                 href="/"
                >
                    Privacy Policy
                </a> and 
                <a  
                  style={{color:"black"}} 
                  href="/"
                >
                    Terms & Conditions.   
                </a>
            </Typography>
        </Grid>
        <Grid item xs={5}>
          <hr/>
        </Grid>
        <Grid item xs={1}>
          or
        </Grid>
        <Grid item xs={6}>
          <hr/>
        </Grid>
        <Grid item xs={12}>
        <button type="button" class="btn btn-outline-secondary" style={{width:"520px"}}>
        <Link className="nav-link active" aria-current="page" to="/">
          Skip,Continue As Guest
        </Link>
        </button>
        </Grid>
        </Grid>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>Method:</Typography>
            </CardContent>
        </Collapse>
        </Card>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={8}>
        </Grid>
        </Grid>
    </>
  );
}