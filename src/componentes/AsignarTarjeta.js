import React, { useEffect, useState } from 'react';
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
import { tertiaryListItems } from './listItems';
import AlertDialog from './AlertDialog';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';
import {Link as Linkear} from 'react-router-dom';
import { getUsuario, getTarjetas, asignarTarjeta } from '../controller/miApp.controller';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AsignarTarjeta() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = React.useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = React.useState('');
  const [tarjetas, setTarjetas] = useState([]);

  const asignar = async function () {
    
    console.log(" front ", usuarioSeleccionado, tarjetaSeleccionada);
    // if (!isEmpty(nombre) && validateValidEmail(email) && !isEmpty(lastname) && !isEmpty(cuilcuit) && !isEmpty(password)) {
    var procesoAsignacion = await asignarTarjeta (usuarioSeleccionado, tarjetaSeleccionada);
    //}
    //else {
    //  alert("Completar todos los datos.")
    //}
    alert(procesoAsignacion);
    
    
    
  }

  const redirect = async () => {
    const ok = await asignar()
    
    if (ok) {
      //setOpen(false);
      //history.push("/lusuario")
    } 
  }

  const handleChangeUsuario = (event) => {
    setUsuarioSeleccionado(event.target.value);    
  };

  const handleChangeTarjeta = (event) => {
    setTarjetaSeleccionada(event.target.value);    
  };

  useEffect(() => {
    getAllUsuarios();
    getAllTarjetas();  
  },[]);

  

  const getAllUsuarios = async () => {
    let response  = await getUsuario();
    setUsuarios(response);
  }

  const getAllTarjetas = async () => {
    let response  = await getTarjetas();
    setTarjetas(response);
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
            <FormControl className={classes.formControl}>
                <Select
                  value={usuarios._id}
                  onChange={handleChangeUsuario}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ 'aria-label': 'Without label' }}
                >

                {usuarios.map((u) => (
                    <MenuItem value={u._id}>{u.cuilcuit}{" - "}{u.name}</MenuItem>
                  ))}

                  
                </Select>
                <FormHelperText>Usuario</FormHelperText>
            </FormControl>
          
          </Grid>

            <Grid item xs={12}>
            <FormControl className={classes.formControl}>
                <Select
                  value={tarjetas.descripcion}
                  onChange={handleChangeTarjeta}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ 'aria-label': 'Without label' }}
                >

                {tarjetas.map((t) => (
                    <MenuItem value={t.descripcion}>{t.descripcion}</MenuItem>
                ))}

                  
                </Select>
                <FormHelperText>Tarjeta</FormHelperText>
            </FormControl>
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