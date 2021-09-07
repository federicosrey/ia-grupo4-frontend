import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import{
  Link
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  const estilo =  {    
    color: 'white',
    marginRight: '50px',
    textDecoration: 'none',
    fontSize: '20px'
  };

  return (
    
      <div className={classes.root}>
        <AppBar position="static" style={{ background: 'black' }}>
          <Toolbar>
            
              <Link style={estilo} to ="/signin">
                
                  Iniciar Sesión
                
              </Link>
              <Link style={estilo} to ="/signup">
                
                  Registrarse
                
              </Link>
          </Toolbar>
        </AppBar>
      </div>
    

    
  );
}

