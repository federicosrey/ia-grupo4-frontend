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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import { /*mainListItems, secondaryListItems,*/ tertiaryListItems } from './listItems';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AlertDialog from './AlertDialog';
//import TablaColapsable from './TablaColapsable';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';
import {Link as Linkear} from 'react-router-dom';

import swal from "sweetalert";
import { useHistory } from 'react-router';

//importo controller

import { guardarUsuario } from "../controller/miApp.controller"

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
  const [value, setValue] = React.useState('persona');
  const [open, setOpen] = React.useState(true);
  const [nombre, setNombre] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [cuilcuit, setcuilcuit] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('');
  const [root, setRoot] = React.useState('');
  const [DNI, setDNI] = React.useState('')
  const history = useHistory()

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleNombre = (event) => {
    setNombre(event.target.value);
  }
  const handlecuilcuit = (event) => {
    setcuilcuit(event.target.value);
  }
  const handleLastname= (event) => {
    setLastname(event.target.value);
  }
  const handlePassword= (event) => {
    setPassword(event.target.value);
  }
  const handleRoot = (event) => {
    setRoot(event.target.value)
  }

  const handleDNI = (event) => {
    setDNI(event.target.value)
  }

  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }
    return true;
  };

  const subirUsuario = async function () {
    let archivoUsuarios = false;

    const validateValidEmail = (stringToValidate) => {

      if (typeof stringToValidate !== undefined) {
        let lastAtPos = stringToValidate.lastIndexOf('@');
        let lastDotPos = stringToValidate.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && stringToValidate.indexOf('@@') === -1 && lastDotPos > 2 && (stringToValidate.length - lastDotPos) > 2)) {
          return stringToValidate.length === 0
        }
      }
      return true;
    };

    //if (!isEmpty(nombre) && validateValidEmail(email) && !isEmpty(lastname) && !isEmpty(cuilcuit) && !isEmpty(password)) {
    if (!isEmpty(nombre) && validateValidEmail(email) && !isEmpty(lastname) && !isEmpty(cuilcuit) && !isEmpty(DNI)) {
      archivoUsuarios = await guardarUsuario (nombre,lastname,email,cuilcuit,root,DNI);
      swal("TRANSACCION OK", "Usuario agregado exitosamente.", "success");
        setTimeout(() => {
          history.push({
            pathname: "/lusuarios",
           });
        }, 1300);
    }
    else {
      //alert("Completar todos los datos.")

      
        swal("DATOS INCOMPLETOS", "Complete todos los datos para continuar.", "warning");
        setTimeout(() => {
          history.push({
            pathname: "/ausuario",
           });
        }, 1300);
        
      

    }
  }

  const redirect = async () => {
    const ok = await subirUsuario()
    // if (ok) {
    //   history.push("/lusuario")
    // }    
  }


  const addUsuario = (usuario, resolve) => {
    const newUsuario = { name: usuario.name, lastname: usuario.lastname, cuilcuit: usuario.cuilcuit, email: usuario.email, password: usuario.password };
    subirUsuario(newUsuario)
    resolve()
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
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                inputProps={{
                  onChange: (event) => handleNombre(event),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
                inputProps={{
                  onChange: (event) => handleLastname(event),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                inputProps={{
                  onChange: (event) => handleEmail(event),
                }}
              />
            </Grid>
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
                id="dni"
                label="DNI"
                name="dni"
                autoComplete="DNI"
                inputProps={{
                  onChange: (event) => handleDNI(event),
                }}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{
                  onChange: (event) => handlePassword(event),
                }}
              />
            </Grid> */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                  <FormControlLabel 
                    value="U" 
                    control={<Radio />} 
                    label="Persona" 
                    onChange={handleRoot}
                    />
                  <FormControlLabel 
                    value="N" 
                    control={<Radio />} 
                    label="Negocio" 
                    onChange={handleRoot}
                    />
                    <FormControlLabel 
                    value="A" 
                    control={<Radio />} 
                    label="Administrador" 
                    onChange={handleRoot}
                    />
                </RadioGroup>
              </FormControl>
            </Grid>
            </Grid>        
            
          
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  //type="submit"
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
              <Linkear  style={{textDecoration:'none'}} to = '/lusuarios'>
                <Button
                  //type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                Cancelar
                </Button>
                </Linkear>
              </Grid>
              
            </Grid>
          
        </form>
      </div>
     
    </Container>
      </main>

      
      
    </div>
    
    
  );
}