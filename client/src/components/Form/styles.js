
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
  },

}));
