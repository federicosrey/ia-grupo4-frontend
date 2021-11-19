import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Link as Linkear} from 'react-router-dom';

import swal from "sweetalert";
import { useHistory } from 'react-router';
//import clsx from 'clsx';

//importo controller

import { updatePass } from "../controller/miApp.controller"

function Copyright() {
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'black',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  
  const [value, setValue] = React.useState('persona');
  //const [open, setOpen] = React.useState(true);
  const [nombre, setNombre] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [DNI, setDNI] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('');
  const [root, setRoot] = React.useState('')
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
  const handleDNI = (event) => {
    setDNI(event.target.value);
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
const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }
    return true;
  };

  const subirUsuario = async function () {
    let archivoUsuarios = false;

    

      

    if (!isEmpty(DNI) && !isEmpty(password)) {
      archivoUsuarios = await updatePass (DNI,password)
      console.log(archivoUsuarios);
      if(archivoUsuarios){
        swal("TRANSACCION OK", "Contraseña generada con éxito!!.", "success");
        setTimeout(() => {
          history.push({
            pathname: "/",
           });
        }, 1300);
      }else{
        swal("HA OCURRIDO UN ERROR", "La contraseña no pudo ser generada.", "warning");
        setTimeout(() => {
          history.push({
            pathname: "/signup",
           });
        }, 1300);
      }
    
    }else {
      swal("DATOS INCOMPLETOS", "Complete todos los datos para continuar.", "warning");
        setTimeout(() => {
          history.push({
            pathname: "/signup",
           });
        }, 1300);
      
    }
  }

  const redirect = async () => {
    await subirUsuario()
    
  }

/*const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };*/
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Bienvenido a GIPEY          
        </Typography>
        <Typography component="h1" variant="h5">          
          Crea tu contraseña por primera vez 
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
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
            </Grid> */}
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
            <Grid item xs={12}>
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
            </Grid>
            
          </Grid>
          
          <Linkear  style={{textDecoration:'none'}} to = "/signin">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {redirect()}}
            >
              COMENZAR
            </Button>
          </Linkear>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Linkear  style={{textDecoration:'none'}} to = "/signin">
                Ya iniciaste tu sesión por primera vez? Inicia Sesión
              </Linkear>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}