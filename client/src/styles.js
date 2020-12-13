import { makeStyles } from '@material-ui/core';

export default makeStyles(()=>({
    appBar:{
        borderRadius: 5,
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'beige'
    },

    heading:{
        color: 'rgb(0,0,100)',
    },

    image: {
        marginTop: '10px',
        marginRight: '40px',
        paddingBottom: '10px',
    }
}))