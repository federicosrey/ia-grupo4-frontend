  
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
//import LayersIcon from '@material-ui/icons/Layers';
//import AssignmentIcon from '@material-ui/icons/Assignment';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <Link  style={{textDecoration:'none', color: 'gray'}} to = "/dash">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>  
    <Link  style={{textDecoration:'none', color: 'gray'}} to = "/movimientos">
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Movimientos" />
        </ListItem>
      </Link>
    <Link  style={{textDecoration:'none', color: 'gray'}} to = "/productos">
      <ListItem button>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItem>
    </Link>
    <Link  style={{textDecoration:'none', color: 'gray'}} to = "/perfil">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>
    </Link>
    {/* <Link  style={{textDecoration:'none', color: 'gray'}} to = "/comercios">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Comercios Adheridos" />
      </ListItem>
    </Link> */}
  </div>
);

export const secondaryListItems = (
  
    <div>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/ndash">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>  
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/nmovimientos">
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Movimientos" />
        </ListItem>
      </Link>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/nperfil">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>
      </Link>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/cobrar">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Cobrar" />
        </ListItem>
      </Link>
    </div>
  );

  export const tertiaryListItems = (
  
    <div>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/adash">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>  
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/lusuarios">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>
      </Link>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/ltarjetas">
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Tarjetas" />
        </ListItem>
      </Link>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/lLiquidaciones">
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Liquidar" />
        </ListItem>
      </Link>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/lCobros">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Cobrar" />
        </ListItem>
      </Link>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/lPagos">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Pagar" />
        </ListItem>
      </Link>
      <ListSubheader inset>Consultas Baires Bank</ListSubheader>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/extlLiquidaciones">
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Liquidaciones" />
        </ListItem>
      </Link>
      <Link  style={{textDecoration:'none', color: 'gray'}} to = "/extlPagos">
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Pagos" />
        </ListItem>
      </Link>
    </div>
  );