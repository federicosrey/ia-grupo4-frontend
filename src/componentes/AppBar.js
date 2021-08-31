import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInSide from './SignIn';


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

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6" className={classes.title}>
              TU NUEVA FORMA DE PAGAR
            </Typography>
              <Link to = "/signin">
                <Button color="white">
                  Login
                </Button>
              </Link>
            
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/signin" exact>
            <SignInSide></SignInSide>
          </Route>
        </Switch>
      </div>
    </Router>

    
  );
}

