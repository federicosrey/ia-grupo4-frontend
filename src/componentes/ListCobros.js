import React, { useEffect } from 'react';
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
import TTarjetas from './TTarjetas';
import {Link as Linkear} from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
//import DialogoPago from './DialogoPago';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getLiquidaciones, getTarjetas, postCobros, UpdateidCobroLiquidacion } from '../controller/miApp.controller';

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
}));

export default function ListCobros() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [dni, setDni] = React.useState('')
  const [tarjetas, setTarjetas] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDni = (event) => {
    setDni(event.target.value);
  }

  

  const getAllLiquidaciones = async () => {
    let response  = await getLiquidaciones(dni);
    
    setTarjetas(response.docs);
  }

  const generarCobro = async () => {
    for (var i = 0; i < tarjetas.length; i++){
      let respons  = await postCobros(tarjetas[i]);
      
      let res  = await UpdateidCobroLiquidacion(tarjetas[i]._id,respons);
        
      
    }
    
      alert("Cobro generado exitosamente");
    
    
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}
      style={{ background: 'black' }}>
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
        <Container maxWidth="lg" className={classes.container}>
            
          <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
          <Grid item xs={3}>
            
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dni"
                label="DNI"
                name="dni"
                autoComplete="dni"
                inputProps={{
                  onChange: (event) => handleDni(event),
                }}
              />
            
            </Grid>
            <Grid item xs={3}>
            
              <Button
                fullWidth
                variant="contained"
                color="black"
                onClick={() => {getAllLiquidaciones()}}
              >
                
                Buscar
              </Button>
            
            </Grid>
           
            </Grid>
            <Grid container item xs={12} spacing={3}>
            <Grid item xs>
              <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tarjeta</TableCell>
                      <TableCell align="right">Total</TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tarjetas.map((t) => (
                      <TableRow key={t._id}>
                        <TableCell component="th" scope="row">{t.numeroTarjeta}</TableCell>
                        <TableCell align="right">{t.total}</TableCell>
                        
                      </TableRow>
                    ))} 
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            
            </Grid>
            <Grid item xs={3}>
            
              <Button
                fullWidth
                variant="contained"
                color="black"
                onClick={() => {generarCobro()}}
              >
                
                COBRAR
              </Button>
            
            </Grid>
          </Grid>
          
        </Container>
      </main>

    </div>
  );
}