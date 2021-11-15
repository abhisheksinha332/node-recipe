import React from 'react';
import { Card,Paper, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

import useStyles from './styles'
const Recipe = ({title, source, image, ingredients, url,food}) => {
    const classes = useStyles();
    return(
     
             <Paper className={classes.cards}  elevation={6}>
        <Card className={classes.card}>
        <CardActionArea href={url} target="_blank">
            <div className={classes.titleContainer}>
            <Typography variant="h6" className={classes.title} >{title}</Typography>
            <div className={classes.authorAndTime}>
             <Typography variant="body2" className={classes.author}>{source}</Typography>
           {/* <Typography variant="body2" className={classes.author}>{moment(recipe.createdAt).fromNow()}</Typography> */}
            </div>
            
            </div>
            {/* <img className={classes.media} src={recipe.picture} height="250px" width="100%"/> */}
            <CardMedia className={classes.media} image={image} title='img' />
           
            
            <CardContent>
            <div className={classes.ing}>
               {/* <Typography variant="body2" color="textSecondary">{recipe.ingredient.map((ing,index)=>(<h6 key={index}>{`${++num}. ${ing} `} </h6>))}</Typography> */}
               <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            </div>
            </CardContent>
            </CardActionArea>
           
        </Card>
        </Paper>
    
    );
}

export default Recipe;