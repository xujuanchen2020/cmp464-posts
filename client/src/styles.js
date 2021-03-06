import { makeStyles } from '@material-ui/core';

export default makeStyles(()=>({ // jss, callback function return an object
    appBar:{
        borderRadius: 5,
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(245,245,220,0.9)',
    },

    heading:{
        color: 'rgb(0,0,100)',
        fontFamily: "cursive",
    },

    image: {
        marginTop: '10px',
        marginRight: '40px',
        paddingBottom: '10px',
    }
}))