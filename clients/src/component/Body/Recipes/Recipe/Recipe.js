import React from 'react'
import { Card,Paper, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles'
import { deleteRecipe } from '../../../../actions/recipes'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


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

 
 

const Recipe = ({recipe}) => {
    var num = 0;
    const dispatch = useDispatch();
    const classes = useStyles();


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    }  




    return (
        <Paper className={classes.card}  elevation={6}>
        <Card className={classes.card}>
            <div className={classes.titleContainer}>
            <div className={classes.del}>
            <Typography variant="h6" className={classes.title} >{recipe.title}</Typography>
            <DeleteIcon onClick={()=>dispatch(deleteRecipe(recipe._id))} className={classes.delete} />
            </div>
            
            <div className={classes.authorAndTime}>
            <Typography variant="body2" className={classes.author}>By: {recipe.author}</Typography>
            <Typography variant="body2" className={classes.author}>{moment(recipe.createdAt).fromNow()}</Typography>
            </div>
            <CardMedia className={classes.media} image={recipe.picture} title={Recipe.title} />
            <div className={classes.back}> <CardContent>
            <div className={classes.ing}>
                <h3>Ingredients:</h3>
                <br/>
               {recipe.ingredient.map((ing,index)=>(<h6 key={index}>{`${++num}. ${ing} `} </h6>))}
            </div>
            </CardContent></div>
           
            </div>
          
            <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{recipe.recipe}</Typography>
         
        </CardContent>
      </Collapse>




        </Card>
        </Paper>
    )
}

export default Recipe
