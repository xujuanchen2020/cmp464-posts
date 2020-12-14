
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  paper: {
    backgroundColor: 'rgba(245,245,220,0.9)',
    padding: theme.spacing(3),
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  fileInput: {
    width: '95%',
    margin: '15px 0',
  },

  buttonSubmit: {
    marginBottom: 15,
    color: 'beige',
    backgroundColor: 'RGBA(0,0,60,0.9)',
  },

  buttonClear: {
    marginBottom: 15,
    color: 'beige',
    backgroundColor: 'RGBA(204,48,10,0.9)',
  },

}));
