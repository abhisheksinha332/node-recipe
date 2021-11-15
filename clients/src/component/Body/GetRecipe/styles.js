import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    appBar:{
        borderRadius:15,
        margin:'10px 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0 20 0 20'

    },
    heading:{
        color:'rgba(0,183,255,1)',
        paddingLeft:'30px',
        fontFamily:'Sassy Frass',
        fontWeight:700,
        letterSpacing: '3px',
        
    },
    button:{
        marginTop:'15px'
    },
    text:{
        paddingRight:'30px'
    },
    search:{
        paddingTop:'20px',
    },
    
    
}))