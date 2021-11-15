import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    media:{
        height:'30px',
        paddingTop:'56.25%',
        backgroundColor:'rgba(0,0,0,0.1)',
        backgroundBlendMode:'darken',
        maxWidth:'400px',
       
    },
    border:{
        border:'solid',
    },
    fullHeightCard:{
        height:'100%',
    },
    // card: {
    //     display:'flex',
    //     flexDirection:'column',
    //     justifyContent:'space-around',
    //     borderRadius:'15px',
    //     height:'100%',
    //     position:'relative',
    //     minWidth: '40%',
    //     maxWidth: '42%',
    //     alignTtems: 'center',
    //     margin: '20px'
    // },
    cards: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        borderRadius:'15px',
        height:'100%',
        position:'relative',
        minWidth: '40%',
        maxWidth: '42%',
        alignTtems: 'center',
        margin: '20px'
    },
    card: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        borderRadius:'15px',
        height:'100%',
        position:'relative',
        maxWidth:'400px',
       
    },
    overlay:{
        position:'absolute',
        top:'20px',
        left:'20px',
        color:'white',
    },
    overlay2:{
        position:'absolute',
        top:'20px',
        right:'20px',
        color:'white',
    },
    details:{
        display:'flex',
        justifyContent:'space-between',
        margin:'20px',
    },
    authorAndTime:{
        display:'flex',
        padding:'0 16 16 0',
        justifyContent:'space-between'
    },
    ing: {
        padding:'10px 16px'
    },
    details1:{
        
        justifyContent:'space-between',
        margin:'10px 20px ',
    },
    recipe:{
        fontSize:'18px',
    },
    title:{
        padding:'0 16px',
       letterSpacing:'2px',
       fontWeight:200,
       color:'#eeebf2',

    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display:'flex',
        justifyContent:'space-between',
    },
    titleContainer: {
        background:'#6220bd',
        
    },
    author: {
        fontSize:'12px',
        padding:'0 16px',
        color:'#e6e6e6'
    }
})