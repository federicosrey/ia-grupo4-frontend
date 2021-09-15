import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getUsuario } from '../controller/miApp.controller';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropdownUsuarios() {
  const classes = useStyles();
  const [usuarioSeleccionado, setUsuarioSeleccionado] = React.useState('');
  const [usuarios, setUsuarios] = useState([]);

  const handleChange = (event) => {
    setUsuarioSeleccionado(event.target.value);
  };

  useEffect(() => {
    getAllUsuarios();
    console.log("useeffect")
    
            
  },[]);

  

  const getAllUsuarios = async () => {
    let response  = await getUsuario();
    setUsuarios(response);
  }

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <Select
          value={usuarioSeleccionado}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >

        {usuarios.map((u) => (
            <MenuItem value={u.name}>{u.name}</MenuItem>
          ))}

          
        </Select>
        <FormHelperText>Usuario</FormHelperText>
      </FormControl>
      
    </div>
  );
}
