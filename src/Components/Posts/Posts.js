import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      width: "300px" ,
      margin: "1px" ,
      height: "300px" ,
      display: "inline-block" ,
      boxSizing: "border-box" ,
      padding: "40px 20px 0 20px" ,
    },
    title: {
      fontSize: 20,
    },

  });

const Posts = (props) => {
    const classes = useStyles();
    // DESTRUCTURING TITLE FROM PROPS
    const {title , id} = props.post;
   
  

    return (
        <>
        
        <CssBaseline />
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
         {title}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/posts/${id}`}>  <Button size="large" variant="contained" color="primary">Learn More </Button></Link>
      </CardActions>
    </Card>
       
     
        </>
    );
};

export default Posts;