import React,{useState} from 'react'
import { Typography,Button, AppBar, Container, Grow, Grid, TextField} from '@material-ui/core'
import {useSelector} from 'react-redux'
import Recipes from '../Recipes/Recipes'
import useStyles from './styles'
import ApiRecipe from '../ApiRecipe/ApiRecipe'

import SearchIcon from '@mui/icons-material/Search';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {  makeStyles } from "@material-ui/core/styles";


const useeStyles = makeStyles((theme) => ({
    modal: {
        position:'absolute',
        top:'10%',
        left:'10%',
        overflow:'scroll',
        height:'100%',
        width:'80%',
        display:'block'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      marginLeft:'25px',
      marginRight:'25px',
      overflow:'scroll',
    },
    absolute: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
      
    },
  
  }));


const GetRecipe = () => {
    const classes = useStyles();
    const [filter, setFilter] = useState([])
    const recipes = useSelector((state)=>state.recipes)
    const inputHandler = (e) => {
        console.log(e.target.value);
        let keyword = e.target.value
        var filtered = recipes.filter((item)=>{
            return item.author.indexOf(keyword) > -1
        })

        console.log(filtered);
        setFilter(filtered)
    }
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classe = useeStyles();
    console.log(recipes);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">The Foodie</Typography>
               <div className={classes.text}>
               <SearchIcon className={classes.search} />
                <TextField 
                 name="filter"
                 label="Search here..."
                 onChange={inputHandler}
                 
                />
               </div>
                
            </AppBar>
            <Grow in>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Recipes recipes={filter.length===0 ? recipes : filter} />
                    </Grid>
                    
                </Grid>
                
            </Grow>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Button className={classes.button} variant="contained" color="primary" size="large" fullWidth onClick={handleOpen}>Explore Additional Recipes</Button>

            <Modal
        open={open}
        onClose={handleClose}
        className={classe.modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classe.paper}>
          
         
          <ApiRecipe className={classe.paper} />

          <Button variant="contained" color="primary" size="large" fullWidth onClick={handleClose}>OK</Button>
        </Box>
      </Modal>

        </Container>
    )
}

export default GetRecipe
