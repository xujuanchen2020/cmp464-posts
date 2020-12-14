import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    paddingTop: '57%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundBlendMode: 'darken',
  },

  border: {
    border: 'solid',
  },

  fullHeightCard: {
    height: '100%',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
    backgroundColor: 'rgba(245,245,220,0.9)',
  },

  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'beige',
  },

  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'beige',
  },

  grid: {
    display: 'flex',
  },

  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },

  title: {
    padding: '0 15px',
  },

  cardActions: {
    padding: '0 16px 16px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  
});