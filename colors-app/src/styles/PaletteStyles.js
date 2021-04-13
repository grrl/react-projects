import sizes from './sizes';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  colors: {
    height: '90%',
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: 1,
    backgroundColor: 'black',
    '& a': {
      color: 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px' /* half width*/,
      marginTop: '-15px' /* half height*/,
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255,255,255,0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      border: 'none',
      textDecoration: 'none',
      textTransform: 'uppercase',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.33%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
};

export default styles;
