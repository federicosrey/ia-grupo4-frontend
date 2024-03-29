import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { /*mainListItems, secondaryListItems,*/ secondaryListItems, tertiaryListItems } from './listItems';
import AlertDialog from './AlertDialog';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';
import {Link as Linkear} from 'react-router-dom';
import { useHistory } from 'react-router';

import swal from "sweetalert";



//importo controller

import { agregarMovimiento } from "../controller/miApp.controller"


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
  
  const [cuilcuit, setcuilcuit] = React.useState('')
  const [tarjeta, setTarjeta] = React.useState('')
  const [monto, setMonto] = React.useState('');
  const [codSeguridad, setCodSeguridad] = React.useState('');
  const history = useHistory();

  const handleTarjeta = (event) => {
    setTarjeta(event.target.value);
  }
  
  const handlecuilcuit = (event) => {
    setcuilcuit(event.target.value);
  }
  
  const handleMonto= (event) => {
    setMonto(event.target.value);
  }

  const handleCodSeguridad= (event) => {
    setCodSeguridad(event.target.value);
  }

  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }
    return true;
  };

  const agregarMov = async function () {
    let archivoMovimiento = false;
    let cuilcuitneg = localStorage.getItem("cuilcuit");
    
    archivoMovimiento = await agregarMovimiento (cuilcuit, cuilcuitneg, tarjeta, codSeguridad, monto);
    console.log(archivoMovimiento);
    if(archivoMovimiento.status === 201){
      swal("TRANSACCION OK", archivoMovimiento.message + "\nTicket: "+archivoMovimiento.data, "success");
      setTimeout(() => {
        history.push({
          pathname: "/nmovimientos",
        });
      }, 1300);
    }else{
      swal("TRANSACCION RECHAZADA", archivoMovimiento.message, "warning");
      setTimeout(() => {
        // history.push({
        //   pathname: "/cobrar",
        // });
      }, 1300);
    }  
  }

  const cobrar = () => {
    if (!isEmpty(cuilcuit) && !isEmpty(tarjeta) && !isEmpty(monto) && !isEmpty(monto)) {
      agregarMov();
    } else {
      swal(" ", "COMPLETAR TODOS LOS DATOS", "warning");
    }
  };

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
                label="DNI/CUIL/CUT"
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
                label="NUMERO TARJETA"
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
                name="codseguridad"
                label="CODIGO SEGURIDAD"
                type="Number"
                id="codseguridad"
                
                inputProps={{
                  onChange: (event) => handleCodSeguridad(event),
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="monto"
                label="MONTO"
                type="Number"
                id="monto"
                
                inputProps={{
                  onChange: (event) => handleMonto(event),
                }}
              />
            </Grid>
            
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              
               <Button fullWidth variant="contained" color="primary" onClick={cobrar}>
                Cobrar
              </Button>
              
              </Grid>

              
              
              
              <Grid item xs={12} sm={6}> 
                <Linkear  style={{textDecoration:'none'}} to = '/ndash'> 
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Cancelar
                  </Button>
                </Linkear>
              </Grid>
            </Grid>
          
          </Grid>
          
          
        </form>
      </div>
     
    </Container>
      </main>

      
      
    </div>
    
    
  );
}