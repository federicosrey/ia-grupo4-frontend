import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { agregarTarjeta } from '../controller/miApp.controller';
import { TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function DialogoPago(props) {
  const  row  = props;
  const [open, setOpen] = React.useState(false);
  const [descripcion, setDescripcion] = React.useState('')
  const [limite, setLimite] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  }
  const handleLimite = (event) => {
    setLimite(event.target.value);
  }

  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const subirUsuario = async function () {
    let archivoUsuarios = false;
    console.log("subir usuario");

   // if (!isEmpty(nombre) && validateValidEmail(email) && !isEmpty(lastname) && !isEmpty(cuilcuit) && !isEmpty(password)) {
      archivoUsuarios = await agregarTarjeta (descripcion, limite)
    //}
    //else {
    //  alert("Completar todos los datos.")
    //}
    setOpen(false);
  }

  const redirect = async () => {
    const ok = await subirUsuario()
    /* if (ok) {
      history.push("/lusuario")
    } */
  }


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Agregar
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar Tarjeta</DialogTitle>
        <DialogContent>
          {console.log(row.name)}
          <TextField
            
            margin="dense"
            id="name"
            label="Descripción"
            defaultValue= {row.name}
            type="email"
            fullWidth
            onChange = {handleDescripcion}
          />
          <TextField
            margin="dense"
            id="total"
            label="Límite"
            type="number"
            fullWidth
            onChange = {handleLimite}
          />
          {/* <FormControl required className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">Medio de Pago</InputLabel>
                <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={age}
                onChange={handleChange}
                className={classes.selectEmpty}
                >
                <MenuItem value="">
                    <em>Ninguno</em>
                </MenuItem>
                <MenuItem value={10}>Efectivo</MenuItem>
                <MenuItem value={20}>Débito</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
          </FormControl> */}
        </DialogContent>
        <DialogActions>
          <Button 
            // onClick={handleClose} 
            onClick={handleClose}
            color="primary"
          >
            Cancelar
          </Button>
          <Button onClick={() => {redirect()}} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
