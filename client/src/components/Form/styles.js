
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  paper: {
    background: 'beige',
    padding: theme.spacing(2),
    backgroundBlendMode: 'darken',
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  fileInput: {
    width: '95%',
    margin: '10px 0',
  },

  buttonSubmit: {
    marginBottom: 10,
    color: 'beige',
    backgroundColor: 'RGBA(0,0,60,0.9)',
  },

  buttonClear: {
    marginBottom: 10,
    color: 'beige',
    backgroundColor: 'RGBA(204,48,10,0.9)',
  },

}));
