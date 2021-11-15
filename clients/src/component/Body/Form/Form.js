import React,{useState} from 'react'

import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {  makeStyles } from "@material-ui/core";
import { createRecipe } from '../../../actions/recipes'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

const useeStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow:'scroll',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      marginLeft:'25px',
      marginRight:'25px',
    },
    absolute: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
      
    },
    file:{
      bottom: theme.spacing(2),
    }
  
  }));
  

const Form = () => {
    const [recipeData, setRecipeData] = useState({
        author: '', title:'', recipe:'', ingredient:'', picture:''
    })
    
    const classes = useeStyles();

    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'white',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    //   };
    
    const handleSubmit =(e) => {
        e.preventDefault()

        dispatch(createRecipe(recipeData))

        clear()
        setTimeout(handleOpen, 1500)
        
    }
    const clear = () => {
        setRecipeData({
            author: '', title:'', recipe:'', ingredient:'', picture:''
        })
    }
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <Paper>
           
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.paper}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm !!!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Recipe Submitted successfully
          </Typography>
          <Button variant="contained" color="primary" size="large" fullWidth onClick={handleClose}>OK</Button>
        </Box>
      </Modal>
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '90vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={3}
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={9} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <EditOutlinedIcon />
            </Avatar>
            <Typography component="h5" variant="h5">
              Add Your Recipe here
            </Typography>
            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}> */}
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              
               <TextField 
                 name="author"
                 variant="outlined" 
                 margin="normal"
                 required
                 label="Author"  
                 fullWidth 
                 value={recipeData.author}
                 onChange={(e)=> setRecipeData({...recipeData,author: e.target.value})}
                />
                <TextField 
                 name="title"
                 variant="outlined" 
                 margin="normal"
                 required
                 label="Title"  
                 fullWidth 
                 value={recipeData.title}
                 onChange={(e)=> setRecipeData({...recipeData,title: e.target.value})}
                />
                <TextField 
                 name="ingredient"
                 variant="outlined"
                 margin="normal"
                 required 
                 label="Ingreadient"  
                 fullWidth 
                 value={recipeData.ingredient}
                 onChange={(e)=> setRecipeData({...recipeData,ingredient: e.target.value.split(',')})}
                />
                 <TextField 
                 name="recipe"
                 variant="outlined"
                 margin="normal"
                 multiline
                 required 
                 label="Recipe"  
                 fullWidth 
                 value={recipeData.recipe}
                 onChange={(e)=> setRecipeData({...recipeData,recipe: e.target.value})}
                />
               
                <FileBase 
                 type="file"
                 multiple={false}
                 onDone= {({base64})=> setRecipeData({...recipeData, picture:base64})}
                 sx={{ margin: '10px' }}
                />
                <Button variant="contained" color="primary" size="large" fullWidth type="submit" sx={{ mt: 1, mb: 1 }}>Submit</Button>
                <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear} sx={{ mt: 1, mb: 2 }}>Clear</Button>


              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              */}
            </form>
           
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
        </Paper>
    )
}

export default Form
