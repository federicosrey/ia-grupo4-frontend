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
import { /*mainListItems, secondaryListItems,*/ tertiaryListItems } from './listItems';
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
//import { useHistory } from 'react-router';
import { agregarTarjeta } from '../controller/miApp.controller';

//importo controller

//import { guardarUsuario } from "../controller/miApp.controller"

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

export default function AgregarUsuario() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  

 const [descripcion, setDescripcion] = React.useState('')
 const [limite, setLimite] = React.useState('');
 const [prefijo, setPrefijo] = React.useState('');
  

  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  }
  const handleLimite = (event) => {
    setLimite(event.target.value);
  }

  const handlePrefijo = (event) => {
    setPrefijo(event.target.value);
  }

  const subirUsuario = async function () {
    let archivoUsuarios = false;
    console.log("subir usuario");

   // if (!isEmpty(nombre) && validateValidEmail(email) && !isEmpty(lastname) && !isEmpty(cuilcuit) && !isEmpty(password)) {
      archivoUsuarios = await agregarTarjeta (descripcion, limite, prefijo)
    //}
    //else {
    //  alert("Completar todos los datos.")
    //}
    setOpen(false);
  }

  const redirect = async () => {
    const ok = await subirUsuario()
    /* if (ok) {
      history.push("/lusuario")
    } */
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
            G I P E Y
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
        <List>{tertiaryListItems}</List>
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
            autoFocus
            margin="dense"
            id="name"
            label="Descripción"
            type="email"
            fullWidth
            onChange = {handleDescripcion}
          />
          
            </Grid>

            <Grid item xs={12}>
            <TextField
            margin="dense"
            id="total"
            label="Límite"
            type="number"
            fullWidth
            onChange = {handleLimite}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            margin="dense"
            id="prefijo"
            label="Prefijo"
            type="number"
            fullWidth
            onChange = {handlePrefijo}
            />
            </Grid>
            
            <Linkear  style={{textDecoration:'none'}} to = '/ltarjetas'>
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
                
                Agregar
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