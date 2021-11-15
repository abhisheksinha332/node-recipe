import React from 'react'
import  {useSelector} from 'react-redux'
import { Grid, CircularProgress, LinearProgress, TextField } from '@material-ui/core'
import Recipe from './Recipe/Recipe'

const Recipes = ({recipes}) => {
    
    // const recipes = useSelector((state)=>state.recipes)

    // console.log(recipes);
    return (
       !recipes.length ? <LinearProgress /> : (
           <Grid container alignItems="stretch" spacing={3}>
               
               {recipes.map((recipe,index)=>(
                   <Grid key={index} item xs={12} sm={4}>
                       <Recipe recipe={recipe} />
                   </Grid>
               ))}
               
           </Grid>
       )
    )
}

export default Recipes
