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
import { postPagos, UpdateidPagoMovimiento, getMontosaPagaraEstablecimientos} from '../controller/miApp.controller';
import { postPagosExterno } from '../controller/externoApp.controller';
import swal from "sweetalert";
import { useHistory } from 'react-router';

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

export default function ListLiquidaciones() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [cuilcuit, setcuilcuit] = React.useState('')
  const [movimientos, setMovimientos] = React.useState([]);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getAllMovimientos = async () => {
    let response  = await getMontosaPagaraEstablecimientos();
    
    if(response.length>0){
      setMovimientos(response);
    }else{
      swal("TRANSACCION RECHAZADA", "NO HAY PAGOS PENDIENTES", "warning");
      setTimeout(() => {
         history.push({
           pathname: "/adash",
         });
      }, 1300);
    }
    
  }

  const generarPagos = async () => {
    for (var i = 0; i < movimientos.length; i++){
      let respons  = await postPagos(movimientos[i]);
      for(var x = 0; x < movimientos[i].mov.length; x++){
        let res  = await UpdateidPagoMovimiento(movimientos[i].mov[x],respons);
        
      }
    }
    
      alert("Pagos generados exitosamente");
    
    
  }

  const generarPagoYEnviar = async () => {
    for (var i = 0; i < movimientos.length; i++){
      var cont = 0;
      let respons  = await postPagos(movimientos[i]);
      let bancoRespons = await postPagosExterno(movimientos[i], respons.data);
      console.log("respuesta del banco", bancoRespons);

      if(respons.status===201 && bancoRespons.status === 201){
          await cont++;  
      }

      for(var x = 0; x < movimientos[i].mov.length; x++){
        let res  = await UpdateidPagoMovimiento(movimientos[i].mov[x],respons.data);
        
      }
    }
     
    if(cont > 0){
      swal("TRANSACCION OK", "Se procesaron: "+cont+" pagos.", "success");
      setTimeout(() => {
        history.push({
          pathname: "/adash",
         });
      }, 1300);
    }else{
      swal("TRANSACCION RECHAZADA", "No se proceso ningún pago.", "warning");
      setTimeout(() => {
        history.push({
          pathname: "/adash",
         });
      }, 1300);
      
    }   
    
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
            G I P E Y | ADMINISTRADOR
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
            
              <Button
                fullWidth
                variant="contained"
                color="black"
                onClick={() => {getAllMovimientos()}}
              >
                
                OBTENER MOVIMIENTOS
              </Button>
            
            </Grid>
           
            </Grid>
            <Grid container item xs={12} spacing={3}>
            <Grid item xs>
              <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>                    
                      <TableCell>Negocio</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {movimientos.map((m) => (
                      <TableRow key={m.cuitNegocio}>
                        <TableCell component="th" scope="row">{m.cuitNegocio}</TableCell>                    
                        <TableCell align="right">{m.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            
            </Grid>
            {/* <Grid item xs={3}>
            
              <Button
                fullWidth
                variant="contained"
                color="black"
                onClick={() => {generarPagos()}}
              >
                
                PAGAR
              </Button>
              
            
            </Grid> */}
            <Grid item xs={3}>
            
              <Button
                fullWidth
                variant="contained"
                color="black"
                onClick={() => {generarPagoYEnviar()}}
              >
                
                Pagar y Enviar
              </Button>
            
            </Grid>
          </Grid>
          
        </Container>
      </main>

    </div>
  );
}