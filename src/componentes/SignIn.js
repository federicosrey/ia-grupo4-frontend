import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as Linkear} from 'react-router-dom';
//import Radio from '@material-ui/core/Radio';
//import RadioGroup from '@material-ui/core/RadioGroup';
//import FormControl from '@material-ui/core/FormControl';
//import FormLabel from '@material-ui/core/FormLabel';
import { login } from "../controller/miApp.controller";
import { Redirect } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000">
        Gipey Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'black',
  },
  
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = React.useState(''); 
  const [password, setPassword] = React.useState('');
  const [usuarioValido, setUsuarioValido] = React.useState(false);
  const [usuarioRoot, setUsuarioRoot] = React.useState(false);
  const [usuarioNeg, setUsuarioNeg] = React.useState(false);
  //handlers

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  //Ejecuto el endopoint para validar login
  const validarLogin = async function () {
    let datos = {
      email: email,
      password: password
    }
    
    let getLogin = await login(datos);

    if (getLogin.rdo === 0) {
      setUsuarioValido(true);
    }
    if (getLogin.rdo === 2) {
      setUsuarioRoot(true);
    }
    if (getLogin.rdo === 3) {
      setUsuarioNeg(true);
    }
    if (getLogin.rdo === 1) {
      alert(getLogin.mensaje)
    }

  }
  
  //Valido campos y llamo endpoint
  const loginUser = () => {
    if (email !== "" && password !== "") {
      validarLogin();
    }
    else {
      alert("Debe completar usuario y password");
    }


  }
  const redirect = () => {
    if (usuarioRoot) {
      return <Redirect to="/adash" />
    }
    else if (usuarioValido) {
      return <Redirect to="/dash" />
    }
    else if (usuarioNeg) {
      return <Redirect to="/ndash" />
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {redirect()}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            inputProps={{
                  onChange: (event) => handleEmail(event),
                }}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
                      
          <Linkear  style={{textDecoration:'none'}} to = "/signin">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={loginUser}
              >
                
                Ingresar
              </Button>
          </Linkear>
          <Grid container>
             {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */} 
            <Grid item>
              <Linkear  style={{textDecoration:'none'}} to = "/signup">
                {"No tenés una cuenta? Registrate"}
              </Linkear>
            </Grid> 
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}