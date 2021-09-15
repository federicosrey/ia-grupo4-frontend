import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getTarjetas } from '../controller/miApp.controller';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [tarjetas, setTarjetas] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    getAllTarjetas();
    console.log("useeffect")
    
            
  },[]);

  

  const getAllTarjetas = async () => {
    let response  = await getTarjetas();
    setTarjetas(response);
  }

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >

        {tarjetas.map((t) => (
            <MenuItem value={t.descripcion}>{t.descripcion}</MenuItem>
          ))}

          
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      
    </div>
  );
}
