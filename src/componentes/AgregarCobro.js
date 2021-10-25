import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
//import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
//import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import { /*mainListItems, secondaryListItems,*/ secondaryListItems, tertiaryListItems } from './listItems';
//import Chart from './Chart';
//import Deposits from './Deposits';
//import Orders from './Orders';
import AlertDialog from './AlertDialog';
//import TablaColapsable from './TablaColapsable';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';
import {Link as Linkear} from 'react-router-dom';
import { useHistory } from 'react-router';

//importo controller

import { agregarMovimiento } from "../controller/miApp.controller"

/*function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}*/

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  user: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#c6a700',
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AgregarCobro() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  
  const [cuilcuit, setcuilcuit] = React.useState('')
  const [tarjeta, setTarjeta] = React.useState('')
  const [monto, setMonto] = React.useState('');
 const history = useHistory()

  const handleTarjeta = (event) => {
    setTarjeta(event.target.value);
  }
  
  const handlecuilcuit = (event) => {
    setcuilcuit(event.target.value);
  }
  
  const handleMonto= (event) => {
    setMonto(event.target.value);
  }

  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }
    return true;
  };

  const agregarMov = async function () {
    let archivoMovimiento = false;

    

    //if (!isEmpty(nombre) && validateValidEmail(email) && !isEmpty(lastname) && !isEmpty(cuilcuit) && !isEmpty(password)) {
      archivoMovimiento = await agregarMovimiento (cuilcuit, '37835366', tarjeta, monto);
    //}
   //else {
    //  alert("Completar todos los datos.")
    //}
    return archivoMovimiento;
  }

  const redirect = async () => {
    const ok = await agregarMov()
    
  }


 



  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} style={{ background: 'black' }}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            G I P E Y | NEGOCIOS
          </Typography>
          
          <AlertDialog>

          </AlertDialog>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{secondaryListItems}</List>
        <Divider />
        
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.user}>
      <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cuilcuit"
                label="cuilcuit"
                name="cuilcuit"
                autoComplete="cuilcuit"
                inputProps={{
                  onChange: (event) => handlecuilcuit(event),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="numeroTarjeta"
                label="Número Tarjeta"
                name="NumeroTarjeta"
                autoComplete=""
                inputProps={{
                  onChange: (event) => handleTarjeta(event),
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="monto"
                label="Monto"
                type="Number"
                id="monto"
                
                inputProps={{
                  onChange: (event) => handleMonto(event),
                }}
              />
            </Grid>
            
            <Linkear  style={{textDecoration:'none'}} to = '/movimientos'>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => {redirect()}}
              >
                
                Cobrar
              </Button>
              </Grid>
            <Grid item xs={12} sm={6}>  
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                
                Cancelar
              </Button>
              </Grid>
              </Grid>
          </Linkear>
          
          </Grid>
          
          
        </form>
      </div>
     
    </Container>
      </main>

      
      
    </div>
    
    
  );
}